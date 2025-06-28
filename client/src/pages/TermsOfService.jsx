import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>

        <p className="text-gray-700 mb-4">
          These Terms of Service ("Terms") govern your use of ToDoPy ("Service",
          "we", "us", or "our"), a task management application developed by
          Burhan Ahmad. By accessing or using our Service, you agree to be bound
          by these Terms.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            1. Use of the Service
          </h2>
          <p className="text-gray-700">
            You must be at least 13 years old to use ToDoPy. You agree to use
            the Service only for lawful purposes and in accordance with these
            Terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            2. User Accounts
          </h2>
          <p className="text-gray-700">
            To use certain features, you may be required to create an account.
            You are responsible for maintaining the confidentiality of your
            login credentials and for all activities under your account.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            3. Prohibited Activities
          </h2>
          <p className="text-gray-700 mb-2">You agree not to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>
              Upload malicious code or attempt to interfere with the Service’s
              operation
            </li>
            <li>
              Scrape, reverse-engineer, or copy any part of the Service without
              permission
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content, features, and functionality within ToDoPy are the
            property of Burhan Ahmad or its licensors. You may not reuse or
            redistribute any portion of the app without prior written consent.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            5. Termination
          </h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate your access to the
            Service at any time, without notice or liability, if you violate
            these Terms or misuse the Service.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            6. Disclaimer of Warranties
          </h2>
          <p className="text-gray-700">
            The Service is provided "as is" without warranties of any kind. We
            do not guarantee that the Service will be uninterrupted or
            error-free.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, or consequential damages resulting from
            your use of or inability to use the Service.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            8. Governing Law
          </h2>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with
            the laws of your jurisdiction, without regard to its conflict of law
            provisions.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            9. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms at any time. We will
            notify users by updating the "Last Updated" date below.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-black mb-2">
            10. Contact
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
