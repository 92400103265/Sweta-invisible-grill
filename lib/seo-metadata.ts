import type { Metadata } from 'next';
import { PRIMARY } from '@/constants/contacts';
import { locationData, validLocations, PRIMARY_LOCATION } from '@/constants/locations';

// Primary service locations, derived from the single source of truth in
// constants/locations.ts so addresses/coordinates stay identical everywhere
// they are emitted (metadata, JSON-LD, sitemaps).
export const PRIMARY_LOCATIONS = validLocations.map(slug => {
  const loc = locationData[slug];
  return {
    name: loc.name as string,
    state: loc.state as string,
    areas: [...loc.primaryAreas] as string[],
    allAreas: [...loc.areas] as string[],
    streetAddress: loc.streetAddress as string,
    postalCode: loc.postalCode as string,
    latitude: loc.latitude as number,
    longitude: loc.longitude as number,
  };
});


// "Gurugram, Delhi NCR and Noida"
export const LOCATIONS_SENTENCE = 'Gurugram, Delhi NCR and Noida';

// Generate a focused keyword set for a service.
//
// This deliberately stays small. The `keywords` meta tag is ignored by Google
// and an oversized one only bloats the HTML payload (it previously emitted
// ~127KB per service page, which more than tripled document size and hurt LCP).
// We keep a tight, human-plausible set covering the primary city first, then
// the remaining service cities, plus the generic intent variations.
export function generateLocationKeywords(serviceName: string): string[] {
  const keywords: string[] = [];

  // Generic, non-geo intent variations.
  keywords.push(
    serviceName,
    `${serviceName} installation`,
    `${serviceName} services`,
    `${serviceName} price`,
    `${serviceName} cost`,
    `${serviceName} near me`,
    `best ${serviceName}`,
    `professional ${serviceName} installation`,
    `${serviceName} dealers`,
    `${serviceName} installation cost`,
  );

  // City-level variations, primary city first (PRIMARY_LOCATIONS is ordered).
  PRIMARY_LOCATIONS.forEach(location => {
    const city = location.name;
    keywords.push(
      `${serviceName} in ${city}`,
      `${serviceName} installation in ${city}`,
      `best ${serviceName} in ${city}`,
      `${serviceName} cost in ${city}`,
      `${serviceName} dealers in ${city}`,
      `${serviceName} near me in ${city}`,
      `${serviceName} in ${location.state}`,
    );
  });

  // Neighbourhood-level long tail for the primary city only — this is where
  // local intent actually converts, and it keeps the list a sane length.
  PRIMARY_LOCATION.primaryAreas.forEach(area => {
    keywords.push(`${serviceName} in ${area}`, `${serviceName} installation ${area} ${PRIMARY_LOCATION.name}`);
  });

  return [...new Set(keywords)];
}

// Google truncates meta descriptions around 155-160 characters. Trim on a word
// boundary so snippets never end mid-word.
export function clampSnippet(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:-]+$/, '');
}

// Append the brand to a title, degrading gracefully so long service names do
// not push the title past Google's ~60 character display window: full brand,
// then the short form, then no brand at all.
export function withBrand(base: string, max = 60): string {
  const full = `${base} | Sweta Invisible Grill`;
  if (full.length <= max) return full;
  const short = `${base} | Sweta Grill`;
  return short.length <= max ? short : base;
}

// Generate service-specific metadata with location targeting
// Google Analytics 4 configuration
export const GA_MEASUREMENT_ID = 'G-339PTXCP6X';

