import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { servicesData } from "@/data/servicesData";
import {
  ServicesSectionClient,
  ServiceLocationsSliderClient,
} from "@/components/services/ServicesClientWrapper";

export const metadata: Metadata = {
  title:
    "Invisible Grills, Safety Nets & Bird Protection Services | Sweta Invisible Grill",

  description:
    "Sweta Invisible Grill provides invisible grills, balcony safety nets, children protection nets, pigeon nets and bird protection solutions with professional installation in Gurugram, Delhi NCR and Noida.",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },

  alternates: {
    canonical:
      "https://invisiblesafetygrillpatna.com/services/",
  },

  keywords: [
    // Category & Service Types
    "types of safety nets",
    "invisible grills",
    "safety nets",
    "bird protection systems",
    "pigeon nets",
    "bird nets",
    "children protection nets",
    "balcony safety nets",

    // Problem-Solving Keywords
    "child safety solutions",
    "bird protection solutions",
    "child-safe balcony",
    "bird-proof solutions",
    "rust-proof materials",
    "UV-resistant nets",

    // Service Features
    "invisible grill installation",
    "professional installation",
    "durable safety nets",
    "stainless steel invisible grills",
    "balcony protection",
    "window safety grills",

    // Specific Services
    "invisible grills",
    "safety nets",
    "pigeon nets",
    "bird nets",
    "children safety nets",
    "pet safety nets",
    "balcony safety nets",
    "bird protection nets",

    // Quality & Trust
    "professional invisible grill installation",
    "quality safety nets",
    "expert installation",
    "trusted invisible grill service",
    "professional safety solutions",

    // Long-tail Service Keywords
    "affordable invisible grills",
    "professional safety net installation",
    "custom invisible grill solutions",
    "balcony safety solutions",
    "window safety solutions",
    "pigeon control solutions",

    // Location Keywords
    "invisible grills in Gurugram",
    "invisible grill installation in Gurugram",
    "safety nets in Gurugram",
    "pigeon nets in Gurugram",
    "bird nets in Gurugram",
    "balcony safety nets in Gurugram",
    "invisible grills in Delhi NCR",
    "safety nets in Delhi NCR",
    "invisible grills in Noida",
    "safety nets in Noida",
  ],

  openGraph: {
    title:
      "Sweta Invisible Grill - Invisible Grills, Safety Nets & Bird Protection Services",

    description:
      "Professional invisible grills, balcony safety nets, pigeon nets, bird protection and child safety solutions in Gurugram, Delhi NCR and Noida.",

    url:
      "https://invisiblesafetygrillpatna.com/services",

    images: [
      {
        url: "/images/service-gallery-2.jpg",
        width: 1200,
        height: 630,
        alt:
          "Sweta Invisible Grill - Invisible Grills and Safety Nets in Gurugram",
      },
    ],

    locale: "en-IN",
  },
};

export default function ServicesPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Sweta Invisible Grill",

    url: "https://invisiblesafetygrillpatna.com",

    telephone: "+91 7065953252",

    email: "invisiblesafetygrillpatna@gmail.com",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

      addressLocality: "Gurugram",

      addressRegion: "Haryana",

      postalCode: "122004",

      addressCountry: "IN",
    },
  };

  const servicesPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name:
      "Sweta Invisible Grill Services",

    description:
      "Invisible grills, balcony safety nets, children protection nets, pigeon nets and bird protection solutions provided by Sweta Invisible Grill in Gurugram, Delhi NCR and Noida.",

    url:
      "https://invisiblesafetygrillpatna.com/services/",

    mainEntity: {
      "@type": "ItemList",

      itemListElement: Object.entries(
        servicesData
      ).map(([slug, service], index) => ({
        "@type": "ListItem",

        position: index + 1,

        item: {
          "@type": "Service",

          name: service.title,

          description: service.description,

          url: `https://invisiblesafetygrillpatna.com/services/${slug}/`,

          image: service.image,

          provider: {
            "@type": "Organization",

            name: "Sweta Invisible Grill",

            url:
              "https://invisiblesafetygrillpatna.com/",
          },

          areaServed: [
            {
              "@type": "City",
              name: "Gurugram",
            },
            {
              "@type": "Place",
              name: "Delhi NCR",
            },
            {
              "@type": "City",
              name: "Noida",
            },
          ],
        },
      })),
    },
  };

  const combinedSchema = {
    "@context": "https://schema.org",

    "@graph": [
      organizationSchema,
      servicesPageSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            combinedSchema
          ),
        }}
      />

      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs
          items={[
            {
              label: "Services",
            },
          ]}
          darkMode={false}
        />
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Invisible Grills, Safety Nets &amp; Bird Protection Services
        </h1>

        <p className="text-muted-foreground max-w-3xl">
          Sweta Invisible Grill provides professional installation of
          invisible grills, balcony safety nets, children and pet
          protection nets, pigeon nets and bird protection solutions
          across Gurugram, Delhi NCR and Noida.
        </p>
      </div>

      <ServicesSectionClient />

      <ServiceLocationsSliderClient />
    </>
  );
}