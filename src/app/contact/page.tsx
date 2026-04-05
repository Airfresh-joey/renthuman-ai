import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Event Staffing Quote",
  description:
    "Contact RentHuman for a free, no-obligation event staffing quote. Nationwide coverage across all 50 states. Response within 2 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="mt-8">
            <h1 className="heading-1 text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Ready to staff your next event? Get a free quote or ask us anything. We typically respond within 2 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <QuoteForm />
            </div>
            <div className="space-y-8">
              <div className="card-dark">
                <h3 className="heading-3 text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-400">info@renthuman.ai</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-400">(720) 507-0845</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">Hours</div>
                      <div className="text-gray-400">Mon-Fri: 8am - 8pm EST</div>
                      <div className="text-gray-400">Weekends: By appointment</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-dark">
                <h3 className="heading-3 text-white mb-4">Quick Response Promise</h3>
                <p className="text-gray-400">
                  We respond to all inquiries within 2 hours during business hours. For urgent staffing needs, call us directly and we&apos;ll mobilize immediately.
                </p>
              </div>

              <div className="card-dark">
                <h3 className="heading-3 text-white mb-4">Coverage Areas</h3>
                <p className="text-gray-400">
                  RentHuman provides event staffing in all 50 states and 300+ cities nationwide. Whether you need staff in one city or across multiple markets, we&apos;ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