export function generateServiceMetadata(params: {
  serviceName: string;
  serviceSlug: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  primaryLocation?: string;
}): Metadata {
  // longDescription is intentionally not used in the meta description: long copy
  // belongs in the page body, and Google truncates snippets around 155 chars.
  const { serviceName, serviceSlug, shortDescription, image, primaryLocation } = params;
  
  // Generate location-specific content
  const locationInfo = primaryLocation
    ? PRIMARY_LOCATIONS.find(loc => loc.name === primaryLocation)
    : null;

  // A page targeting one city says so; the generic service page leads with the
  // primary focus city but names the wider footprint, so the two never compete
  // for the same query.
  const locationSuffix = primaryLocation
    ? ` in ${primaryLocation}`
    : ` in ${PRIMARY_LOCATION.name} & Delhi NCR`;

  const areas = locationInfo
    ? `Serving ${locationInfo.areas.join(', ')} and surrounding areas`
    : `Serving ${LOCATIONS_SENTENCE}`;

  // Keep titles inside Google's ~60 character display window.
  const title = withBrand(`${serviceName}${locationSuffix}`);

  // Keep descriptions near the ~155 character snippet limit. The long service
  // copy belongs in the page body, not in the meta description.
  const alreadyNamesCity = new RegExp(`\\b(${(primaryLocation ?? PRIMARY_LOCATION.name)})\\b`, 'i').test(shortDescription);
  const descriptionTail = alreadyNamesCity
    ? `. Free site visit, 10-year warranty. Call ${PRIMARY.display.trim()}.`
    : `${locationSuffix}. Free site visit, 10-year warranty. Call ${PRIMARY.display.trim()}.`;
  const description = `${clampSnippet(shortDescription.replace(/\.$/, ''), 155 - descriptionTail.length)}${descriptionTail}`;
  const socialDescription = clampSnippet(`${shortDescription}${locationSuffix}. ${areas}.`, 280);
  
  // Generate enhanced keywords combining location and industry terms
  const locationKeywords = generateLocationKeywords(serviceName);
  const serviceTypeKeywords = [
    'residential installation',
    'commercial installation',
    'apartment fitting',
    'villa installation',
    'office installation'
  ];
  const qualityKeywords = [
    'professional installation',
    'certified installers',
    'expert fitting',
    'quality materials',
    'warranty service'
  ];
  const serviceKeywords = [
    'authorized dealer',
    'free inspection',
    'same day service',
    '24x7 support',
    'emergency service'
  ];

  const keywords = [...new Set([...locationKeywords, ...serviceTypeKeywords, ...qualityKeywords, ...serviceKeywords])].join(', ');
  
  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    alternates: {
      canonical: `https://www.invisiblesafetygrillpatna.com/services/${serviceSlug}/`,
    },
    openGraph: {
      title,
      description: socialDescription,
      url: `https://www.invisiblesafetygrillpatna.com/services/${serviceSlug}/`,
      siteName: 'Sweta Invisible Grill',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${serviceName} - Professional Installation Services in ${LOCATIONS_SENTENCE}`,
        },
      ],
      type: 'article',
      // Open Graph article metadata removed due to type constraints
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: socialDescription,
      images: [image],
      site: '@SwetaInvisibleGrill',
      creator: '@SwetaInvisibleGrill', 
    },
    verification: {
      google: 'P8HUVCb--rZ-IF-X_ZwXQX1FOPvjQI5M0MWRtAwVMfc',
      other: {
        'msvalidate.01': 'A59B620A02512B76293509176B16FF32'
      }
    },
  };
}

// Generate structured data for service
export function generateServiceSchema(params: {
  serviceName: string;
  description: string;
  image: string;
  slug: string;
  priceRange?: string;
  specifications?: Array<{ label: string; value: string }>;
}) {
  const { serviceName, description, image, slug, priceRange = '₹₹', specifications = [] } = params;

  // Create a Product schema for physical products
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': serviceName,
    'description': description,
    'image': `https://www.invisiblesafetygrillpatna.com${image}`,
    'brand': {
      '@type': 'Brand',
      'name': 'Sweta Invisible Grill'
    },
    'manufacturer': {
      '@type': 'Organization',
      'name': 'Sweta Invisible Grill'
    },
    'sku': `kgr-${slug}`,
    'mpn': `KGR-${slug.toUpperCase()}`,
    'category': 'Home Improvement > Safety & Security',
    'additionalProperty': specifications.map(spec => ({
      '@type': 'PropertyValue',
      'name': spec.label,
      'value': spec.value
    })),
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'priceRange': '₹110 - ₹150 per sq ft',
      'lowPrice': 110,
      'highPrice': 150,
      'offerCount': 50,
      'price': 140,
      'unitText': 'per square foot',
      'priceValidUntil': new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      'availability': 'https://schema.org/InStock',
      'itemCondition': 'https://schema.org/NewCondition',
      'warranty': '10-year warranty',
      'seller': {
        '@type': 'Organization',
        'name': 'Sweta Invisible Grill',
        'url': 'https://www.invisiblesafetygrillpatna.com'
      },
      'deliveryLeadTime': {
        '@type': 'QuantitativeValue',
        'minValue': 1,
        'maxValue': 3,
        'unitCode': 'DAY'
      },
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': PRIMARY_LOCATION.latitude,
          'longitude': PRIMARY_LOCATION.longitude
        },
        'geoRadius': {
          '@type': 'QuantitativeValue',
          'value': 100,
          'unitCode': 'KMT'
        }
      }
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': 4.9,
      'bestRating': 5,
      'ratingCount': 1126,
      'reviewCount': 1126,
      'author': {
        '@type': 'Organization',
        'name': 'Sweta Invisible Grill',
        'sameAs': 'https://www.invisiblesafetygrillpatna.com'
      }
    }
  };
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      productSchema,
      {
        '@type': 'WebPage',
        '@id': `https://www.invisiblesafetygrillpatna.com/services/${slug}/#webpage`,
        'url': `https://www.invisiblesafetygrillpatna.com/services/${slug}/`,
        'name': `${serviceName} in ${PRIMARY_LOCATIONS.map(loc => loc.name).join(', ')}`,
        'isPartOf': {
          '@id': 'https://www.invisiblesafetygrillpatna.com/#website'
        },
        'primaryImageOfPage': {
          '@id': `https://www.invisiblesafetygrillpatna.com/services/${slug}/#primaryimage`
        },
        'dateModified': new Date().toISOString(),
        'description': description,
        'inLanguage': 'en-IN'
      },
      {
        '@type': 'ImageObject',
        '@id': `https://www.invisiblesafetygrillpatna.com/services/${slug}/#primaryimage`,
        'url': `https://www.invisiblesafetygrillpatna.com${image}`,
        'contentUrl': `https://www.invisiblesafetygrillpatna.com${image}`,
        'caption': `${serviceName} Installation Services`
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.invisiblesafetygrillpatna.com/#website',
        'url': 'https://www.invisiblesafetygrillpatna.com',
        'name': 'Sweta Invisible Grill',
        'description': 'Professional Invisible Grills and Safety Nets Installation Services across Gurugram, Delhi NCR and Noida',
        'publisher': {
          '@id': 'https://www.invisiblesafetygrillpatna.com/#organization'
        },
        'inLanguage': 'en-IN'
      },
      {
        '@type': 'Service',
        'name': serviceName,
        'serviceType': serviceName,
        'description': description,
        'image': `https://www.invisiblesafetygrillpatna.com${image}`,
        'category': 'Home Improvement Services',
        'keywords': generateLocationKeywords(serviceName).join(', '),
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Sweta Invisible Grill',
          'telephone': PRIMARY.phone,
          'priceRange': priceRange,
          'image': 'https://www.invisiblesafetygrillpatna.com/logo.png',
          'logo': '/images/logo.png',
          'description': 'Leading provider of invisible grills and safety nets installation services across Gurugram, Delhi NCR and Noida',
          'foundingDate':  '2026',
          'sameAs': ['https://x.com/Kgr_Grills_Nets'],
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Invisible Grills and Safety Nets Services',
            'itemListElement': [
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Invisible Grills Installation' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Safety Nets Installation' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Bird Protection Solutions' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Sports Nets Installation' } }
            ]
          },
          'address': PRIMARY_LOCATIONS.map(loc => ({
            '@type': 'PostalAddress',
            'streetAddress': loc.streetAddress,
            'addressLocality': loc.name,
            'addressRegion': loc.state,
            'postalCode': loc.postalCode,
            'addressCountry': 'IN'
          })),
          'areaServed': {
            '@type': 'State',
            'name': 'Gurugram, Delhi NCR and Noida',
            'containsPlace': PRIMARY_LOCATIONS.map(loc => ({
              '@type': 'City',
              'name': loc.name,
              'containedInPlace': {
                '@type': 'State',
                'name': loc.state
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': loc.latitude.toString(),
                'longitude': loc.longitude.toString()
              }
            }))
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '08:00',
            'closes': '20:00'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': PRIMARY_LOCATION.latitude.toString(),
            'longitude': PRIMARY_LOCATION.longitude.toString(),
            'addressRegion': PRIMARY_LOCATION.state,
            'addressLocality': PRIMARY_LOCATION.name
          }
        },
        'offers': {
          '@type': 'AggregateOffer',
          'availability': 'InStock',
          'priceRange': priceRange,
          'priceCurrency': 'INR',
          'offerCount':  '3',
          'offers': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': `${serviceName} Installation`,
                'description': description
              },
              'priceSpecification': {
                '@type': 'PriceSpecification',
                'priceCurrency': 'INR',
                'description': 'Free site inspection and consultation'
              }
            }
          ]
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'ratingCount': '1126',
          'bestRating': '5',
          'worstRating': '1',
          'reviewCount': '1126',
          'itemReviewed': {
            '@type': 'Service',
            'name': serviceName,
            'description': description,
            'provider': {
              '@type': 'Organization',
              'name': 'Sweta Invisible Grill',
              'url': 'https://www.invisiblesafetygrillpatna.com/'
            }
          }
        },
        'url': `https://www.invisiblesafetygrillpatna.com/services/${slug}/`,
        'potentialAction': [
          {
            '@type': 'ContactAction',
            'target': {
              '@type': 'EntryPoint',
              'urlTemplate': 'https://www.invisiblesafetygrillpatna.com/contact/',
              'actionPlatform': [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform'
              ]
            },
            'name': 'Contact Us',
            'description': 'Get in touch with us for a free consultation'
          },
          {
            '@type': 'ViewAction',
            'target': {
              '@type': 'EntryPoint',
              'urlTemplate': `https://www.invisiblesafetygrillpatna.com/services/${slug}/`,
              'inLanguage': 'en-IN'
            },
            'name': 'View Service Details'
          }
        ],
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://www.invisiblesafetygrillpatna.com/services/${slug}/#webpage`
        }
      }
    ]
  };
}

