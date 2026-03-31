import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Your Lead Nest, the lead automation platform for small businesses.",
};

export default function TermsOfServicePage() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Terms of Service
        </h1>
        <p className="mb-12 text-sm text-slate-400">
          Last updated: March 2026
        </p>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Your Lead Nest platform and related
              services (the &quot;Service&quot;), you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you are using the Service
              on behalf of a business or organization, you represent that you
              have the authority to bind that entity to these Terms. If you do
              not agree to these Terms, you may not access or use the Service.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              2. Service Description
            </h2>
            <p>
              Your Lead Nest is a lead automation platform designed for small
              businesses. The Service enables automated lead follow-up through
              SMS, email, and phone within seconds of a new inquiry. Features
              include lead capture integrations, automated response workflows,
              lead routing, appointment scheduling, and performance analytics.
              We reserve the right to modify, suspend, or discontinue any
              feature of the Service at any time, with or without notice.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              3. Account Terms
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You must provide accurate, complete, and current information
                when creating an account. You are responsible for keeping your
                account information up to date.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </li>
              <li>
                You must be at least 18 years of age to use the Service.
              </li>
              <li>
                You must notify us immediately of any unauthorized use of your
                account or any other breach of security.
              </li>
              <li>
                One person or legal entity may not maintain more than one
                account unless expressly permitted by Your Lead Nest.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              4. Payment Terms
            </h2>
            <p className="mb-3">
              The Service is offered on a monthly subscription basis. By
              subscribing, you agree to the following:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Subscription fees are billed monthly in advance. All fees are
                quoted in Canadian dollars (CAD) unless otherwise stated.
              </li>
              <li>
                You authorize us to charge your designated payment method on a
                recurring monthly basis until you cancel your subscription.
              </li>
              <li>
                We offer a{" "}
                <span className="font-medium text-slate-800">
                  30-day money-back guarantee
                </span>
                . If you are not satisfied with the Service within the first 30
                days of your initial subscription, you may request a full refund
                by contacting our support team.
              </li>
              <li>
                After the 30-day guarantee period, subscription fees are
                non-refundable. You may cancel your subscription at any time,
                and your access will continue until the end of the current
                billing period.
              </li>
              <li>
                We reserve the right to change subscription pricing with 30
                days&apos; written notice. Continued use of the Service after a
                price change constitutes acceptance of the new pricing.
              </li>
              <li>
                Failure to make timely payment may result in suspension or
                termination of your account.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              5. Acceptable Use
            </h2>
            <p className="mb-3">
              You agree to use the Service only for lawful purposes and in
              compliance with all applicable laws and regulations. You may not:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use the Service to send unsolicited messages (spam), harass, or
                engage in any form of abuse.
              </li>
              <li>
                Violate any applicable anti-spam legislation, including
                Canada&apos;s Anti-Spam Legislation (CASL), the CAN-SPAM Act,
                or similar laws in your jurisdiction.
              </li>
              <li>
                Upload or transmit malicious code, viruses, or any content that
                could harm the Service or other users.
              </li>
              <li>
                Attempt to gain unauthorized access to the Service, other
                accounts, or connected systems.
              </li>
              <li>
                Resell, sublicense, or redistribute the Service without our
                prior written consent.
              </li>
              <li>
                Use the Service in any way that could damage, disable, or impair
                the Service or interfere with other users&apos; access.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate your account if we
              determine, in our sole discretion, that you have violated these
              acceptable use terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              6. Intellectual Property
            </h2>
            <p>
              The Service, including all software, designs, text, graphics,
              logos, and other content, is the property of Your Lead Nest and is
              protected by applicable intellectual property laws. You retain
              ownership of any data and content you upload to the Service. By
              using the Service, you grant us a limited license to use your
              content solely for the purpose of providing and improving the
              Service.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              7. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Service is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, whether
                express or implied, including but not limited to implied
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement.
              </li>
              <li>
                Your Lead Nest shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to loss of profits, data, business opportunities, or
                goodwill, arising out of or related to your use of the Service.
              </li>
              <li>
                Our total aggregate liability for any claims arising from or
                related to the Service shall not exceed the total fees paid by
                you to Your Lead Nest during the twelve (12) months immediately
                preceding the event giving rise to the claim.
              </li>
              <li>
                We do not guarantee that the Service will be uninterrupted,
                error-free, or that any defects will be corrected.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Your Lead Nest,
              its officers, directors, employees, and agents from and against
              any claims, liabilities, damages, losses, and expenses (including
              reasonable legal fees) arising out of or related to your use of
              the Service, your violation of these Terms, or your violation of
              any rights of a third party.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              9. Termination
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You may cancel your subscription and terminate your account at
                any time through your account settings or by contacting our
                support team.
              </li>
              <li>
                We may suspend or terminate your access to the Service
                immediately, without prior notice, if you breach these Terms or
                engage in conduct that we determine is harmful to the Service or
                other users.
              </li>
              <li>
                Upon termination, your right to use the Service will cease
                immediately. We may retain your data for a reasonable period to
                comply with legal obligations, after which it will be securely
                deleted.
              </li>
              <li>
                All provisions of these Terms that by their nature should
                survive termination shall survive, including ownership
                provisions, warranty disclaimers, indemnification, and
                limitations of liability.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Province of Manitoba and the federal laws of
              Canada applicable therein, without regard to conflict of law
              principles. Any disputes arising out of or related to these Terms
              or the Service shall be subject to the exclusive jurisdiction of
              the courts located in Winnipeg, Manitoba, Canada.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              11. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms at any time.
              We will notify you of material changes by posting the updated
              Terms on this page and updating the &quot;Last updated&quot; date.
              Your continued use of the Service after any changes constitutes
              acceptance of the revised Terms. We encourage you to review these
              Terms periodically.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
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
