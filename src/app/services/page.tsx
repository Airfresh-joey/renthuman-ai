import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Event Staffing Services | 20+ Professional Staffing Solutions",
  description:
    "Explore RentHuman's 20+ event staffing services including brand ambassadors, promotional models, trade show staff, and more. Nationwide coverage.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              From brand ambassadors to warehouse staff, RentHuman provides 20+ specialized staffing solutions for every event type imaginable. All across 50 states.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-dark-hover group"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{service.shortDescription}</p>
                <span className="text-brand-500 text-sm font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
