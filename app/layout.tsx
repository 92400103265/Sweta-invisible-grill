import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/components/layout/MainLayout";
import { PRIMARY } from "@/constants/contacts";
import { validLocations, locationData } from "@/constants/locations";

const SITE_URL = "https://invisiblegrillsandsafetynets.in";

const SITE_TITLE =
  "Sweta Invisible Grill – Invisible Grills & Safety Nets in Gurugram";

const SITE_DESCRIPTION =
  "Professional invisible grills, safety nets, balcony protection, pigeon nets and child safety solutions in Gurugram, Delhi NCR and Noida. Quality installation and reliable safety solutions.";

const BUSINESS_NAME = "Sweta Invisible Grill";
const BUSINESS_PHONE = "+917065953252";
const BUSINESS_EMAIL = "invisiblesafetygrillpatna@gmail.com";

const BUSINESS_ADDRESS =
  "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004";

const inter = Inter({ subsets: ["latin"] });

// Get current date for metadata
const currentDate = new Date().toISOString();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  verification: {
    google: "P8HUVCb--rZ-IF-X_ZwXQX1FOPvjQI5M0MWRtAwVMfc",
  },

  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  applicationName: BUSINESS_NAME,

  keywords: [
    // Primary location
    "invisible grills in Gurugram",
    "invisible grill Gurugram",
    "safety nets in Gurugram",
    "balcony safety nets in Gurugram",
    "pigeon nets in Gurugram",
    "child safety nets in Gurugram",
    "invisible grill installation Gurugram",
    "invisible grills in Gurgaon",
    "safety nets in Gurgaon",

    // Delhi NCR
    "invisible grills in Delhi NCR",
    "safety nets in Delhi NCR",
    "invisible grills in Noida",
    "safety nets in Noida",

    // Brand
    "Sweta Invisible Grill",
    "Sweta invisible grills",
    "Sweta safety nets",

    // Generic / near-me intent
    "invisible grills",
    "safety nets",
    "invisible grill installation near me",
    "children safety nets",
    "bird nets",
    "pigeon protection nets",
    "balcony safety nets",
    "marine grade stainless steel grills",

    // Services
    "invisible grill installation",
    "pigeon net installation",
    "bird net installation",
    "balcony safety net installation",
    "child safety net installation",
    "pet safety nets",
    "invisible grill for balcony",
  ],

  authors: [{ name: BUSINESS_NAME }],

  creator: BUSINESS_NAME,

  publisher: BUSINESS_NAME,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "og:locale": "en-IN",
    "og:type": "website",
    "og:title": SITE_TITLE,
    "og:description": SITE_DESCRIPTION,
    "og:url": `${SITE_URL}/`,
    "og:site_name": BUSINESS_NAME,
    "article:modified_time": currentDate,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${BUSINESS_NAME} - Invisible Grills & Safety Nets`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: ["/images/hero-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const phoneNumber = BUSINESS_PHONE;

  const schemaData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebPage",

        "@id": `${SITE_URL}/`,

        url: `${SITE_URL}/`,

        name: SITE_TITLE,

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        primaryImageOfPage: {
          "@id": `${SITE_URL}/#primaryimage`,
        },

        image: {
          "@id": `${SITE_URL}/#primaryimage`,
        },

        thumbnailUrl: `${SITE_URL}/logo.png`,

        datePublished: "2008-01-01T00:00:00+00:00",

        dateModified: currentDate,

        description: SITE_DESCRIPTION,

        inLanguage: "en-IN",

        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`${SITE_URL}/`],
          },
        ],
      },

      {
        "@type": "ImageObject",

        inLanguage: "en-IN",

        "@id": `${SITE_URL}/#primaryimage`,

        url: `${SITE_URL}/logo.png`,

        contentUrl: `${SITE_URL}/logo.png`,

        width: 150,

        height: 150,

        caption: `${BUSINESS_NAME} Logo`,
      },

      {
        "@type": "WebSite",

        "@id": `${SITE_URL}/#website`,

        url: `${SITE_URL}/`,

        name: BUSINESS_NAME,

        description: SITE_DESCRIPTION,

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },

        inLanguage: "en-IN",
      },

      {
        "@type": "Organization",

        "@id": `${SITE_URL}/#organization`,

        name: BUSINESS_NAME,

        url: SITE_URL,

        logo: {
          "@type": "ImageObject",

          "@id": `${SITE_URL}/#logo`,

          url: `${SITE_URL}/logo.png`,

          contentUrl: `${SITE_URL}/logo.png`,

          width: 150,

          height: 150,

          caption: `${BUSINESS_NAME} Logo`,
        },

        image: {
          "@id": `${SITE_URL}/#logo`,
        },

        email: BUSINESS_EMAIL,

        telephone: phoneNumber,

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

          addressLocality: "Gurugram",

          addressRegion: "Haryana",

          postalCode: "122004",

          addressCountry: "IN",
        },

        contactPoint: {
          "@type": "ContactPoint",

          telephone: phoneNumber,

          email: BUSINESS_EMAIL,

          contactType: "customer service",

          areaServed: "Gurugram",

          availableLanguage: ["English", "Hindi"],
        },

        // Location pages remain connected to the existing location constants.
        "department": validLocations.map((slug) => {
          const loc = locationData[slug];

          return {
            "@type": "LocalBusiness",

            "@id": `${SITE_URL}/locations/${slug}/#localbusiness`,

            name: `Invisible Grills & Safety Nets in ${loc.name}`,

            image: `${SITE_URL}/images/hero-image.jpg`,

            address: {
              "@type": "PostalAddress",

              streetAddress: loc.streetAddress,

              addressLocality: loc.name,

              addressRegion: loc.state,

              postalCode: loc.postalCode,

              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",

              latitude: loc.latitude.toString(),

              longitude: loc.longitude.toString(),
            },

            areaServed: loc.name,

            priceRange: "₹₹",

            telephone: phoneNumber,

            url: `${SITE_URL}/locations/${slug}/`,
          };
        }),
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Resource Hints */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />

        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />

        {/* Preload Critical Assets */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-image.jpg"
          fetchPriority="high"
        />

        {/* Organization / Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-339PTXCP6X"
          strategy="lazyOnload"
        />

        <Script
          id="google-analytics"
          strategy="lazyOnload"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-339PTXCP6X', {
              'send_page_view': false,
              'cookie_flags': 'max-age=7200;secure;samesite=none'
            });
          `}
        </Script>

        {/* =====================================================
            GOOGLE ADS GOOGLE TAG
            ===================================================== */}

        <Script
          id="google-ads-script"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18388085912"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-config"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());

            gtag("config", "AW-18388085912");
          `}
        </Script>

        {/* Fuse.js for client-side search */}
        <Script
          src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className={inter.className}>
        <TooltipProvider>
          <MainLayout>
            {children}
          </MainLayout>

          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}