import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import industries from "@/data/industries.json";

export const metadata: Metadata = {
  title: "Industries We Serve | Event Staffing by Industry",
  description:
    "RentHuman provides specialized event staffing for 20+ industries including automotive, tech, food & beverage, fashion, pharma, and more.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              Industries <span className="text-gradient">We Serve</span>
            </h1>
            <p className="text-xl text-gray-300">
              Specialized event staffing solutions tailored to the unique demands of every industry.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="card-dark-hover group"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{ind.description.split("\n\n")[0]}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ind.commonEvents.slice(0, 3).map((e) => (
                    <span key={e} className="px-2 py-1 bg-dark-700/50 rounded text-xs text-gray-400">{e}</span>
                  ))}
                </div>
                <span className="text-brand-500 text-sm font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
