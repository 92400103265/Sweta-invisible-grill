
import type { Metadata } from "next";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import HeroWithHeaderWrapper from "@/components/layout/HeroWithHeaderWrapper";
import AboutSection from "@/components/about/AboutSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "About Sweta Invisible Grill | Invisible Grills & Safety Nets in Gurugram",

  description:
    "Sweta Invisible Grill provides professional invisible grill, safety net, bird net and balcony safety solutions in Gurugram, Delhi NCR and Noida.",

  alternates: {
    canonical: "https://www.invisiblesafetygrillpatna.com/about/",
  },

  keywords: [
    // Brand
    "Sweta Invisible Grill",
    "Sweta Invisible Grill Gurugram",
    "Sweta Invisible Grill Delhi NCR",
    "Sweta Invisible Grill Noida",

    // Main Services
    "invisible grill installation",
    "invisible grills in Gurugram",
    "invisible grill in Delhi NCR",
    "invisible grill in Noida",
    "safety nets in Gurugram",
    "balcony safety nets",
    "bird nets",
    "pigeon safety nets",
    "bird control solutions",
    "balcony safety solutions",

    // Location
    "invisible grill Gurugram",
    "invisible grill Gurgaon",
    "invisible grill Delhi NCR",
    "invisible grill Noida",
    "safety nets Gurugram",
    "safety nets Gurgaon",
    "safety nets Delhi NCR",
    "safety nets Noida",

    // Trust & Service
    "professional invisible grill installation",
    "experienced installation team",
    "quality safety solutions",
    "reliable invisible grill company",
    "trusted safety solutions",
    "professional safety net installation",
    "customer focused service",

    // About Page
    "about Sweta Invisible Grill",
    "why choose Sweta Invisible Grill",
    "invisible grill experts",
    "safety net experts",
  ],

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },

  openGraph: {
    title:
      "About Sweta Invisible Grill | Invisible Grills & Safety Nets",

    description:
      "Learn more about Sweta Invisible Grill and our professional safety solutions for homes, balconies and properties across Gurugram, Delhi NCR and Noida.",

    url: "https://www.invisiblesafetygrillpatna.com/about/",

    siteName: "Sweta Invisible Grill",

    type: "website",

    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sweta Invisible Grill - Invisible Grills and Safety Nets",
      },
    ],
  },
};

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Sweta Invisible Grill",

    alternateName: [
      "Sweta Invisible Grill Gurugram",
      "Sweta Invisible Grill Delhi NCR",
    ],

    url: "https://www.invisiblesafetygrillpatna.com/",

    logo: "https://www.invisiblesafetygrillpatna.com/logo.png",

    image:
      "https://www.invisiblesafetygrillpatna.com/images/hero-image.jpg",

    description:
      "Sweta Invisible Grill provides professional invisible grill, safety net, bird net, balcony safety net and bird protection solutions in Gurugram, Delhi NCR and Noida.",

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

    areaServed: [
      {
        "@type": "City",
        name: "Gurugram",
      },
      {
        "@type": "City",
        name: "Noida",
      },
      {
        "@type": "AdministrativeArea",
        name: "Delhi NCR",
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 7065953252",
      email: "invisiblesafetygrillpatna@gmail.com",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    serviceType: [
      "Invisible Grill Installation",
      "Safety Net Installation",
      "Bird Net Installation",
      "Balcony Safety Net Installation",
      "Pigeon Control",
      "Bird Protection Solutions",
    ],
  };

  return (
    <>
      {/* Organization / Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero Section */}
      <HeroWithHeaderWrapper>
        <section
          className="relative overflow-hidden"
          style={{ borderRadius: "1rem" }}
        >
          <OptimizedImage
            src="/images/hero-image.jpg"
            alt="Sweta Invisible Grill - Invisible Grills and Safety Nets"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative container mx-auto px-4 py-20 text-center md:py-28 lg:py-36">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs
                items={[{ label: "About" }]}
                darkMode={true}
              />

              <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                About{" "}
                <span className="text-gradient-on-dark">
                  Sweta Invisible Grill
                </span>
              </h1>

              <p className="text-xl text-white/90">
                Professional Invisible Grill & Safety Solutions in
                Gurugram, Delhi NCR and Noida
              </p>
            </div>
          </div>
        </section>
      </HeroWithHeaderWrapper>

      {/* About Section */}
      <AboutSection />

      {/* Company Information */}
      <div className="container mx-auto mt-6 px-4">
        <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
          {/* Our Story */}
          <Card>
            <CardContent className="space-y-4 p-4 md:p-6">
              <h2 className="text-xl font-bold text-card-foreground md:text-2xl">
                Our Story
              </h2>

              <p className="text-card-foreground/80">
                Sweta Invisible Grill provides professional invisible
                grill and safety solutions for homes, apartments,
                balconies and commercial properties. We focus on
                providing reliable safety installations while
                maintaining the appearance of your property.
              </p>

              <p className="text-card-foreground/80">
                Our services are available across Gurugram, Delhi NCR
                and Noida. We understand the importance of protecting
                families, children, pets and properties, which is why
                we focus on quality materials, professional
                installation and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card>
            <CardContent className="space-y-4 p-4 md:p-6">
              <h2 className="text-xl font-bold text-card-foreground md:text-2xl">
                Our Mission
              </h2>

              <p className="text-card-foreground/80">
                Our mission is to provide dependable safety solutions
                that protect families and properties without
                compromising the beauty of your home or building.
              </p>

              <p className="text-card-foreground/80">
                We aim to make balconies, windows and open spaces
                safer through professionally installed invisible
                grills, safety nets, bird nets and other safety
                solutions.
              </p>
            </CardContent>
          </Card>

          {/* Service Areas */}
          <Card>
            <CardContent className="space-y-4 p-4 md:p-6">
              <h2 className="text-xl font-bold text-card-foreground md:text-2xl">
                Our Service Areas
              </h2>

              <p className="text-card-foreground/80">
                Sweta Invisible Grill provides installation and safety
                solutions in:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-card-foreground/80">
                <li>Gurugram, Haryana</li>
                <li>Delhi NCR</li>
                <li>Noida, Uttar Pradesh</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="space-y-4 p-4 md:p-6">
              <h2 className="text-xl font-bold text-card-foreground md:text-2xl">
                Contact Sweta Invisible Grill
              </h2>

              <div className="space-y-3 text-card-foreground/80">
                <p>
                  <strong>Address:</strong>{" "}
                  Rajeev Chowk, near Jain Complex, Hans Enclave,
                  Sector 33, Gurugram, Haryana 122004
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+917065953252"
                    className="text-primary hover:underline"
                  >
                    +91 7065953252
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:invisiblesafetygrillpatna@gmail.com"
                    className="text-primary hover:underline"
                  >
                    invisiblesafetygrillpatna@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}

