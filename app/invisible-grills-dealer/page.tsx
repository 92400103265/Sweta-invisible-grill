import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";

import {
  Store,
  Award,
  TrendingUp,
  Users,
  Truck,
  Package,
  ArrowRight,
  Phone,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import OptimizedImage from "@/components/shared/OptimizedImage";
import HeroWithHeaderWrapper from "@/components/layout/HeroWithHeaderWrapper";
import ServiceImageSlider from "@/components/services/ServiceImageSlider";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import RelatedServices from "@/components/services/RelatedServices";

import {
  validLocations,
  locationData,
} from "@/constants/locations";

import { generateServiceFAQSchema } from "@/lib/seo-metadata";
import { generateServiceSchema } from "@/lib/service-schema";

/* =========================================================
   BUSINESS DETAILS
========================================================= */

const BUSINESS_NAME = "Sweta Invisible Grill";

const WEBSITE_URL =
  "https://www.invisiblesafetygrillpatna.com";

const PHONE = "+91 7065953252";

const PHONE_TEL = "tel:+917065953252";

const EMAIL =
  "invisiblesafetygrillpatna@gmail.com";

const EMAIL_LINK =
  "mailto:invisiblesafetygrillpatna@gmail.com";

const ADDRESS =
  "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title:
    "Invisible Grills Dealership | Sweta Invisible Grill",

  description:
    "Invisible grill dealership and wholesale opportunities with Sweta Invisible Grill in Gurugram, Delhi NCR and Noida.",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },

  alternates: {
    canonical:
      `${WEBSITE_URL}/invisible-grills-dealer/`,
  },

  keywords: [
    "Sweta Invisible Grill",
    "Invisible Grills Dealership",
    "Invisible Grill Dealer",
    "Invisible Grill Distributor",
    "Invisible Grill Business",
    "Invisible Grill Dealer Gurugram",
    "Invisible Grill Dealer Gurgaon",
    "Invisible Grill Dealer Delhi NCR",
    "Invisible Grill Dealer Noida",
    "Invisible Grill Wholesale",
    "Invisible Grill Installation",
    "Safety Net Dealer",
    "Safety Net Distributor",
  ],

  openGraph: {
    title:
      "Invisible Grills Dealership | Sweta Invisible Grill",

    description:
      "Explore invisible grill dealership and wholesale opportunities with Sweta Invisible Grill.",

    url:
      `${WEBSITE_URL}/invisible-grills-dealer/`,

    siteName: BUSINESS_NAME,

    type: "website",

    images: [
      {
        url: "/images/invisible-grill-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sweta Invisible Grill Dealership",
      },
    ],
  },
};

/* =========================================================
   TYPES
========================================================= */

interface DealershipType {
  title: string;
  description: string;
  minOrder: string;
}

interface DealershipFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface LocationItem {
  name: string;
  slug: string;
}

/* =========================================================
   DEALER BENEFITS
========================================================= */

const dealerBenefits = [
  "Official authorized dealership with genuine products",
  "Bulk order opportunities for contractors and builders",
  "Technical support and installation guidance",
  "Marketing materials and business support",
  "Territory opportunities available",
  "Professional product and service support",
];

/* =========================================================
   DEALER FEATURES
========================================================= */

const dealerFeatures: DealershipFeature[] = [
  {
    icon: Store,
    title: "Authorized Dealership",
    description:
      "Become an authorized partner for invisible grill solutions.",
  },

  {
    icon: Package,
    title: "Wholesale Pricing",
    description:
      "Competitive pricing opportunities for suitable bulk orders.",
  },

  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Access professional invisible grill products and solutions.",
  },

  {
    icon: Users,
    title: "Training & Support",
    description:
      "Installation guidance and technical support for your team.",
  },

  {
    icon: Truck,
    title: "Delivery Support",
    description:
      "Product dispatch and delivery support for business partners.",
  },

  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Business and marketing support for dealership partners.",
  },
];

/* =========================================================
   DEALERSHIP TYPES
========================================================= */

