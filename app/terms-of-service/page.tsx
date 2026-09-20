import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service | Sweta Invisible Grill",
  description:
    "Terms of Service for Sweta Invisible Grill - Read our terms and conditions for using our services.",
  alternates: {
    canonical: "https://invisiblesafetygrillpatna.com/terms-of-service/",
  },
  robots: "index, follow",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <div className="space-y-8">

          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg">
              Last updated: September 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-200">

            {/* Agreement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website and services provided by
                Sweta Invisible Grill, you accept and agree to be bound by the
                terms and provisions of this agreement. If you do not agree to
                these terms, please do not use this website or our services.
              </p>
            </section>

            {/* Use License */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials and information on the Sweta Invisible Grill website
                for personal, non-commercial viewing only. This is a grant of
                license, not a transfer of title, and under this license you
                may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or public display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations
                </li>
                <li>
                  Transfer the materials to another person or mirror the
                  materials on another server
                </li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                3. Disclaimer
              </h2>
              <p>
                The materials on the Sweta Invisible Grill website are provided
                on an "as is" basis. Sweta Invisible Grill makes no warranties,
                expressed or implied, regarding the accuracy, completeness,
                reliability, or availability of the website materials or
                services, except where expressly stated in writing.
              </p>
            </section>

            {/* Limitations */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                4. Limitations
              </h2>
              <p>
                To the extent permitted by applicable law, Sweta Invisible
                Grill shall not be liable for damages arising from the use or
                inability to use the materials on this website, including loss
                of data, loss of profit, or business interruption.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on the Sweta Invisible Grill website
                could include technical, typographical, or photographic errors.
                Sweta Invisible Grill does not warrant that all materials on
                the website are accurate, complete, or current. Content may be
                changed or updated without prior notice.
              </p>
            </section>

            {/* Materials License */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                6. Materials License
              </h2>
              <p>
                The materials contained on the Sweta Invisible Grill website
                are protected by applicable copyright and trademark laws.
                Unauthorized use of these materials may violate applicable
                copyright, trademark, and other laws.
              </p>
            </section>

            {/* Service Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                7. Service Terms
              </h2>

              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-100 mb-2">
                    Service Agreement:
                  </h3>
                  <p>
                    Upon requesting our services, you agree to provide accurate
                    information and accept our quotation and service terms. All
                    services are subject to site inspection and confirmation of
                    requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-100 mb-2">
                    Payment Terms:
                  </h3>
                  <p>
                    Payment terms will be agreed upon in the service agreement.
                    Advance payment may be required for some services or
                    materials. Applicable taxes and charges may apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-100 mb-2">
                    Cancellation Policy:
                  </h3>
                  <p>
                    Cancellation requests should be made as early as possible.
                    Cancellation charges may apply depending on the timing of
                    the request, materials purchased, and services already
                    provided.
                  </p>
                </div>
              </div>
            </section>

            {/* Warranties */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                8. Warranties and Installation
              </h2>
              <p>
                Products and installation services provided by Sweta Invisible
                Grill may be covered by applicable manufacturer or service
                warranties. Warranty coverage is subject to the specific
                quotation, service agreement, proper maintenance, and normal
                use of the installed product.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                9. Limitation of Liability
              </h2>
              <p>
                Except as expressly set forth in writing, Sweta Invisible Grill
                shall not be liable for consequential or indirect damages,
                including lost profits, business interruption, or loss of use
                arising from the use of or inability to use this website or the
                services offered, to the extent permitted by applicable law.
              </p>
            </section>

            {/* Revision of Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                10. Revision of Terms
              </h2>
              <p>
                Sweta Invisible Grill may revise these Terms of Service from
                time to time. Updated terms will be posted on this website.
                Continued use of the website after changes are posted
                constitutes acknowledgment of the updated terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                11. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the applicable laws of India. Any disputes
                shall be subject to the jurisdiction of the appropriate courts
                in India.
              </p>
            </section>

            {/* User Conduct */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                12. User Conduct
              </h2>
              <p>
                You agree not to use this website or services in any way that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Is unlawful or violates any applicable law or regulation</li>
                <li>Infringes upon intellectual property rights</li>
                <li>Contains viruses or malicious code</li>
                <li>Attempts to gain unauthorized access to systems</li>
                <li>Harasses, defames, or abuses others</li>
                <li>Disrupts the normal flow of communication</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="space-y-4 bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h2 className="text-2xl font-semibold text-white">
                13. Contact Us
              </h2>

              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>

              <div className="space-y-2">
                <p>
                  <strong>Business:</strong> Sweta Invisible Grill
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  invisiblesafetygrillpatna@gmail.com
                </p>

                <p>
                  <strong>Phone:</strong> +91 7065953252
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33,
                  Gurugram, Haryana 122004, India
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}