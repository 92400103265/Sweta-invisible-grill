import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.invisiblesafetygrillpatna.com";

const SITE_TITLE =
  "Sweta Invisible Grill – Invisible Grills & Safety Nets in Gurugram";

const SITE_DESCRIPTION =
  "Professional invisible grills, safety nets, balcony protection, pigeon nets and child safety solutions in Gurugram, Delhi NCR and Noida. Quality installation and reliable safety solutions.";

const BUSINESS_NAME = "Sweta Invisible Grill";
const BUSINESS_PHONE = "+917065953252";
const BUSINESS_EMAIL = "invisiblesafetygrillpatna@gmail.com";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const currentDate = new Date().toISOString();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  applicationName: BUSINESS_NAME,

  authors: [
    {
      name: BUSINESS_NAME,
    },
  ],

  creator: BUSINESS_NAME,

  publisher: BUSINESS_NAME,

  verification: {
    google: "P8HUVCb--rZ-IF-X_ZwXQX1FOPvjQI5M0MWRtAwVMfc",
  },

  keywords: [
    "invisible grills in Gurugram",
    "invisible grill Gurugram",
    "safety nets in Gurugram",
    "balcony safety nets in Gurugram",
    "pigeon nets in Gurugram",
    "child safety nets in Gurugram",
    "invisible grill installation Gurugram",
    "invisible grills in Gurgaon",
    "safety nets in Gurgaon",

    "invisible grills in Delhi NCR",
    "safety nets in Delhi NCR",
    "invisible grills in Noida",
    "safety nets in Noida",

    "Sweta Invisible Grill",
    "Sweta invisible grills",
    "Sweta safety nets",

    "invisible grills",
    "safety nets",
    "invisible grill installation near me",
    "children safety nets",
    "bird nets",
    "pigeon protection nets",
    "balcony safety nets",

    "invisible grill installation",
    "pigeon net installation",
    "bird net installation",
    "balcony safety net installation",
    "child safety net installation",
    "pet safety nets",
    "invisible grill for balcony",
  ],

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

  other: {
    "og:locale": "en-IN",
    "og:type": "website",
    "og:title": SITE_TITLE,
    "og:description": SITE_DESCRIPTION,
    "og:url": `${SITE_URL}/`,
    "og:site_name": BUSINESS_NAME,
    "article:modified_time": currentDate,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Tag Manager / Analytics DNS */}
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />

        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />

        {/* Preload Hero Image */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-image.jpg"
          fetchPriority="high"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BUSINESS_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              email: BUSINESS_EMAIL,
              telephone: BUSINESS_PHONE,
              areaServed: [
                "Gurugram",
                "Delhi NCR",
                "Noida",
              ],
            }),
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          id="google-analytics-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-339PTXCP6X"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "G-339PTXCP6X");
          `}
        </Script>

        {/* Google Ads */}
        <Script
          id="google-ads-script"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18468350920"
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
            gtag("config", "AW-18468350920");
          `}
        </Script>

        {/* Fuse.js */}
        <Script
          src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}