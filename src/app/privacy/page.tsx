import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RentHuman privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="heading-1 text-white mt-8 mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">Last updated: January 1, 2024</p>

          <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you request a quote, apply for a position, create an account, or contact us. This may include your name, email address, phone number, company name, and event details.</p>

          <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process your requests and applications, communicate with you about our services, and comply with legal obligations.</p>

          <h2 className="text-xl font-bold text-white">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with service providers who assist us in operating our business, or as required by law.</p>

          <h2 className="text-xl font-bold text-white">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-xl font-bold text-white">5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information. You may also opt out of marketing communications at any time by contacting us.</p>

          <h2 className="text-xl font-bold text-white">6. Cookies</h2>
          <p>We use cookies and similar technologies to improve your experience on our website, analyze site traffic, and for marketing purposes. You can control cookie settings through your browser.</p>

          <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@renthuman.ai or (888) 555-RENT.</p>
        </div>
      </div>
    </section>
  );
}
