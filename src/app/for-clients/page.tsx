import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "For Clients | How Event Staffing Works",
  description:
    "Learn how RentHuman's event staffing process works. From request to execution, we make booking professional event staff simple and seamless.",
};

const steps = [
  {
    step: "01",
    title: "Tell Us Your Needs",
    desc: "Submit a quick quote request with your event details — dates, locations, staff type, and headcount. We'll respond within 2 hours.",
  },
  {
    step: "02",
    title: "Custom Staffing Plan",
    desc: "Your dedicated account manager creates a tailored staffing plan with recommended talent profiles, schedule, and transparent pricing.",
  },
  {
    step: "03",
    title: "Talent Selection",
    desc: "We curate a hand-picked team from our 50,000+ vetted professionals. You review profiles, approve selections, and we handle all logistics.",
  },
  {
    step: "04",
    title: "Training & Preparation",
    desc: "Your staff receives brand-specific training, talking points, and event materials. They arrive prepared to represent your brand flawlessly.",
  },
  {
    step: "05",
    title: "Flawless Execution",
    desc: "Our field managers oversee every activation. Real-time check-ins, live photos, and performance monitoring ensure everything runs perfectly.",
  },
  {
    step: "06",
    title: "Reporting & Results",
    desc: "Post-event, you receive comprehensive reports with metrics, photos, insights, and recommendations for future programs.",
  },
];

export default function ForClientsPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "For Clients" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              How <span className="text-gradient">RentHuman</span> Works
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Booking professional event staff has never been easier. Our streamlined process takes you from initial request to flawless execution in as little as 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="card-dark flex gap-6 items-start">
                <div className="text-4xl font-bold text-brand-500/30 flex-shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Our rates are competitive and transparent. Pricing depends on market, service type, event duration, and staff requirements. Every quote includes all costs — no hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: "Brand Ambassadors", range: "$25 - $45/hr", note: "Market dependent" },
              { label: "Trade Show Staff", range: "$30 - $50/hr", note: "Experience level" },
              { label: "Field Managers", range: "$40 - $65/hr", note: "Program scope" },
            ].map((p) => (
              <div key={p.label} className="card-dark text-center">
                <div className="text-white font-bold mb-1">{p.label}</div>
                <div className="text-2xl font-bold text-brand-500 mb-1">{p.range}</div>
                <div className="text-gray-500 text-sm">{p.note}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">Get Your Custom Quote →</Link>
        </div>
      </section>
    </>
  );
}
