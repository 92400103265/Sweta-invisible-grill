import type { Metadata } from "next";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { Phone, Mail, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import HeroWithHeaderWrapper from "@/components/layout/HeroWithHeaderWrapper";

const ConsultationForm = dynamic(
  () => import("@/components/shared/ConsultationFormClient"),
  {
    loading: () => <div className="p-4">Loading...</div>,
  }
);

/* =========================================================
   BUSINESS CONTACT DETAILS
========================================================= */

const BUSINESS_NAME = "Sweta Invisible Grill";

const WEBSITE_URL = "https://www.invisiblesafetygrillpatna.com";

const PHONE = "+91 7065953252";
const PHONE_TEL = "tel:+917065953252";

const EMAIL = "invisiblesafetygrillpatna@gmail.com";
const EMAIL_LINK = "mailto:invisiblesafetygrillpatna@gmail.com";

const ADDRESS =
  "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Contact Sweta Invisible Grill | Gurugram",

  description:
    "Contact Sweta Invisible Grill for invisible grill and safety net services in Gurugram, Delhi NCR and Noida. Call +91 7065953252 or email us.",

  keywords: [
    "Sweta Invisible Grill",
    "Contact Sweta Invisible Grill",
    "Invisible Grill Gurugram",
    "Invisible Grill Gurgaon",
    "Invisible Grill Delhi NCR",
    "Invisible Grill Noida",
    "Safety Net Gurugram",
    "Safety Net Gurgaon",
    "Bird Net Gurugram",
    "Balcony Safety Net Gurugram",
  ],

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },

  alternates: {
    canonical: `${WEBSITE_URL}/contact/`,
  },

  openGraph: {
    title: "Contact Sweta Invisible Grill",

    description:
      "Contact Sweta Invisible Grill for invisible grills, safety nets and balcony safety solutions.",

    url: `${WEBSITE_URL}/contact/`,

    siteName: BUSINESS_NAME,

    type: "website",

    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sweta Invisible Grill",
      },
    ],
  },
};

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Mobile Number",
      label: "Call Us",
      value: PHONE,
      href: PHONE_TEL,
    },

    {
      icon: Mail,
      title: "Email Address",
      label: "Email Us",
      value: EMAIL,
      href: EMAIL_LINK,
    },

    {
      icon: MapPin,
      title: "Address",
      label: "Our Location",
      value: ADDRESS,
    },
  ];

  /* =========================================================
     LOCAL BUSINESS SCHEMA
  ========================================================== */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: BUSINESS_NAME,

    url: WEBSITE_URL,

    logo: `${WEBSITE_URL}/logo.png`,

    image: `${WEBSITE_URL}/images/hero-image.jpg`,

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

    contactPoint: {
      "@type": "ContactPoint",

      telephone: PHONE,

      email: EMAIL,

      contactType: "customer service",

      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <HeroWithHeaderWrapper>
        <section
          className="relative overflow-hidden"
          style={{
            borderRadius: "1rem",
          }}
        >
          <OptimizedImage
            src="/images/hero-image.jpg"
            alt="Contact Sweta Invisible Grill"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative container mx-auto px-4 py-20 text-center md:py-28 lg:py-36">
            <div className="mx-auto max-w-3xl">

              {/* NO BREADCRUMBS */}

              <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                Get In{" "}
                <span className="text-gradient-on-dark">
                  Touch
                </span>
              </h1>

              <p className="text-xl text-white/90">
                Contact Sweta Invisible Grill for professional
                invisible grill and safety solutions.
              </p>

            </div>
          </div>
        </section>
      </HeroWithHeaderWrapper>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <div className="container mx-auto mb-8 px-4">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-4 md:p-8">

                <h2 className="mb-6 text-2xl font-bold text-card-foreground">
                  Send Us a Message
                </h2>

                <ConsultationForm />

              </CardContent>
            </Card>

            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <Card className="mt-8">
              <CardContent className="p-6 md:p-8">

                <h2 className="mb-6 text-2xl font-bold text-card-foreground">
                  Contact Information
                </h2>

                <div className="space-y-6">

                  {/* MOBILE */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-safety/20">
                      <Phone className="h-5 w-5 text-safety" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        Mobile Number
                      </h3>

                      <a
                        href={PHONE_TEL}
                        className="text-sm text-card-foreground/75 transition-colors hover:text-safety"
                      >
                        {PHONE}
                      </a>
                    </div>

                  </div>

                  {/* EMAIL */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-safety/20">
                      <Mail className="h-5 w-5 text-safety" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        Email Address
                      </h3>

                      <a
                        href={EMAIL_LINK}
                        className="break-all text-sm text-card-foreground/75 transition-colors hover:text-safety"
                      >
                        {EMAIL}
                      </a>
                    </div>

                  </div>

                  {/* ADDRESS */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-safety/20">
                      <MapPin className="h-5 w-5 text-safety" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        Address
                      </h3>

                      <p className="text-sm leading-6 text-card-foreground/75">
                        {ADDRESS}
                      </p>
                    </div>

                  </div>

                </div>

              </CardContent>
            </Card>
          </div>

          {/* =================================================
              RIGHT CONTACT CARDS
          ================================================== */}

          <div className="space-y-6">

            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card key={index}>
                  <CardContent className="p-6">

                    <div className="mb-4 flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-safety/20">
                        <Icon className="h-5 w-5 text-safety" />
                      </div>

                      <h3 className="font-semibold text-card-foreground">
                        {item.title}
                      </h3>

                    </div>

                    <p className="mb-1 text-xs text-card-foreground/60">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="block break-words text-sm font-medium text-card-foreground transition-colors hover:text-safety"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium leading-6 text-card-foreground">
                        {item.value}
                      </p>
                    )}

                  </CardContent>
                </Card>
              );
            })}

            {/* =================================================
                CALL NOW
            ================================================== */}

            <Card className="border-safety/20 bg-gradient-to-br from-safety/10 to-primary/10">

              <CardContent className="p-6 text-center">

                <Phone className="mx-auto mb-4 h-12 w-12 text-safety" />

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Call Us
                </h3>

                <p className="mb-4 text-sm text-muted-foreground">
                  Contact us for your invisible grill and safety
                  requirements.
                </p>

                <a
                  href={PHONE_TEL}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-safety px-6 py-3 font-medium text-white transition-colors hover:bg-safety/90"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE}
                </a>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </>
  );
}