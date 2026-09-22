import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { servicesData, resolveServiceSlug } from "@/data/servicesData";
import { getCanonicalUrl } from "@/lib/canonical-url";
import {
  generateBreadcrumbSchema,
  clampSnippet,
  withBrand,
  LOCATION_PROFILES,
} from "@/lib/seo-metadata";

import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  Building,
  CheckCircle2,
} from "lucide-react";

import { locationData, validLocations } from "@/constants/locations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; location: string }>;
}): Promise<Metadata> {
  const { slug, location } = await params;

  const canonicalSlug = resolveServiceSlug(slug);
  const service = servicesData[canonicalSlug];

  const normalizedLocation =
    location.toLowerCase() as keyof typeof locationData;

  if (!service || !validLocations.includes(normalizedLocation)) {
    return {};
  }

  const locationFormatted =
    normalizedLocation.charAt(0).toUpperCase() +
    normalizedLocation.slice(1);

  const locationInfo = locationData[normalizedLocation];

  const areas = locationInfo.areas.join(", ");

  const locationKeywords = [
    `${service.title} in ${locationFormatted}`,
    `${service.title} installation ${locationFormatted}`,
    `${service.title} services ${locationFormatted}`,
    `best ${service.title} in ${locationFormatted}`,
    `professional ${service.title} ${locationFormatted}`,

    ...locationInfo.areas.map(
      (area) => `${service.title} in ${area}`
    ),

    ...service.features.map(
      (feature) => `${feature} in ${locationFormatted}`
    ),
  ];

  const enhancedDescription = clampSnippet(
    `${service.title} installation in ${locationFormatted}. Free site visit and professional installation. Serving ${locationInfo.primaryAreas.join(", ")} and nearby.`
  );

  const socialDescription = clampSnippet(
    `Professional ${service.title.toLowerCase()} in ${locationFormatted}. Serving ${areas}.`,
    280
  );

  return {
    title: withBrand(
      `${service.title} in ${locationFormatted}`
    ),

    description: enhancedDescription,

    keywords: locationKeywords.join(", "),

    alternates: {
      canonical: getCanonicalUrl(
        `/services/${canonicalSlug}/${normalizedLocation}`
      ),
    },

    openGraph: {
      title: withBrand(
        `${service.title} in ${locationFormatted}`
      ),

      description: socialDescription,

      url: `https://www.invisiblesafetygrillpatna.com/services/${canonicalSlug}/${normalizedLocation}/`,

      siteName: "Sweta Invisible Grill",

      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - Professional Installation Services in ${locationFormatted}`,
        },
      ],

      type: "article",
      locale: "en-IN",
    },

    twitter: {
      card: "summary_large_image",

      title: `${service.title} in ${locationFormatted}`,

      description: socialDescription,

      images: [service.image],
    },

    verification: {
      google:
        "P8HUVCb--rZ-IF-X_ZwXQX1FOPvjQI5M0MWRtAwVMfc",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams(): {
  slug: string;
  location: string;
}[] {
  return Object.keys(servicesData).flatMap((slug) =>
    validLocations.map((location) => ({
      slug,
      location: location.toLowerCase(),
    }))
  );
}

type Props = {
  params: Promise<{
    slug: string;
    location: string;
  }>;
};

export default async function ServiceLocationPage({
  params,
}: Props) {
  const { slug, location } = await params;

  const canonicalSlug = resolveServiceSlug(slug);
  const service = servicesData[canonicalSlug];

  const normalizedLocation =
    location.toLowerCase() as keyof typeof locationData;

  if (
    !service ||
    !validLocations.includes(normalizedLocation)
  ) {
    notFound();
  }

  const locationFormatted =
    normalizedLocation.charAt(0).toUpperCase() +
    normalizedLocation.slice(1);

  const locationInfo =
    locationData[
      normalizedLocation as keyof typeof locationData
    ];

  const cityProfile =
    LOCATION_PROFILES[
      locationFormatted as keyof typeof LOCATION_PROFILES
    ] ?? LOCATION_PROFILES.Gurugram;

  const categoryHighlight =
    cityProfile.serviceHighlights[
      service.category as keyof typeof cityProfile.serviceHighlights
    ] ?? cityProfile.specialFeature;

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Services",
        url: "/services/",
      },
      {
        name: service.title,
        url: `/services/${canonicalSlug}/`,
      },
      {
        name: `${service.title} in ${locationFormatted}`,
        url: `/services/${canonicalSlug}/${normalizedLocation}/`,
      },
    ],
    `/services/${canonicalSlug}/${normalizedLocation}/`
  );

  const baseUrl =
    "https://www.invisiblesafetygrillpatna.com";

  const currentDate = new Date().toISOString();

  const oneYearFromNow = new Date(
    new Date().setFullYear(
      new Date().getFullYear() + 1
    )
  ).toISOString();

  const combinedSchema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": [
          "Service",
          "HomeAndConstructionBusiness",
        ],

        "@id": `${baseUrl}/services/${canonicalSlug}/${normalizedLocation}#service`,

        name: `${service.title} in ${locationFormatted}`,

        description: service.description,

        image: {
          "@type": "ImageObject",
          url: service.image,
          width: 1200,
          height: 675,
        },

        telephone: "+91 7065953252",

        email: "invisiblesafetygrillpatna@gmail.com",

        priceRange: "₹₹₹",

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

          addressLocality: "Gurugram",

          addressRegion: "Haryana",

          postalCode: "122004",

          addressCountry: "IN",
        },

        mainEntityOfPage: {
          "@type": "WebPage",

          "@id": `${baseUrl}/services/${canonicalSlug}/${normalizedLocation}`,
        },

        serviceType: [
          "Installation Service",
          "Home Safety",
          service.title,
        ],

        category: "Home Safety & Security Equipment",

        areaServed: {
          "@type": "City",

          name: locationFormatted,

          containsPlace: locationInfo.areas.map(
            (area) => ({
              "@type": "Place",
              name: area,
            })
          ),
        },

        provider: {
          "@type": "LocalBusiness",

          "@id": `${baseUrl}#organization`,

          name: "Sweta Invisible Grill",

          telephone: "+91 7065953252",

          email: "invisiblesafetygrillpatna@gmail.com",

          image: {
            "@type": "ImageObject",
            url: service.image,
            width: 1200,
            height: 675,
          },

          address: {
            "@type": "PostalAddress",

            streetAddress:
              "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

            addressLocality: "Gurugram",

            addressRegion: "Haryana",

            postalCode: "122004",

            addressCountry: "IN",
          },

          priceRange: "₹₹₹",

          geo: {
            "@type": "GeoCoordinates",

            latitude: locationInfo.latitude,

            longitude: locationInfo.longitude,
          },

          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",

            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],

            opens: "09:00",

            closes: "19:00",
          },
        },

        hasOfferCatalog: {
          "@type": "OfferCatalog",

          name: `${service.title} Services in ${locationFormatted}`,

          itemListElement: [
            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "Free Site Inspection",

                description: `Professional ${service.title.toLowerCase()} consultation in ${locationFormatted}`,
              },

              areaServed: locationInfo.areas,

              priceSpecification: {
                "@type": "PriceSpecification",

                price: "0",

                priceCurrency: "INR",

                description:
                  "Free site inspection and consultation",

                validFrom: currentDate,

                validThrough: oneYearFromNow,
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: `Standard ${service.title} Installation`,

                description:
                  "Professional installation with quality materials",
              },

              areaServed: locationInfo.areas,

              priceSpecification: {
                "@type": "PriceSpecification",

                price: "110",

                priceCurrency: "INR",

                unitText: "per square foot",

                validFrom: currentDate,

                validThrough: oneYearFromNow,
              },

              warranty: {
                "@type": "WarrantyPromise",

                durationOfWarranty: "P15Y",

                warrantyScope: "Labor and Materials",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: `Premium ${service.title} Installation`,

                description:
                  "Premium grade materials with extended warranty and priority support",
              },

              areaServed: locationInfo.areas,

              priceSpecification: {
                "@type": "PriceSpecification",

                price: "150",

                priceCurrency: "INR",

                unitText: "per square foot",

                validFrom: currentDate,

                validThrough: oneYearFromNow,
              },

              warranty: {
                "@type": "WarrantyPromise",

                durationOfWarranty: "P20Y",

                warrantyScope: "Labor and Materials",
              },
            },
          ],
        },

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1126",
          bestRating: "5",
          worstRating: "1",
        },
      },

      breadcrumbSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <div className="min-h-screen bg-background">

        {/* =====================================================
            HERO SECTION
            ===================================================== */}

        <section className="relative overflow-hidden py-16 md:py-28 rounded-2xl">

          <div className="absolute inset-0">

            <Image
              src={service.image}
              alt={`${service.title} in ${locationFormatted}`}
              fill
              priority
              className="h-full w-full object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,8%,0.45)] via-[hsl(222,47%,10%,0.35)] to-[hsl(222,47%,10%,0.25)]" />

          </div>

          <div className="absolute inset-0 grid-pattern-dark opacity-30" />

          <div className="container relative z-10">

            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8"
            >
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">

                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>/</li>

                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>

                <li>/</li>

                <li>
                  <Link
                    href={`/services/${canonicalSlug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>

                <li>/</li>

                <li className="text-white">
                  {locationFormatted}
                </li>

              </ol>
            </nav>

            <div className="mx-auto max-w-4xl">

              <div className="mb-4 flex items-center gap-2 text-white/80">

                <MapPin className="h-5 w-5" />

                <span>
                  Serving {locationFormatted} &
                  surrounding areas
                </span>

              </div>

              <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {service.title} in {locationFormatted}
              </h1>

              <p className="mb-8 text-lg text-white/80 md:text-xl">
                {service.description}
              </p>

              {/* CTAs */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-accent
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="tel:+917065953252"
                  className="
                    inline-flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/20
                  "
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>

              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">

                  <Star className="h-4 w-4 fill-accent text-accent" />

                  4.9 Rating in {locationFormatted}

                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">

                  <Building className="h-4 w-4" />

                  500+ Installations

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY CHOOSE US
            ===================================================== */}

        <section className="section-bg-1 relative py-16 md:py-24">

          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <div className="grid gap-12 md:grid-cols-2">

              <div>

                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Why Choose Us for {service.title} in {locationFormatted}?
                </h2>

                <p className="mb-4 text-foreground/90">
                  {locationFormatted} has {cityProfile.climate},
                  and local properties deal with{" "}
                  {cityProfile.concern
                    .slice(0, 3)
                    .join(", ")}
                  . We specify our{" "}
                  {service.title.toLowerCase()} for
                  those conditions rather than fitting a
                  generic product:{" "}
                  {cityProfile.benefit
                    .slice(0, 2)
                    .join(" and ")}.
                </p>

                <p className="mb-8 text-foreground/90">
                  {categoryHighlight}.{" "}
                  {cityProfile.expertise},
                  covering{" "}
                  {locationInfo.primaryAreas.join(", ")}
                  and the surrounding areas of{" "}
                  {locationFormatted}.
                </p>

                <ul className="space-y-3">

                  {service.benefits.map(
                    (benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />

                        <span className="text-foreground">
                          {benefit}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </div>

              {/* Areas Covered */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-8 shadow-lg">

                <h3 className="mb-6 font-heading text-xl font-semibold text-white">
                  Areas We Serve in {locationFormatted}
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {locationInfo.areas.map(
                    (area, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white/80"
                      >

                        <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />

                        <span className="text-sm">
                          {area}
                        </span>

                      </div>
                    )
                  )}

                </div>

                <p className="mt-6 text-sm text-white/60">
                  Don&apos;t see your area?
                  Contact us – we likely
                  serve your location too!
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CITY SPECIFIC
            ===================================================== */}

        <section className="section-bg-4 relative py-12 md:py-16">

          <div className="container relative z-10">

            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              How we specify {service.title.toLowerCase()}
              for {locationFormatted}
            </h2>

            <p className="mb-8 max-w-3xl text-foreground/90">
              {cityProfile.specialFeature}.
              Every installation in {locationFormatted}
              is measured on site before we quote, so the
              specification matches the building rather
              than a catalogue default.
            </p>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  Local conditions we account for
                </h3>

                <ul className="space-y-2">

                  {cityProfile.concern.map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />

                        <span className="text-foreground/90">
                          {item}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </div>

              <div>

                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  What we use in {locationFormatted}
                </h3>

                <ul className="space-y-2">

                  {cityProfile.benefit.map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />

                        <span className="text-foreground/90">
                          {item}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            MAP
            ===================================================== */}

        <section className="section-bg-2 relative py-8 md:py-12">

          <div className="absolute inset-0 grid-pattern-dark opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-white">
              Our Service Area in {locationFormatted}
            </h2>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg">

              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${locationInfo.longitude}!3d${locationInfo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${locationFormatted}!5e0!3m2!1sen!2sin!4v1706789012345`}
                width="100%"
                height="400"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Service area map for ${locationFormatted}`}
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            RELATED SERVICES
            ===================================================== */}

        <section className="section-bg-3 relative py-16 md:py-24">

          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Related Products &amp; Services
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {Object.entries(servicesData)
                .filter(([serviceSlug]) => serviceSlug !== canonicalSlug)
                .slice(0, 6)
                .map(([serviceSlug, relatedService]) => (
                  <Link
                    key={serviceSlug}
                    href={`/services/${serviceSlug}/${normalizedLocation}`}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border
                      bg-background
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >

                    <div className="relative h-44 overflow-hidden">

                      <Image
                        src={relatedService.image}
                        alt={`${relatedService.title} in ${locationFormatted}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                    </div>

                    <div className="p-5">

                      <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                        {relatedService.title}
                      </h3>

                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {relatedService.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                        View Service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>

                    </div>

                  </Link>
                ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
            ===================================================== */}

        <section className="section-bg-6 relative py-16 md:py-24">

          <div className="container">

            <div className="mx-auto max-w-3xl text-center">

              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
                Ready to Get Started in {locationFormatted}?
              </h2>

              <p className="mb-8 text-lg text-white/80">
                Schedule a free consultation with our
                experts. We&apos;ll assess your needs and
                provide a transparent quote with no hidden
                charges.
              </p>

              <div className="mb-6 text-center text-sm text-white/70">

                <p>
                  Sweta Invisible Grill
                </p>

                <p>
                  Rajeev Chowk, near Jain Complex,
                  Hans Enclave, Sector 33,
                  Gurugram, Haryana 122004
                </p>

                <p>
                  +91 7065953252
                </p>

                <p>
                  invisiblesafetygrillpatna@gmail.com
                </p>

              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-accent
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  Book Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="tel:+917065953252"
                  className="
                    inline-flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/20
                  "
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}