// Generate breadcrumb schema with proper structure and @id
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>, pageUrl?: string) {
  // Ensure items have trailing slashes for consistency with next.config.ts (trailingSlash: true)
  const normalizedItems = items.map(item => ({
    ...item,
    url: item.url.endsWith('/') ? item.url : `${item.url}/`
  }));

  // Generate a proper @id for the breadcrumb based on the page URL
  const breadcrumbId = pageUrl 
    ? `https://www.invisiblesafetygrillpatna.com${pageUrl}#breadcrumb`
    : 'https://www.invisiblesafetygrillpatna.com/#breadcrumb';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    'itemListElement': normalizedItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://www.invisiblesafetygrillpatna.com${item.url}`
    }))
  };
}

// Generate FAQ schema for service pages with enhanced structured data
export function generateServiceFAQSchema(faqs: Array<{ question: string; answer: string }>, serviceName?: string) {
  const faqEntities = faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer,
    },
    'datePublished': new Date().toISOString().split('T')[0],
    'dateModified': new Date().toISOString().split('T')[0],
    'author': {
      '@type': 'Organization',
      'name': 'Sweta Invisible Grill',
      'url': 'https://www.invisiblesafetygrillpatna.com'
    },
    'about': {
      '@type': 'Service',
      'name': serviceName || 'Installation Services',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Sweta Invisible Grill'
      }
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqEntities,
    'isPartOf': {
      '@type': 'WebPage',
      'url': `https://www.invisiblesafetygrillpatna.com/services${serviceName ? `/${serviceName}` : ''}/`
    },
    'about': {
      '@type': 'Service',
      'name': serviceName || 'Professional Installation Services',
      'provider': {
        '@type': 'Organization',
        'name': 'Sweta Invisible Grill',
        'url': 'https://www.invisiblesafetygrillpatna.com'
      }
    },
    'inLanguage': 'en-IN'
  };
}

