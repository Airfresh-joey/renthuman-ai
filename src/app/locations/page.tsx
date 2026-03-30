import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import states from "@/data/states.json";
import cities from "@/data/cities.json";

export const metadata: Metadata = {
  title: "Event Staffing Locations | 300+ Cities, All 50 States",
  description:
    "RentHuman provides event staffing in 300+ cities across all 50 states. Find professional event staff near you.",
};

const regions = ["Northeast", "Southeast", "Midwest", "Southwest", "West"];

export default function LocationsPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Locations" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              Our <span className="text-gradient">Locations</span>
            </h1>
            <p className="text-xl text-gray-300">
              Professional event staffing in 300+ cities across all 50 states. Wherever your event is, RentHuman has talent ready.
            </p>
          </div>
        </div>
      </section>

      {/* By Region */}
      {regions.map((region) => {
        const regionStates = states.filter((s) => s.region === region);
        return (
          <section key={region} className="section-padding odd:bg-dark-900/50">
            <div className="container-custom mx-auto">
              <h2 className="heading-2 text-white mb-8">{region}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionStates.map((state) => {
                  const stateCities = cities.filter((c) => c.stateAbbr === state.abbr).slice(0, 6);
                  return (
                    <div key={state.slug} className="card-dark">
                      <Link href={`/state/${state.slug}`} className="text-xl font-bold text-white hover:text-brand-500 transition-colors">
                        {state.name}
                      </Link>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {stateCities.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/city/${c.slug}`}
                            className="text-sm text-gray-400 hover:text-brand-500 transition-colors"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