const dealershipTypes: DealershipType[] = [
  {
    title: "Retail Dealer",
    description:
      "Suitable for hardware stores and home improvement businesses.",
    minOrder: "Discuss with our team",
  },

  {
    title: "Contractor Partner",
    description:
      "Suitable for contractors and installation professionals.",
    minOrder: "Discuss with our team",
  },

  {
    title: "Distributor",
    description:
      "For businesses interested in distribution opportunities.",
    minOrder: "Discuss with our team",
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const dealerLocationsList: LocationItem[] =
  validLocations.map((slug) => ({
    name: locationData[slug].name,
    slug,
  }));

/* =========================================================
   FAQ
========================================================= */

const dealerFAQs = [
  {
    question:
      "Who can become an invisible grill dealer?",

    answer:
      "Hardware store owners, contractors, distributors and businesses interested in invisible grill solutions can contact our team to discuss dealership opportunities.",
  },

  {
    question:
      "What support is available for dealers?",

    answer:
      "Dealership partners can discuss product information, installation guidance, technical support and marketing assistance with our team.",
  },

  {
    question:
      "Are territory opportunities available?",

    answer:
      "Territory opportunities can be discussed based on business requirements and the location being served.",
  },

  {
    question:
      "Is installation guidance provided?",

    answer:
      "Yes. Our team can provide product and installation guidance to suitable business partners.",
  },

  {
    question:
      "How can I apply for dealership?",

    answer:
      "Contact Sweta Invisible Grill using +91 7065953252 or invisiblesafetygrillpatna@gmail.com to discuss dealership opportunities.",
  },
];

/* =========================================================
   IMAGES
========================================================= */

const dealerImages = [
  "/images/invisible-grills-dealer-1.jpg",
  "/images/invisible-grills-dealer-2.jpg",
  "/images/invisible-grills-dealer-3.jpg",
];

/* =========================================================
   PAGE
========================================================= */

export default function InvisibleGrillsDealerPage() {
  /* =======================================================
     SPECIFICATIONS
  ======================================================== */

  const specifications = [
    {
      label: "Program Type",
      value: "Invisible Grill Dealership",
    },

    {
      label: "Territory",
      value: "Gurugram, Delhi NCR & Noida",
    },

    {
      label: "Support",
      value: "Product & Installation Support",
    },

    {
      label: "Contact",
      value: PHONE,
    },

    {
      label: "Email",
      value: EMAIL,
    },
  ];

  /* =======================================================
     SERVICE SCHEMA
  ======================================================== */

  const serviceSchema = generateServiceSchema({
    serviceName:
      "Invisible Grills Dealer & Wholesale",

    description:
      "Invisible grill dealership and wholesale opportunities from Sweta Invisible Grill.",

    image:
      "/images/invisible-grill-1.jpg",

    slug:
      "invisible-grills-dealer",

    category:
      "invisible-grills",

    specifications,
  });

  /* =======================================================
     FAQ SCHEMA
  ======================================================== */

  const faqSchema =
    generateServiceFAQSchema(dealerFAQs);

  /* =======================================================
     LOCAL BUSINESS SCHEMA
  ======================================================== */

  const localBusinessSchema = {
    "@type": "LocalBusiness",

    "@id":
      `${WEBSITE_URL}/#organization`,

    name: BUSINESS_NAME,

    url: WEBSITE_URL,

    image:
      `${WEBSITE_URL}/images/invisible-grill-1.jpg`,

    logo:
      `${WEBSITE_URL}/logo.png`,

    telephone: PHONE,

    email: EMAIL,

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
      "Invisible Grill Dealership",
      "Invisible Grill Wholesale",
      "Safety Net Installation",
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

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],

      opens: "09:00",
      closes: "21:00",
    },
  };

  /* =======================================================
     COMBINED SCHEMA
  ======================================================== */

  const combinedSchema = {
    "@context": "https://schema.org",

    "@graph": [
      serviceSchema,
      faqSchema,
      localBusinessSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          STRUCTURED DATA
      ==================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(combinedSchema),
        }}
      />

      <div className="min-h-screen bg-background">

        {/* =================================================
            HERO
        ================================================== */}

        <HeroWithHeaderWrapper>

          <section
            className="relative overflow-hidden py-16 md:py-28"
            style={{
              borderRadius: "1rem",
            }}
          >

            <div className="absolute inset-0">

              <OptimizedImage
                src="/images/invisible-grill-dealer.jpg"
                alt="Sweta Invisible Grill Dealership"
                className="h-full w-full object-cover"
                loading="eager"
                priority
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,8%,0.95)] via-[hsl(222,47%,10%,0.88)] to-[hsl(222,47%,10%,0.75)]" />

            </div>

            <div className="absolute inset-0 grid-pattern-dark opacity-30" />

            <div className="container relative z-10">

              <Breadcrumbs
                items={[
                  {
                    label: "Services",
                    href: "/services",
                  },
                  {
                    label:
                      "Dealership & Wholesale",
                  },
                ]}
                darkMode={true}
              />

              <div className="mx-auto max-w-4xl text-center">

                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">

                  <Store className="h-4 w-4 text-accent" />

                  Dealership Opportunity

                </span>

                <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">

                  Invisible Grills Dealer &amp; Wholesale

                </h1>

                <p className="mb-8 text-lg text-white/80 md:text-xl">

                  Partner with Sweta Invisible Grill for
                  invisible grill dealership and wholesale
                  opportunities in Gurugram, Delhi NCR and
                  Noida.

                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                  <Button
                    size="lg"
                    className="cta-gradient text-white"
                    asChild
                  >

                    <Link
                      href="/contact"
                      className="flex items-center gap-2"
                    >
                      Apply for Dealership
                      <ArrowRight className="h-5 w-5" />
                    </Link>

                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                    asChild
                  >

                    <a
                      href={PHONE_TEL}
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>

                  </Button>

                </div>

              </div>

            </div>

          </section>

        </HeroWithHeaderWrapper>

        {/* =================================================
            IMAGE SLIDER
        ================================================== */}

        <ServiceImageSlider
          images={dealerImages}
          altPrefix="Invisible Grill Dealership"
          useContainer
        />

        {/* =================================================
            BENEFITS
        ================================================== */}

        <section className="section-bg-2 relative py-16 md:py-20">

          <div className="container">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                  Dealer Benefits
                </span>

                <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">

                  Why Partner With{" "}

                  <span className="text-accent">
                    Sweta Invisible Grill
                  </span>
                  ?

                </h2>

                <p className="mb-8 text-lg text-white/80">

                  Explore dealership and business
                  partnership opportunities with our team.

                </p>

                <ul className="space-y-4">

                  {dealerBenefits.map(
                    (benefit, index) => (

                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />

                        <span className="text-white/90">
                          {benefit}
                        </span>

                      </li>

                    )
                  )}

                </ul>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {dealerFeatures
                  .slice(0, 4)
                  .map((feature, index) => (

                    <div
                      key={index}
                      className="rounded-xl border border-white/10 bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-6"
                    >

                      <feature.icon className="mb-4 h-8 w-8 text-accent" />

                      <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-white/70">
                        {feature.description}
                      </p>

                    </div>

                  ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            PARTNERSHIP TYPES
        ================================================== */}

        <section className="section-bg-3 relative py-16 md:py-20">

          <div className="container">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Partnership Options
              </span>

              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Choose Your Partnership Level
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {dealershipTypes.map(
                (type, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-6"
                  >

                    <h3 className="mb-3 font-heading text-xl font-semibold text-white">
                      {type.title}
                    </h3>

                    <p className="mb-4 text-white/70">
                      {type.description}
                    </p>

                    <div className="rounded-lg bg-white/5 px-4 py-2">

                      <span className="text-sm text-white/60">
                        Requirement:{" "}
                      </span>

                      <span className="text-sm font-medium text-accent">
                        {type.minOrder}
                      </span>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            DEALER LOCATIONS
        ================================================== */}

        <section className="section-bg-4 relative py-16 md:py-20">

          <div className="container">

            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-white">
              Dealer Network by Location
            </h2>

            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-4">

              {dealerLocationsList.map(
                (loc) => (

                  <Link
                    key={loc.slug}
                    href={`/services/invisible-grills/${loc.slug}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-4 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >

                    <span className="font-medium text-white">
                      {loc.name}
                    </span>

                    <ArrowRight className="h-4 w-4 text-accent" />

                  </Link>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            FAQ
        ================================================== */}

        <ServiceFAQ faqs={dealerFAQs} />

        {/* =================================================
            RELATED SERVICES
        ================================================== */}

        <section className="section-bg-5 relative py-16 md:py-24">

          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Related Products &amp; Services
            </h2>

            <RelatedServices
              currentService="invisible-grills-dealer"
            />

          </div>

        </section>

        {/* =================================================
            CONTACT CTA
        ================================================== */}

        <section className="section-bg-6 relative py-16 md:py-20">

          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <div className="mx-auto max-w-3xl rounded-3xl border border-blue-600/30 bg-gradient-to-br from-blue-600/20 via-blue-600/10 to-transparent p-8 text-center backdrop-blur-sm md:p-12">

              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
                Ready to Become a Dealer?
              </h2>

              <p className="mb-6 text-lg text-white/80">
                Contact Sweta Invisible Grill to discuss
                dealership opportunities.
              </p>

              {/* Contact Details */}

              <div className="mb-8 space-y-3 text-sm text-white/80">

                <div className="flex flex-col items-center justify-center gap-2 md:flex-row">

                  <MapPin className="h-4 w-4 text-accent" />

                  <span>
                    {ADDRESS}
                  </span>

                </div>

                <div className="flex items-center justify-center gap-2">

                  <Phone className="h-4 w-4 text-accent" />

                  <a
                    href={PHONE_TEL}
                    className="hover:text-white hover:underline"
                  >
                    {PHONE}
                  </a>

                </div>

                <div className="flex items-center justify-center gap-2">

                  <Mail className="h-4 w-4 text-accent" />

                  <a
                    href={EMAIL_LINK}
                    className="hover:text-white hover:underline"
                  >
                    {EMAIL}
                  </a>

                </div>

              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">

                <Button
                  size="lg"
                  className="w-full cta-gradient text-white hover:opacity-90 sm:w-auto"
                  asChild
                >

                  <Link
                    href="/contact"
                    className="flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                  asChild
                >

                  <a
                    href={PHONE_TEL}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>

                </Button>

              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}