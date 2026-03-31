import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Your Lead Nest collects, uses, and protects your personal information. Read our full privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mb-12 text-sm text-slate-400">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          <div>
            <p>
              Your Lead Nest (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting the privacy of our users. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our lead automation platform and related
              services (collectively, the &quot;Service&quot;). By accessing or
              using the Service, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information in the following ways:
            </p>
            <h3 className="mb-2 text-lg font-medium text-slate-700">
              Information You Provide
            </h3>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                Account registration details such as your name, email address,
                phone number, and business name.
              </li>
              <li>
                Payment and billing information processed through our
                third-party payment provider.
              </li>
              <li>
                Lead data and contact information you upload or connect to the
                Service through integrations.
              </li>
              <li>
                Communications you send to us, including support requests and
                feedback.
              </li>
            </ul>
            <h3 className="mb-2 text-lg font-medium text-slate-700">
              Information Collected Automatically
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Device and browser information, including IP address, browser
                type, operating system, and device identifiers.
              </li>
              <li>
                Usage data such as pages visited, features used, timestamps, and
                referring URLs.
              </li>
              <li>
                Performance and diagnostic data related to your use of the
                Service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                To provide, operate, and maintain the Service, including
                automated lead follow-up via SMS, email, and phone.
              </li>
              <li>
                To process transactions and manage your subscription and
                billing.
              </li>
              <li>
                To communicate with you about your account, updates, and
                promotional offers (with your consent where required).
              </li>
              <li>
                To improve and personalize the Service, including analyzing
                usage trends and optimizing performance.
              </li>
              <li>
                To detect, prevent, and address fraud, abuse, and technical
                issues.
              </li>
              <li>
                To comply with legal obligations and enforce our terms.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              3. Data Sharing
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium text-slate-700">
                  Service Providers:
                </span>{" "}
                We share data with trusted third-party vendors who assist us in
                operating the Service, such as payment processors, hosting
                providers, SMS and email delivery services, and analytics tools.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  Legal Requirements:
                </span>{" "}
                We may disclose information if required by law, regulation, legal
                process, or governmental request.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  Business Transfers:
                </span>{" "}
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of that transaction.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  With Your Consent:
                </span>{" "}
                We may share information for other purposes with your explicit
                consent.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              4. Data Security
            </h2>
            <p>
              We implement commercially reasonable administrative, technical, and
              physical security measures to protect your information from
              unauthorized access, disclosure, alteration, and destruction. These
              measures include encryption of data in transit and at rest, regular
              security assessments, and access controls. However, no method of
              transmission over the Internet or electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="mb-3">
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage, and deliver relevant content. These
              include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium text-slate-700">
                  Essential Cookies:
                </span>{" "}
                Required for the Service to function properly, such as session
                management and authentication.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  Analytics Cookies:
                </span>{" "}
                Help us understand how visitors interact with the Service so we
                can improve it.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  Marketing Cookies:
                </span>{" "}
                Used to deliver relevant advertisements and track campaign
                effectiveness.
              </li>
            </ul>
            <p className="mt-3">
              You can manage cookie preferences through your browser settings.
              Disabling certain cookies may affect the functionality of the
              Service.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              6. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium text-slate-700">Access:</span> The
                right to request a copy of the personal information we hold
                about you.
              </li>
              <li>
                <span className="font-medium text-slate-700">Correction:</span>{" "}
                The right to request correction of inaccurate or incomplete
                information.
              </li>
              <li>
                <span className="font-medium text-slate-700">Deletion:</span>{" "}
                The right to request deletion of your personal information,
                subject to legal obligations.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  Data Portability:
                </span>{" "}
                The right to receive your data in a structured, commonly used
                format.
              </li>
              <li>
                <span className="font-medium text-slate-700">
                  Withdraw Consent:
                </span>{" "}
                Where processing is based on consent, you may withdraw it at any
                time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the
              information below. We will respond to your request within a
              reasonable timeframe and in accordance with applicable law.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              7. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide the Service. We may also retain
              information as necessary to comply with legal obligations, resolve
              disputes, and enforce our agreements. When information is no longer
              required, we will securely delete or anonymize it.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy on
              this page and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after any changes constitutes
              acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
              <p className="font-medium text-slate-800">Your Lead Nest</p>
              <p className="mt-1">Winnipeg, Manitoba, Canada</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:support@yourleadnest.com"
                  className="text-accent hover:text-accent-hover underline"
                >
                  support@yourleadnest.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
