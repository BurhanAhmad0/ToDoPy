import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">
          This Privacy Policy describes how ToDoPy ("we", "our", or "us")
          collects, uses, and shares information about you when you use our
          website and services.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-700">
            We may collect personal information that you provide directly, such
            as your name, email address, and any messages you send. We also
            collect usage data such as pages visited, device information, and IP
            address through analytics tools.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To provide and improve our services</li>
            <li>To personalize your user experience</li>
            <li>To communicate with you about updates or support</li>
            <li>To detect and prevent fraud or abuse</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties.
            We may share data with service providers who assist us in delivering
            our services (e.g., hosting, analytics), subject to confidentiality
            agreements.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-700">
            We use cookies and similar technologies to analyze traffic, remember
            preferences, and enhance your experience. You can manage cookie
            settings in your browser at any time.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            5. Data Security
          </h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to
            protect your information. However, no method of transmission over
            the internet is 100% secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            6. Your Rights
          </h2>
          <p className="text-gray-700">
            Depending on your location, you may have the right to access,
            update, or delete your personal information. Contact us at{" "}
            <a
              href="mailto:contact@todopy.app"
              className="text-lime-600 underline"
            >
              contact@todopy.app
            </a>{" "}
            to make a request.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            7. Children’s Privacy
          </h2>
          <p className="text-gray-700">
            ToDoPy is not intended for use by children under the age of 13, and
            we do not knowingly collect data from children.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. The updated
            version will be posted on this page with the "Last Updated" date.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            9. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about this policy or your data, please
            contact us at:
            <br />
            <a
              href="mailto:contact@todopy.app"
              className="text-lime-600 underline"
            >
              contact@todopy.app
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          Last Updated: June 28, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
