import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";

import LocationHero from "@/components/location/LocationHero";
import HeroWithHeaderWrapper from "@/components/layout/HeroWithHeaderWrapper";
import LocationAboutClient from "@/components/about/LocationAboutClient";

import { PRIMARY_LOCATIONS } from "@/lib/seo-metadata";

import {
  generateLocationContent,
  generateBreadcrumbSchema,
  clampSnippet,
} from "@/lib/seo-metadata";

import {
  locationData,
  validLocations,
} from "@/constants/locations";

/* =========================================================
   BUSINESS CONTACT DETAILS
========================================================= */

const BUSINESS_NAME = "Sweta Invisible Grill";

const BUSINESS_PHONE = "+91 7065953252";

const BUSINESS_EMAIL =
  "invisiblesafetygrillpatna@gmail.com";

const BUSINESS_ADDRESS =
  "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram, Haryana 122004";

/* =========================================================
   WEBSITE
========================================================= */

const BASE_URL = "https://www.invisiblesafetygrillpatna.com";

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  return PRIMARY_LOCATIONS.map((loc) => ({
    location: loc.name.toLowerCase(),
  }));
}

/* =========================================================
   PAGE PARAMS
========================================================= */

type PageParams = {
  params: Promise<{
    location: string;
  }>;
};

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { location: locName } = await params;

  const normalizedLocation = locName.toLowerCase();

  const matched = PRIMARY_LOCATIONS.find(
    (l) => l.name.toLowerCase() === normalizedLocation
  );

  if (!matched) {
    return {
      title: "Location Not Found | Sweta Invisible Grill",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = `${matched.name} Invisible Grills & Safety Nets | Sweta Invisible Grill`;

  const canonicalPath =
    `/locations/${matched.name.toLowerCase()}/`;

  const locationMeta = {
    areaServed: matched.areas.join(", "),
    state: matched.state,
    fullAddress: BUSINESS_ADDRESS,
  };

  return {
    title,

    verification: {
      google:
        "P8HUVCb--rZ-IF-X_ZwXQX1FOPvjQI5M0MWRtAwVMfc",
    },

    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },

    description: clampSnippet(
      `Professional invisible grills, balcony safety nets, pigeon nets and child safety solutions in ${matched.name}. Serving ${locationMeta.areaServed} and nearby areas with expert installation and support.`
    ),

    alternates: {
      canonical: `${BASE_URL}${canonicalPath}`,
    },

    openGraph: {
      title:
        `${BUSINESS_NAME} - Invisible Grills & Safety Nets in ${matched.name}`,

      description:
        `Professional invisible grills, balcony safety nets, pigeon nets and safety solutions in ${matched.name}. Serving homes, apartments and commercial spaces across ${matched.name}, Delhi NCR and nearby areas.`,

      url:
        `${BASE_URL}/locations/${locName.toLowerCase()}/`,

      siteName: BUSINESS_NAME,

      type: "website",

      images: [
        {
          url: "/images/invisible-grill-1.jpg",
          width: 1200,
          height: 630,
          alt:
            `Professional Invisible Grills & Safety Nets Installation in ${matched.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${BUSINESS_NAME} - Invisible Grills & Safety Nets in ${matched.name}`,

      description:
        `Professional invisible grills, safety nets and bird protection solutions in ${matched.name}. Contact Sweta Invisible Grill for installation and consultation.`,

      images: [
        "/images/invisible-grill-1.jpg",
      ],
    },

    keywords: [
      `invisible grills in ${matched.name}`,
      `safety nets in ${matched.name}`,
      `best invisible grills in ${matched.name}`,
      `balcony safety nets in ${matched.name}`,
      `pigeon nets in ${matched.name}`,
      `children safety nets in ${matched.name}`,
      `invisible grill installation in ${matched.name}`,
      `invisible grills cost in ${matched.name}`,
      `safety net installation in ${matched.name}`,
      `bird protection nets in ${matched.name}`,
      `invisible grills in ${matched.state}`,

      ...matched.areas.map(
        (area) => `invisible grills in ${area}`
      ),

      ...matched.areas
        .slice(0, 4)
        .map(
          (area) => `safety nets in ${area}`
        ),

      "invisible grills near me",
      "safety nets near me",
      "Sweta Invisible Grill",
      "invisible grill installation",
      "balcony safety nets",
      "pigeon net installation",
      "Delhi NCR invisible grills",
      "Noida invisible grills",
      "Gurugram invisible grills",
    ],
  };
}

/* =========================================================
   LOCATION PAGE
========================================================= */

export default async function LocationPage({
  params,
}: {
  params: Promise<{
    location: string;
  }>;
}) {
  const { location: locName } = await params;

  /* =======================================================
     VALIDATE LOCATION
  ======================================================== */

  if (
    !locName ||
    typeof locName !== "string"
  ) {
    notFound();
  }

  const normalizedLocation =
    locName.toLowerCase() as keyof typeof locationData;

  if (
    !validLocations.includes(
      normalizedLocation as any
    )
  ) {
    notFound();
  }

  const matched =
    locationData[normalizedLocation];

  const locationDisplay =
    matched.name;

  /* =======================================================
     BUSINESS PHONE
  ======================================================== */

  const phone = BUSINESS_PHONE;

  /* =======================================================
     LOCATION CONTENT
  ======================================================== */

  const locContent =
    generateLocationContent(
      "Invisible Grills & Safety Nets",
      locationDisplay
    );

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================== */

  const breadcrumbSchema =
    generateBreadcrumbSchema(
      [
        {
          name: "Home",
          url: "/",
        },

        {
          name: locationDisplay,
          url: `/locations/${normalizedLocation}/`,
        },
      ],

      `/locations/${normalizedLocation}/`
    );

  /* =======================================================
     LOCAL BUSINESS SCHEMA
  ======================================================== */

  const ld = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "LocalBusiness",

        "@id":
          `${BASE_URL}/locations/${normalizedLocation}/#localbusiness`,

        name:
          `${BUSINESS_NAME} - ${locationDisplay}`,

        alternateName: [
          "Sweta Invisible Grill",
          "Invisible Grills",
          "Safety Nets",
        ],

        telephone: phone,

        email: BUSINESS_EMAIL,

        url:
          `${BASE_URL}/locations/${normalizedLocation}/`,

        priceRange: "₹₹",

        image: [
          `${BASE_URL}/logo.png`,
          `${BASE_URL}/images/hero-image.jpg`,
        ],

        description:
          locContent.description,

        areaServed:
          matched.areas.map(
            (area) => ({
              "@type": "Place",
              name: area,
            })
          ),

        serviceArea: {
          "@type": "City",

          name: locationDisplay,

          containedInPlace: {
            "@type": "State",
            name: matched.state,
          },
        },

        makesOffer: [
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name:
                "Invisible Grills Installation",

              description:
                "Professional invisible grills installation for balconies, windows and other residential or commercial spaces.",

              areaServed:
                matched.areas,
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name:
                "Safety Nets Installation",

              description:
                "Professional safety net installation for balconies, windows, terraces and open areas for child and pet safety.",

              areaServed:
                matched.areas,
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name:
                "Bird Protection Solutions",

              description:
                "Humane bird protection solutions including pigeon nets and bird spikes for residential and commercial spaces.",

              areaServed:
                matched.areas,
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name:
                "Balcony Safety Solutions",

              description:
                "Balcony safety solutions designed to improve protection while maintaining ventilation, visibility and appearance.",

              areaServed:
                matched.areas,
            },
          },
        ],

        /* =================================================
           BUSINESS OFFICE ADDRESS
        ================================================== */

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

          addressLocality:
            "Gurugram",

          addressRegion:
            "Haryana",

          postalCode:
            "122004",

          addressCountry:
            "IN",
        },

        geo: {
          "@type": "GeoCoordinates",

          latitude:
            matched.latitude,

          longitude:
            matched.longitude,
        },

        openingHoursSpecification: [
          {
            "@type":
              "OpeningHoursSpecification",

            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],

            opens: "08:00",

            closes: "20:00",
          },

          {
            "@type":
              "OpeningHoursSpecification",

            dayOfWeek: "Sunday",

            opens: "09:00",

            closes: "18:00",
          },
        ],

        mainEntityOfPage: {
          "@type": "WebPage",

          "@id":
            `${BASE_URL}/locations/${normalizedLocation}/`,
        },
      },

      breadcrumbSchema,
    ],
  };

  /* =======================================================
     PAGE
  ======================================================== */

  return (
    <>
      <main>

        {/* =================================================
            LOCAL BUSINESS JSON-LD
        ================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(ld),
          }}
        />

        {/* =================================================
            HERO SECTION
        ================================================== */}

        <HeroWithHeaderWrapper>

          <div
            style={{
              borderRadius: "1rem",
            }}
            className="overflow-hidden"
          >

            <LocationHero
              location={locationDisplay}

              breadcrumbItems={[
                {
                  label: "Home",
                  href: "/",
                },

                {
                  label: "Services",
                  href: "/services/",
                },

                {
                  label: locationDisplay,

                  href:
                    `/locations/${normalizedLocation}/`,
                },
              ]}
            />

          </div>

        </HeroWithHeaderWrapper>

        {/* =================================================
            INTRO SECTION
        ================================================== */}

        <section className="py-8 md:py-12 lg:py-16">

          <div className="container">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">

              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="lg:col-span-2">

                <h2 className="mb-4 text-3xl font-bold md:text-4xl">

                  {locContent.heading}

                </h2>

                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">

                  {locContent.description}

                </p>

              </div>

              {/* =================================================
                  AREAS COVERED
              ================================================== */}

              <div className="lg:col-span-1">

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-6 shadow-lg md:p-8 lg:sticky lg:top-20">

                  <h3 className="mb-6 font-heading text-lg font-semibold text-white md:text-xl">

                    Areas We Serve in{" "}

                    {locationDisplay}

                  </h3>

                  <div className="mb-6 grid grid-cols-2 gap-3">

                    {matched.areas.map(
                      (area, index) => (

                        <div
                          key={index}
                          className="flex items-start gap-2"
                        >

                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />

                          <span className="text-sm text-white/80 md:text-base">

                            {area}

                          </span>

                        </div>
                    ))}

                  </div>

                  <p className="border-t border-white/10 pt-4 text-xs text-white/60 md:text-sm">

                    Don't see your area?
                    Contact Sweta Invisible Grill
                    for service availability in
                    your location.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            ABOUT SECTION
        ================================================== */}

        <LocationAboutClient
          location={locationDisplay}
        />

        {/* =================================================
            MAP SECTION
        ================================================== */}

        <section className="section-bg-2 relative py-12 md:py-16 lg:py-20">

          <div className="absolute inset-0 grid-pattern-dark opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-white md:mb-12 md:text-4xl">

              Our Service Area in{" "}

              {locationDisplay}

            </h2>

            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-lg">

              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${matched.longitude}!3d${matched.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${locationDisplay}!5e0!3m2!1sen!2sin!4v1706789012345`}
                width="100%"
                height="450"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={
                  `Service area map for ${locationDisplay}`
                }
              />

            </div>

          </div>

        </section>

      </main>
    </>
  );
}