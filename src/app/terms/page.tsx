import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RentHuman terms of service. Read our terms and conditions for using our event staffing services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
        <h1 className="heading-1 text-white mt-8 mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">Last updated: January 1, 2024</p>

          <h2 className="text-xl font-bold text-white">1. Services</h2>
          <p>RentHuman provides event staffing services including brand ambassadors, promotional models, trade show staff, and related personnel for events and activations across the United States.</p>

          <h2 className="text-xl font-bold text-white">2. Client Responsibilities</h2>
          <p>Clients are responsible for providing accurate event details, a safe working environment for staff, and timely payment according to agreed terms.</p>

          <h2 className="text-xl font-bold text-white">3. Booking and Cancellation</h2>
          <p>All bookings are subject to availability. Cancellation policies vary by program size and timing. Contact your account manager for specific cancellation terms.</p>

          <h2 className="text-xl font-bold text-white">4. Payment Terms</h2>
          <p>Payment terms are outlined in individual service agreements. Standard terms are net 30 from invoice date. Late payments may incur additional fees.</p>

          <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
          <p>RentHuman&apos;s liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>

          <h2 className="text-xl font-bold text-white">6. Non-Solicitation</h2>
          <p>Clients agree not to directly hire or solicit RentHuman staff for a period of 12 months following the last event staffed.</p>

          <h2 className="text-xl font-bold text-white">7. Contact</h2>
          <p>For questions about these terms, contact us at legal@renthuman.ai or (888) 555-RENT.</p>
        </div>
      </div>
    </section>
  );
}
