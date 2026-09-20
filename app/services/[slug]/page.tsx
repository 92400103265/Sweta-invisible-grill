import type { Metadata } from "next";
export const dynamic = "force-static";

import OptimizedImage from "@/components/shared/OptimizedImage";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  servicesData,
  serviceSpecificLocationFAQs,
  resolveServiceSlug,
} from "@/data/servicesData";

import { getCanonicalUrl } from "@/lib/canonical-url";

import {
  generateServiceMetadata,
  generateServiceFAQSchema,
  PRIMARY_LOCATIONS,
} from "@/lib/seo-metadata";

import { generateServiceSchema } from "@/lib/service-schema";

import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Shield,
  Fence,
  Wind,
  Ruler,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import HeroWithHeaderWrapper from "@/components/layout/HeroWithHeaderWrapper";
import ServiceImageSlider from "@/components/services/ServiceImageSlider";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import RelatedServices from "@/components/services/RelatedServices";

const BUSINESS_NAME = "Sweta Invisible Grill";
const BUSINESS_PHONE = "+91 7065953252";
const BUSINESS_EMAIL = "invisiblesafetygrillpatna@gmail.com";
const BUSINESS_URL = "https://www.invisiblesafetygrillpatna.com";

const BUSINESS_ADDRESS = {
  streetAddress:
    "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122004",
  addressCountry: "IN",
};

const SERVICE_AREAS = ["Gurugram", "Delhi NCR", "Noida"];

type FAQ = {
  question: string;
  answer: string;
};

interface ServiceData {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  benefits: string[];
  images?: string[];
  image: string;
  specifications: Array<{
    label: string;
    value: string;
  }>;
  heroDescription?: string;
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const canonicalSlug = resolveServiceSlug(slug);

  const service =
    servicesData[canonicalSlug as keyof typeof servicesData];