// Per-city profile used to give each city genuinely different copy rather than
// the same paragraph with the city name swapped in. Exported so the service +
// location pages can use it too, not just /locations/[location]/.
export const LOCATION_PROFILES = {
  Gurugram: {
    climate: 'hot summers, monsoon rains and dense urban development',
    concern: ['dust and pollution', 'high-rise apartments', 'balcony safety', 'bird entry'],
    benefit: [
      'weather-resistant materials',
      'UV-resistant solutions',
      'corrosion-resistant fittings',
      'high-rise installation expertise',
      'clean modern finishes'
    ],
    areas: ['Sector 33', 'Sushant Lok', 'DLF Phase 1', 'DLF Phase 2', 'Golf Course Road', 'MG Road'],
    expertise: 'Professional installation services across Gurugram',
    specialFeature: 'Solutions designed for high-rise apartments, balconies and modern homes',
    serviceHighlights: {
      'invisible-grills': 'Modern invisible grills for Gurugram apartments and villas',
      'safety-nets': 'Safety nets for balconies, windows and high-rise homes',
      'bird-protection': 'Bird protection solutions for residential and commercial properties',
      'sports': 'Custom sports net installations for local facilities'
    }
  },
  'Delhi NCR': {
    climate: 'hot summers, seasonal pollution and monsoon conditions',
    concern: ['dust and pollution', 'high-rise buildings', 'balcony safety', 'bird entry'],
    benefit: [
      'UV-resistant materials',
      'weather-resistant installations',
      'corrosion-resistant fittings',
      'custom safety solutions',
      'professional finishing'
    ],
    areas: ['Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad'],
    expertise: 'Professional installation services across Delhi NCR',
    specialFeature: 'Custom safety and bird-control solutions for homes, apartments and commercial spaces',
    serviceHighlights: {
      'invisible-grills': 'Elegant invisible grills for Delhi NCR homes and apartments',
      'safety-nets': 'Balcony and window safety nets for residential properties',
      'bird-protection': 'Pigeon and bird protection for balconies, ducts and open areas',
      'sports': 'Professional sports net solutions for Delhi NCR facilities'
    }
  },
  Noida: {
    climate: 'hot summers, monsoon rains and urban residential conditions',
    concern: ['high-rise apartments', 'dust and pollution', 'balcony safety', 'bird entry'],
    benefit: [
      'UV-resistant materials',
      'weather-resistant nets',
      'corrosion-resistant fittings',
      'high-rise installation expertise',
      'neat custom fitting'
    ],
    areas: ['Sector 15', 'Sector 18', 'Sector 34', 'Sector 50', 'Sector 62', 'Sector 137'],
    expertise: 'Professional installation services across Noida',
    specialFeature: 'Custom solutions for high-rise apartments, balconies, windows and commercial buildings',
    serviceHighlights: {
      'invisible-grills': 'Premium invisible grills for Noida apartments and villas',
      'safety-nets': 'Reliable safety nets for balconies and windows',
      'bird-protection': 'Humane pigeon and bird protection solutions',
      'sports': 'Custom sports nets for schools, academies and facilities'
    }
  },
};

// Generate rich, unique content variations for each location
export function generateLocationContent(serviceName: string, location: string): {
  heading: string;
  description: string;
  features: string[];
} {
  const locationSpecific = LOCATION_PROFILES;
  
  const loc = locationSpecific[location as keyof typeof locationSpecific] || locationSpecific['Gurugram'];
  
  const benefits = loc.benefit.join(' with ');
  const concerns = loc.concern.join(', ');
  const areas = loc.areas.join(', ');
  
  return {
    heading: `Professional ${serviceName} Installation in ${location}`,
    description: `Leading provider of professional ${serviceName} services in ${location}, specializing in ${benefits}. We address common challenges like ${concerns} through ${loc.specialFeature}. ${loc.expertise}, serving ${areas} and all surrounding areas.`,
    features: [
      `Serving all prime locations in ${location}`,
      `Free same-day site inspection in ${location}`,
      `${loc.specialFeature}`,
      `Expert team with local experience`,
      `10-year warranty with service support`,
      `24/7 customer support in ${location}`,
      `Customized solutions for ${location} climate`,
      `Best-in-class materials and installation`,
    ],
  };
}