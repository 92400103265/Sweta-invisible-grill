import { baseUrl } from "./organization-schema";

/**
 * FAQ Schema Generator for SEO
 * Generates structured FAQ data for Google Featured Snippets
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } as const;
}

/**
 * Service-specific FAQs for all services
 * Used in service pages to improve SEO and UX
 */

export const serviceFAQs: { [key: string]: FAQItem[] } = {
  "invisible-grills": [
    {
      question: "What are invisible grills?",
      answer:
        "Invisible grills are high-strength stainless steel cable systems installed on windows and balconies. They provide safety and security while maintaining an open view, natural light, and airflow.",
    },
    {
      question: "How long do invisible grills last?",
      answer:
        "High-quality invisible grills can provide long-lasting performance when professionally installed and properly maintained. The service life depends on the material, installation quality, weather exposure, and maintenance.",
    },
    {
      question: "Are invisible grills easy to clean?",
      answer:
        "Yes. Invisible grills are easy to maintain. Regularly wiping the cables and fittings with a soft damp cloth helps keep the installation clean and in good condition.",
    },
    {
      question: "Can invisible grills be installed on any window?",
      answer:
        "Invisible grills can be customized for many window and balcony configurations. Our team assesses the frame, dimensions, mounting surface, and installation requirements before recommending the appropriate solution.",
    },
    {
      question: "What is the cost of invisible grills?",
      answer:
        "The cost depends on the installation area, cable and fitting specifications, frame condition, height, and customization requirements. Contact Sweta Invisible Grill for a site assessment and quotation.",
    },
  ],

  "balcony-safety": [
    {
      question: "Why do you need balcony safety nets?",
      answer:
        "Balcony safety nets provide an additional protective barrier for children, pets, and household areas. They can help reduce the risk of accidental falls while maintaining airflow and visibility.",
    },
    {
      question: "What material are the safety nets made from?",
      answer:
        "Balcony safety nets are available in durable, weather-resistant materials designed for outdoor use. The appropriate material and mesh specification depend on the installation area and intended application.",
    },
    {
      question: "Are balcony safety nets visible?",
      answer:
        "Modern safety nets are designed to maintain visibility and airflow while providing protection. Their appearance depends on the mesh type, installation method, lighting, and viewing distance.",
    },
    {
      question: "How often do safety nets need replacement?",
      answer:
        "Replacement depends on the net material, exposure to sunlight and weather, installation conditions, and maintenance. Regular inspection is recommended to identify wear, damage, or loose fittings.",
    },
    {
      question: "What is the installation time?",
      answer:
        "Installation time depends on the size and complexity of the balcony or protected area. Many standard installations can be completed quickly after the site assessment and preparation.",
    },
  ],

  "pigeon-nets": [
    {
      question: "How do pigeon nets work?",
      answer:
        "Pigeon nets are installed across open areas such as balconies, terraces, and AC outdoor-unit spaces to create a physical barrier that prevents pigeons and other birds from entering while maintaining airflow.",
    },
    {
      question: "Are pigeon nets harmful to birds?",
      answer:
        "Properly installed pigeon nets are designed as a humane bird-control solution. They create a barrier that prevents birds from entering protected areas rather than using chemicals or harmful methods.",
    },
    {
      question: "Do pigeon nets require maintenance?",
      answer:
        "Pigeon nets require periodic inspection and cleaning. Checking the mesh, anchors, and fittings helps maintain the effectiveness and condition of the installation.",
    },
    {
      question: "Can pigeon nets be installed on open terraces?",
      answer:
        "Yes. Pigeon nets can be customized for balconies, terraces, shafts, AC areas, and other open spaces. The installation method depends on the shape and structure of the area.",
    },
    {
      question: "How effective are pigeon nets?",
      answer:
        "Effectiveness depends on correct measurements, complete coverage, suitable mesh, and professional installation. Properly installed nets provide a physical barrier against bird entry.",
    },
  ],

  "children-protection": [
    {
      question: "What makes a net suitable for child safety?",
      answer:
        "Child safety nets are selected and installed to create a secure protective barrier around balconies, windows, and other elevated areas. Correct anchoring and professional installation are important for safety.",
    },
    {
      question: "Are the materials child-safe?",
      answer:
        "Materials should be selected according to the intended application and installation requirements. Sweta Invisible Grill uses suitable safety products and installation methods for residential protection.",
    },
    {
      question: "Can children climb on the nets?",
      answer:
        "Safety nets are protective barriers and should not be treated as climbing equipment. Children should always be supervised around balconies, windows, and safety installations.",
    },
    {
      question: "How is the net installed to prevent accidents?",
      answer:
        "The net is secured using appropriate anchors, hooks, cables, and fittings based on the structure. Professional installation helps minimize gaps and ensures the protective barrier is properly secured.",
    },
    {
      question: "Is regular inspection needed?",
      answer:
        "Yes. Periodic inspection is recommended to check the mesh, anchors, hooks, cables, and other fittings for wear or damage and to maintain the protective function.",
    },
  ],

  "bird-nets": [
    {
      question: "What types of birds do pigeon nets prevent?",
      answer:
        "Bird-control nets can help prevent pigeons and other common birds from entering protected areas. The appropriate mesh size depends on the bird species and installation requirements.",
    },
    {
      question: "Are pigeon nets environmentally friendly?",
      answer:
        "Pigeon nets are a physical bird-control method that does not require chemicals or pesticides. They are designed to prevent birds from entering protected spaces without directly harming them.",
    },
    {
      question: "How long do pigeon nets last?",
      answer:
        "The service life depends on the net material, UV exposure, weather conditions, installation quality, and maintenance. Regular inspection helps identify when replacement or repair may be required.",
    },
    {
      question: "Can pigeon nets affect ventilation?",
      answer:
        "No. The open mesh design allows air circulation while creating a barrier against bird entry. Proper installation also helps maintain access to the protected area.",
    },
    {
      question: "What areas can be protected with pigeon nets?",
      answer:
        "Pigeon nets can be installed on balconies, terraces, AC areas, utility spaces, shafts, warehouses, and other open areas where bird entry needs to be controlled.",
    },
  ],
};

/**
 * Generate location-specific FAQs
 */
export function generateLocationFAQs(location: string): FAQItem[] {
  return [
    {
      question: `Why choose Sweta Invisible Grill for invisible grills and safety nets in ${location}?`,
      answer: `Sweta Invisible Grill provides professional invisible grill, balcony safety net, pigeon net, and related safety solutions in ${location}, with customized installation and customer support.`,
    },
    {
      question: `What services does Sweta Invisible Grill provide in ${location}?`,
      answer: `In ${location}, we provide invisible grills, balcony safety nets, pigeon nets, child safety solutions, bird protection, and other customized safety installations.`,
    },
    {
      question: `How do I get a quote for installation in ${location}?`,
      answer: `Contact Sweta Invisible Grill with your installation requirements and location details. We can assess the project requirements and provide a suitable quotation for ${location}.`,
    },
    {
      question: `What is the installation timeline in ${location}?`,
      answer: `Installation time in ${location} depends on the size, location, structure, and complexity of the project. The installation schedule is confirmed after assessing the site requirements.`,
    },
    {
      question: `Do you provide after-sales service in ${location}?`,
      answer: `Yes, Sweta Invisible Grill provides customer support and service assistance for installations in ${location} and surrounding service areas, subject to the applicable service requirements.`,
    },
  ];
}

/**
 * Generate breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}