  if (!service) {
    return {
      title: "Service Not Found - Sweta Invisible Grill",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const baseMetadata = generateServiceMetadata({
    serviceName: service.title,
    serviceSlug: canonicalSlug,
    shortDescription: service.description,
    longDescription: service.detailedDescription,
    image: service.image,
  });

  const etag = `W/"${canonicalSlug}-${service.title
    .replace(/\s+/g, "-")
    .toLowerCase()}"`;

  const canonicalUrl = getCanonicalUrl(
    `/services/${canonicalSlug}`
  );

  return {
    ...baseMetadata,

    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },

    alternates: {
      canonical: canonicalUrl,
    },

    other: {
      ...(baseMetadata.other as Record<string, string>),
      ETag: etag,
    } as Record<string, string>,
  };
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const canonicalSlug = resolveServiceSlug(slug);

  const service: ServiceData | undefined =
    servicesData[
      canonicalSlug as keyof typeof servicesData
    ];

  if (!service) {
    notFound();
  }

  const productName =
    service.title
      .replace(/\b(dealer|supplier|vendor)\b/gi, "")
      .trim() || service.title;

  const isClothDrying =
    canonicalSlug === "cloth-drying";

  const isInvisibleGrills =
    service.category === "invisible-grills" &&
    !isClothDrying;

  const faqs: FAQ[] = isInvisibleGrills
    ? [
        {
          question: "What are Invisible Grills?",
          answer:
            "Invisible grills are stainless steel cable systems installed on balconies and windows to provide strong protection without blocking your view. Sweta Invisible Grill provides professional installation for homes and apartments.",
        },
        {
          question: "Are Invisible Grills Safe?",
          answer:
            "Yes — our invisible grills are designed for child safety, pet safety, and additional protection while maintaining airflow and unobstructed views.",
        },
        {
          question: "How Strong are Invisible Grills?",
          answer:
            "Our SS316 and SS304 invisible grills use high-tensile stainless steel cables designed for reliable everyday safety applications.",
        },
        {
          question: "How Long do Invisible Grills Last?",
          answer:
            "With stainless steel materials and professional installation, invisible grills are designed for long-term use with minimal maintenance.",
        },
        {
          question: "Do Invisible Grills Prevent Theft?",
          answer:
            "Invisible grills create a strong stainless steel barrier for balconies and windows and can provide an additional security layer.",
        },
        {
          question:
            "Can Invisible Grills Stop Children from Falling?",
          answer:
            "Invisible grills can provide a protective barrier for balconies and windows and are commonly used as part of child-safety solutions.",
        },
        {
          question: "Are Invisible Grills Good for Pets?",
          answer:
            "Yes — invisible grills can help create a safer balcony and window environment for pets while allowing airflow and daylight.",
        },
        {
          question: "Do Invisible Grills Prevent Pigeons?",
          answer:
            "Invisible grills can be combined with pigeon nets and other bird-control solutions to help protect balconies from birds.",
        },
        {
          question: "How are Invisible Grills Installed?",
          answer:
            "We measure the opening on-site and install the grill system using appropriate mounting hardware and stainless steel cables for a clean finish.",
        },
        {
          question: "Which Invisible Grill is Best?",
          answer:
            "SS316 and SS304 are commonly used stainless steel options. The appropriate material depends on the installation environment and requirements.",
        },
      ]
    : [
        {
          question: `What is the cost of ${productName}?`,
          answer: `Costs vary by area, size and specifications. Contact ${BUSINESS_NAME} for a free quote and site inspection.`,
        },
        {
          question: `Do you provide ${productName} in Gurugram, Delhi NCR and Noida?`,
          answer: `Yes — ${BUSINESS_NAME} provides ${productName} services across Gurugram, Delhi NCR and Noida.`,
        },
        {
          question: `How long does ${productName} installation take?`,
          answer:
            "Installation time depends on the size of the project and site conditions.",
        },
      ];

  const categoryFaqTemplates: Record<
    string,
    { question: string; answer: string }
  > = {
    "invisible-grills": {
      question: `Can ${productName} be customized to my balcony or window size?`,
      answer: `Yes — ${productName} systems can be customized according to balcony and window dimensions. We measure the site and recommend suitable materials and finishes.`,
    },

    "safety-nets": {
      question: "Are the safety nets weather and UV resistant?",
      answer:
        "Yes — our safety nets use UV-stabilized materials designed for outdoor conditions and regular exposure to sunlight and rain.",
    },

    "bird-protection": {
      question: "Will pigeon nets or spikes harm birds?",
      answer:
        "Our bird-control solutions are designed to prevent nesting and unwanted access while providing a practical and humane protection solution.",
    },

    sports: {
      question:
        "Are sports nets suitable for both indoor and outdoor use?",
      answer:
        "Yes — sports nets can be used for suitable indoor and outdoor applications depending on the installation requirements.",
    },
  };

  const categoryKeyForTemplate = isClothDrying
    ? "safety-nets"
    : service.category;

  const categoryTemplate =
    categoryFaqTemplates[categoryKeyForTemplate];

  if (categoryTemplate) {
    faqs.push(categoryTemplate);
  } else {
    faqs.push({
      question: `Can you customize ${productName} to my requirements?`,
      answer:
        "Yes — we provide tailored solutions and on-site assessments to ensure the right fit and finish.",
    });
  }

  try {
    const serviceFAQs =
      serviceSpecificLocationFAQs[canonicalSlug];

    if (serviceFAQs) {
      PRIMARY_LOCATIONS.forEach((loc) => {
        const cityKey = loc.name.toLowerCase();
        const kebabKey = cityKey.replace(/ /g, "-");
        const stateKey = (loc.state || "")
          .toLowerCase()
          .replace(/ /g, "-");

        const candidates = [
          cityKey,
          kebabKey,
          stateKey,
        ].filter(Boolean);

        let cityFaqs: FAQ[] | null = null;

        for (const key of candidates) {
          if (
            serviceFAQs[
              key as keyof typeof serviceFAQs
            ]
          ) {
            cityFaqs =
              serviceFAQs[
                key as keyof typeof serviceFAQs
              ] as FAQ[];

            break;
          }
        }

        if (Array.isArray(cityFaqs)) {
          cityFaqs.forEach((faq: FAQ) =>
            faqs.push(faq)
          );
        }
      });
    }
  } catch (error) {
    console.warn(
      "Failed to merge service-specific FAQs",
      error
    );
  }

  const serviceSchema = generateServiceSchema({
    serviceName: service.title,
    description: service.detailedDescription,
    image: service.image,
    slug: canonicalSlug,
    category: service.category,
    specifications: service.specifications,
  });

  const faqSchema =
    generateServiceFAQSchema(faqs);

  const combinedSchema = {
    "@context": "https://schema.org",

    "@graph": [
      serviceSchema,
      faqSchema,

      {
        "@type": "LocalBusiness",
        "@id": `${BUSINESS_URL}#organization`,

        name: BUSINESS_NAME,

        image: {
          "@type": "ImageObject",
          url: `${BUSINESS_URL}/logo.png`,
          width: "180",
          height: "180",
        },

        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        priceRange: "₹₹₹",
        url: BUSINESS_URL,

        address: {
          "@type": "PostalAddress",
          streetAddress:
            BUSINESS_ADDRESS.streetAddress,
          addressLocality:
            BUSINESS_ADDRESS.addressLocality,
          addressRegion:
            BUSINESS_ADDRESS.addressRegion,
          postalCode:
            BUSINESS_ADDRESS.postalCode,
          addressCountry:
            BUSINESS_ADDRESS.addressCountry,
        },

        areaServed: SERVICE_AREAS.map(
          (area) => ({
            "@type":
              area === "Delhi NCR"
                ? "Place"
                : "City",
            name: area,
          })
        ),

        openingHoursSpecification: {
          "@type":
            "OpeningHoursSpecification",

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
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(combinedSchema),
        }}
      />

      <div className="min-h-screen bg-background">

        <HeroWithHeaderWrapper>
          <section
            className="relative py-16 md:py-28 overflow-hidden"
            style={{
              borderRadius: "1rem",
            }}
          >
            <div className="absolute inset-0">
              <OptimizedImage
                src={service.image}
                alt={`${service.title} installation by Sweta Invisible Grill for homes, balconies and commercial properties in Gurugram, Delhi NCR and Noida`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,8%,0.95)] via-[hsl(222,47%,10%,0.88)] to-[hsl(222,47%,10%,0.75)]" />
            </div>

            <div className="absolute inset-0 grid-pattern-dark opacity-30" />

            <div className="container mt-[-2rem] relative z-10">

              <Breadcrumbs
                items={[
                  {
                    label: "Services",
                    href: "/services",
                  },
                  {
                    label: service.title,
                  },
                ]}
                darkMode={true}
              />

              <div className="mx-auto max-w-4xl text-center">

                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                  {isClothDrying ? (
                    <Ruler className="h-4 w-4 text-accent" />
                  ) : service.category ===
                    "invisible-grills" ? (
                    <Fence className="h-4 w-4 text-accent" />
                  ) : service.category ===
                    "safety-nets" ? (
                    <Shield className="h-4 w-4 text-accent" />
                  ) : service.category ===
                    "bird-protection" ? (
                    <Wind className="h-4 w-4 text-accent" />
                  ) : service.category ===
                    "sports" ? (
                    <Sparkles className="h-4 w-4 text-accent" />
                  ) : (
                    <Ruler className="h-4 w-4 text-accent" />
                  )}

                  {isClothDrying
                    ? "Cloth Hangers"
                    : service.title.includes(
                        "Specialist"
                      )
                    ? service.category
                    : `${service.title} Specialist`}
                </span>

                <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {service.title}
                </h1>

                <p className="mb-8 text-lg text-white/80 md:text-xl">
                  {service.heroDescription ||
                    service.description}
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                  <Button
                    size="lg"
                    className="cta-gradient"
                    asChild
                  >
                    <Link
                      href="/contact"
                      className="flex items-center gap-2"
                    >
                      Get Free Quote
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
                      href="tel:+917065953252"
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

        {isInvisibleGrills && (
          <section className="section-bg-5 relative py-16 md:py-24">
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="container relative z-10">

              <div className="mb-8 text-center">

                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  Invisible Grill Installation
                </p>

                <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                  Invisible Grill Services for Balcony, Window & Apartment Safety
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80">
                  Sweta Invisible Grill provides transparent balcony grills, window invisible grills and premium stainless steel grill systems across Gurugram, Delhi NCR and Noida.
                </p>

              </div>

              <div className="mb-8 flex flex-wrap justify-center gap-3">
                {[
                  {
                    label:
                      "Invisible Grill Installation",
                    href: "#installation",
                  },
                  {
                    label:
                      "Invisible Grill Benefits",
                    href: "#benefits",
                  },
                  {
                    label:
                      "Invisible Grill FAQ",
                    href: "#faq",
                  },
                  {
                    label:
                      `${service.title} Gallery`,
                    href: "#gallery",
                  },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div
                id="installation"
                className="grid gap-8 lg:grid-cols-2"
              >
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    Professional{" "}
                    <span className="text-accent">
                      Invisible Grill Fitting
                    </span>
                  </h3>

                  <p className="text-foreground/80">
                    We install invisible grills with precision and care. Whether you need an invisible balcony grill, invisible window grill or transparent grill system, our team handles site measurement, suitable mounting and a clean finish.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    <span className="text-accent">
                      Premium
                    </span>{" "}
                    Materials & Warranty
                  </h3>

                  <p className="text-foreground/80">
                    Choose between suitable SS316 and SS304 invisible grill options depending on your installation requirements and environment.
                  </p>
                </div>
              </div>

            </div>
          </section>
        )}

        <section
          id="gallery"
          className="relative bg-white py-12 md:py-16"
        >
          <div className="container relative z-10">

            <h2 className="mb-6 text-center font-heading text-xl font-bold text-gray-900 md:text-2xl">

              <span className="block text-md font-medium text-gray-600 md:text-base">
                {service.title}
              </span>

              <span
                className="inline-block mt-2 rounded-md px-4 py-1.5 text-2xl font-extrabold tracking-tight text-[#FF6B42] md:text-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,107,66,0.08), rgba(255,107,66,0.02))",
                }}
              >
                Gallery
              </span>

            </h2>

            <ServiceImageSlider
              images={
                service.images &&
                service.images.length
                  ? service.images
                  : [service.image]
              }
              altPrefix={service.title}
            />

          </div>
        </section>

        <section className="section-bg-1 relative py-16 md:py-24">
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose{" "}
              <span className="text-accent">
                {service.title}
              </span>
              ?
            </h2>

            <div className="flex flex-col items-center justify-center">

              <div className="rounded-2xl bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-8 shadow-lg border border-white/10 w-full md:max-w-2xl">

                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0" />

                  <h3 className="font-heading text-xl font-bold text-white">
                    Key Features
                  </h3>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">

                  {service.features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />

                        <span className="text-white/90">
                          {feature}
                        </span>
                      </li>
                    )
                  )}

