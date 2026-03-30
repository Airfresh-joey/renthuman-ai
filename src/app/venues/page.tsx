import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import venues from "@/data/venues.json";

export const metadata: Metadata = {
  title: "Venue Staffing | 100+ Major Venues Nationwide",
  description:
    "Professional event staffing at 100+ major convention centers, stadiums, and arenas nationwide. RentHuman has experienced staff ready for any venue.",
};

const venueTypes = [
  { label: "Convention Centers", type: "convention-center" },
  { label: "Stadiums", type: "stadium" },
  { label: "Arenas", type: "arena" },
  { label: "Event Spaces", type: "event-space" },
];

export default function VenuesIndexPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Venues" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              Venue <span className="text-gradient">Staffing</span>
            </h1>
            <p className="text-xl text-gray-300">
              Experienced event staff for 100+ major convention centers, stadiums, arenas, and event spaces nationwide.
            </p>
          </div>
        </div>
      </section>

      {venueTypes.map((vt) => {
        const typeVenues = venues.filter((v) => v.type === vt.type);
        if (typeVenues.length === 0) return null;
        return (
          <section key={vt.type} className="section-padding odd:bg-dark-900/50">
            <div className="container-custom mx-auto">
              <h2 className="heading-2 text-white mb-8">{vt.label}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {typeVenues.map((v) => (
                  <Link key={v.slug} href={`/venue/${v.slug}`} className="card-dark-hover group">
                    <h3 className="text-white font-bold group-hover:text-brand-500 transition-colors text-sm mb-1">
                      {v.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{v.city}, {v.stateAbbr} • {v.capacity.toLocaleString()} capacity</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
