import type { Metadata } from "next";
export const dynamic = "force-static";
import { HeroSlider } from "@/components/home/HeroSlider";
import HeroWithHeaderWrapper from "@/components/layout/HeroWithHeaderWrapper";
import ServicesSection from "@/components/services/ServicesSection";
import ImageCarouselClient from "@/components/home/ImageCarouselClient";
import AboutClient from "@/components/about/AboutClient";
import GalleryClient from "@/components/gallery/GalleryClient";
import TestimonialsClient from "@/components/testimonials/TestimonialsClient";
import ServiceLocationsSlider from "@/components/services/ServiceLocationsSlider";

const TITLE =
  "Invisible Grills & Safety Nets in Gurugram | Sweta Invisible Grill";

const DESCRIPTION =
  "Invisible grill and safety net installation in Gurugram, Delhi NCR and Noida. Premium stainless steel invisible grills, pigeon nets, balcony safety nets and child-safe protection.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.invisiblesafetygrillpatna.com/",
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    title: TITLE,
    description:
      "Professional invisible grill installation and safety nets in Gurugram, Delhi NCR and Noida. Premium stainless steel grills, pigeon nets and child-safe balcony protection.",
    url: "https://www.invisiblesafetygrillpatna.com/",
    siteName: "Sweta Invisible Grill",
    images: [
      {
        url: "/images/invisible-grill-1.jpg",
        width: 1200,
        height: 630,
        alt: "Invisible Grills in Gurugram - Sweta Invisible Grill",
        type: "image/jpeg",
      },
      {
        url: "/logo.png",
        width: 300,
        height: 300,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Invisible grill installation and safety nets in Gurugram, Delhi NCR and Noida. Premium stainless steel grills and pigeon net solutions.",
    images: ["/images/invisible-grill-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

// Single source for the FAQ: rendered as <details> below and emitted as
// FAQPage JSON-LD, so the markup and the structured data can never drift.
const homeFaqs = [
  {
    question: "What are invisible grills?",
    answer:
      "Invisible grills are high-tensile stainless steel cable systems that protect balconies and windows without blocking your view. Our installations use quality stainless steel cable for long-lasting performance.",
  },
  {
    question: "Are invisible grills safe?",
    answer:
      "Yes — when professionally installed they offer child safety, pet safety, and effective balcony protection without obstructing airflow or visibility.",
  },
  {
    question: "How much do invisible grills cost?",
    answer:
      "Cost depends on the size of the installation, material, design, and location. We provide site visits and transparent quotes across Gurugram, Delhi NCR and Noida.",
  },
  {
    question: "Why choose invisible grills?",
    answer:
      "They combine strength and aesthetics while maintaining an open view. Our professional installation provides reliable balcony, window and child safety protection for homes and commercial spaces.",
  },
  {
    question: "Do invisible grills prevent pigeons?",
    answer:
      "Invisible grills primarily provide safety and protection. For pigeon prevention, they can be combined with pigeon nets, bird spikes and other humane bird-control solutions.",
  },
  {
    question: "Can invisible grills protect children?",
    answer:
      "Absolutely — our installations are designed to provide additional balcony and window safety for children while maintaining visibility and airflow.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "We serve Gurugram, Delhi NCR and Noida with professional invisible grill installation, safety nets, pigeon nets and related balcony protection services.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.invisiblesafetygrillpatna.com/#faq",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
  inLanguage: "en-IN",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroWithHeaderWrapper>
        <div style={{ borderRadius: "1rem" }}>
          <HeroSlider />
        </div>
      </HeroWithHeaderWrapper>

      <ImageCarouselClient />

      <ServicesSection />

      <AboutClient />

      <GalleryClient />

      <ServiceLocationsSlider />

      <section id="faq" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Invisible Grills in Gurugram — FAQ
        </h2>

        <div className="space-y-3">
          {homeFaqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-white/5 p-4 rounded"
            >
              <summary className="font-semibold">
                {faq.question}
              </summary>

              <p className="mt-2 text-sm text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <TestimonialsClient />
    </>
  );
}