                </ul>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 bg-gray-50">

          <div className="absolute inset-0 opacity-5" />

          <div className="container relative z-10">

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">

              <div id="benefits">

                <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 md:text-4xl">
                  Applications & Use Cases
                </h2>

                <p className="mb-8 text-gray-700">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {service.benefits.map(
                    (benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-800"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />

                        <span className="text-sm md:text-base">
                          {benefit}
                        </span>
                      </li>
                    )
                  )}

                </ul>

              </div>

              <div
                id="technical-specifications"
                className="rounded-2xl bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-8 border border-white/10"
              >

                <h3 className="mb-6 font-heading text-xl font-semibold text-white">
                  Technical Specifications
                </h3>

                <dl className="space-y-4">

                  {service.specifications.map(
                    (spec, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 border-b border-white/10 pb-3 md:flex-row md:items-start md:justify-between md:gap-6 md:pb-2"
                      >

                        <dt className="text-sm text-white/60 md:text-base md:min-w-[140px] md:flex-shrink-0">
                          {spec.label}
                        </dt>

                        <dd className="text-sm font-medium text-white md:text-base md:text-right md:leading-relaxed">
                          {spec.value}
                        </dd>

                      </div>
                    )
                  )}

                </dl>
              </div>

            </div>
          </div>
        </section>

        <section className="section-bg-1 relative py-16 md:py-24">

          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-foreground">
              {service.title} by Location
            </h2>

            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">

              {SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center justify-between rounded-xl bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(215,25%,22%)] p-4"
                >
                  <span className="font-medium text-white">
                    {area}
                  </span>

                  <ArrowRight className="h-4 w-4 text-accent" />
                </div>
              ))}

            </div>
          </div>
        </section>

        <div id="faq">
          <ServiceFAQ faqs={faqs} />
        </div>

        <ServiceCTA />

        <section className="section-bg-5 relative pb-16 md:pb-24">

          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="container relative z-10">

            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              You May Also Need
            </h2>

            <RelatedServices
              currentService={canonicalSlug}
            />

          </div>
        </section>

      </div>
    </>
  );
}