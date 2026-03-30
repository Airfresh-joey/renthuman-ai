import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About RentHuman | The Nation's Premier Event Staffing Agency",
  description:
    "Since 2010, RentHuman has been the trusted event staffing partner for 500+ brands across all 50 states. Learn about our mission, team, and commitment to excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              About <span className="text-gradient">RentHuman</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2010, RentHuman has grown from a regional staffing provider into the nation&apos;s premier event staffing agency. We connect brands with exceptional human talent across all 50 states.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  RentHuman was founded with a simple belief: every brand activation, trade show, and event deserves exceptional human talent. Not just warm bodies to fill a booth — but charismatic, trained professionals who become true extensions of your brand.
                </p>
                <p>
                  What started as a small team placing brand ambassadors in a handful of cities has grown into a nationwide operation spanning all 50 states, serving over 500 brands, and staffing more than 10,000 events.
                </p>
                <p>
                  Our success is built on three pillars: <strong className="text-white">rigorous talent vetting</strong>, <strong className="text-white">dedicated field management</strong>, and <strong className="text-white">real-time accountability</strong>. We don&apos;t just send staff — we partner with you to ensure every interaction drives results.
                </p>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl border border-dark-700/50 overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="RentHuman team collaborating at the office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">Why Choose RentHuman</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Unmatched Talent Pool",
                desc: "50,000+ vetted professionals across all 50 states. Background-checked, trained, and ready to represent your brand with excellence.",
              },
              {
                title: "Industry Expertise",
                desc: "From automotive launches to tech conferences, our team has deep experience across 20+ industries. We understand what each sector demands.",
              },
              {
                title: "Technology-Driven",
                desc: "Real-time check-ins, live event reporting, photo verification, and performance metrics. Full transparency from start to finish.",
              },
              {
                title: "Dedicated Account Teams",
                desc: "Every client gets a dedicated account manager and field management team. One point of contact for seamless multi-market execution.",
              },
              {
                title: "Rapid Deployment",
                desc: "Need staff in 48 hours? Our deep bench and nationwide network means we can mobilize quickly without sacrificing quality.",
              },
              {
                title: "Proven Track Record",
                desc: "98% client satisfaction rate. 90%+ staff rebooking rate. Our results speak for themselves — and our clients keep coming back.",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 500+ brands that trust RentHuman for their event staffing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link href="/for-talent" className="btn-secondary">Join Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
