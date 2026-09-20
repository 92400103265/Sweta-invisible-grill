import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

/* =========================================================
   BUSINESS DETAILS
========================================================= */

const BUSINESS_NAME = "Sweta Invisible Grill";

const WEBSITE_URL =
  "https://www.invisiblesafetygrillpatna.com";

const PHONE = "+91 7065953252";

const EMAIL =
  "invisiblesafetygrillpatna@gmail.com";

const ADDRESS =
  "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "Installation Gallery | Sweta Invisible Grill",

  description:
    "View invisible grill, safety net, bird net and balcony safety installations by Sweta Invisible Grill in Gurugram, Delhi NCR and Noida.",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },

  alternates: {
    canonical: `${WEBSITE_URL}/gallery/`,
  },

  keywords: [
    // Brand
    "Sweta Invisible Grill",
    "Sweta Invisible Grill Gallery",
    "Sweta Invisible Grill projects",

    // Gallery
    "invisible grill gallery",
    "invisible grill projects",
    "invisible grill installation photos",
    "invisible grill installation gallery",
    "safety net gallery",
    "safety net projects",
    "bird net installation photos",
    "balcony safety net projects",

    // Services
    "invisible grill installation",
    "safety net installation",
    "bird net installation",
    "pigeon net installation",
    "balcony safety solutions",

    // Locations
    "invisible grill Gurugram",
    "invisible grill Gurgaon",
    "invisible grill Delhi NCR",
    "invisible grill Noida",
    "safety net Gurugram",
    "safety net Delhi NCR",
    "safety net Noida",

    // Discovery
    "invisible grill installation examples",
    "safety net installation examples",
    "invisible grill design",
    "safety net installation ideas",
    "completed safety projects",
    "professional invisible grill work",
  ],

  openGraph: {
    title:
      "Installation Gallery | Sweta Invisible Grill",

    description:
      "Browse invisible grill, safety net and bird protection installation projects by Sweta Invisible Grill.",

    url: `${WEBSITE_URL}/gallery/`,

    siteName: BUSINESS_NAME,

    type: "website",

    images: [
      {
        url: "/images/service-gallery-1.jpg",
        width: 1200,
        height: 630,
        alt:
          "Sweta Invisible Grill Installation Gallery",
      },
    ],
  },
};

/* =========================================================
   GALLERY PAGE
========================================================= */

export default function GalleryPage() {
  /* =========================================================
     LOCAL BUSINESS SCHEMA
  ========================================================== */

  const localBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: BUSINESS_NAME,

    url: WEBSITE_URL,

    logo: `${WEBSITE_URL}/logo.png`,

    image: `${WEBSITE_URL}/images/service-gallery-1.jpg`,

    telephone: PHONE,

    email: EMAIL,

    description:
      "Sweta Invisible Grill provides invisible grill, safety net, bird net and balcony safety solutions in Gurugram, Delhi NCR and Noida.",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

      addressLocality: "Gurugram",

      addressRegion: "Haryana",

      postalCode: "122004",

      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Gurugram",
      },

      {
        "@type": "AdministrativeArea",
        name: "Delhi NCR",
      },

      {
        "@type": "City",
        name: "Noida",
      },
    ],

    serviceType: [
      "Invisible Grill Installation",
      "Safety Net Installation",
      "Bird Net Installation",
      "Balcony Safety Net Installation",
      "Pigeon Control",
    ],

    contactPoint: {
      "@type": "ContactPoint",

      telephone: PHONE,

      email: EMAIL,

      contactType: "customer service",

      availableLanguage: [
        "English",
        "Hindi",
      ],
    },
  };

  return (
    <>
      {/* =====================================================
          LOCAL BUSINESS STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema
          ),
        }}
      />

      {/* =====================================================
          GALLERY PAGE
      ====================================================== */}

      <div className="min-h-screen bg-background">

        {/* =================================================
            PAGE HEADER
        ================================================== */}

        <div className="container mx-auto px-4 py-10 md:py-14">

          <div className="mx-auto max-w-4xl text-center">

            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Invisible Grills &amp; Safety Nets Gallery
            </h1>

            <p className="mx-auto max-w-3xl text-muted-foreground">
              Explore our completed invisible grill, safety net,
              bird net and balcony safety installations across
              Gurugram, Delhi NCR and Noida.
            </p>

          </div>

        </div>

        {/* =================================================
            GALLERY
        ================================================== */}

        <div className="container mx-auto px-4 pb-12">

          <GalleryClient />

        </div>

        {/* =================================================
            CONTACT INFORMATION
        ================================================== */}

        <div className="container mx-auto px-4 pb-16">

          <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-6 text-center md:p-8">

            <h2 className="mb-4 text-2xl font-bold text-card-foreground">
              Need Invisible Grill or Safety Nets?
            </h2>

            <p className="mb-6 text-muted-foreground">
              Contact Sweta Invisible Grill for professional
              installation services in Gurugram, Delhi NCR
              and Noida.
            </p>

            <div className="space-y-2 text-sm text-card-foreground">

              <p>
                <strong>Address:</strong>{" "}
                {ADDRESS}
              </p>

              <p>
                <strong>Mobile:</strong>{" "}
                <a
                  href="tel:+917065953252"
                  className="text-primary hover:underline"
                >
                  {PHONE}
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:invisiblesafetygrillpatna@gmail.com"
                  className="text-primary hover:underline"
                >
                  {EMAIL}
                </a>
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}