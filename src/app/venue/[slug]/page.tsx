import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import venues from "@/data/venues.json";
import services from "@/data/services.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = venues.find((v) => v.slug === params.slug);
  if (!venue) return {};
  return {
    title: venue.metaTitle,
    description: venue.metaDescription,
  };
}

export default function VenuePage({ params }: Props) {
  const venue = venues.find((v) => v.slug === params.slug);
  if (!venue) notFound();

  const nearbyVenues = venues
    .filter((v) => v.citySlug === venue.citySlug && v.slug !== venue.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Event Staffing at ${venue.name}`,
    description: venue.metaDescription,
    provider: {
      "@type": "Organization",
      name: "RentHuman",
    },
    areaServed: {
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: venue.city,
        addressRegion: venue.stateAbbr,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[
            { label: "Venues", href: "/venues" },
            { label: venue.city, href: `/city/${venue.citySlug}` },
            { label: venue.name },
          ]} />
          <div className="mt-8 max-w-4xl">
            <div className="text-brand-500 text-sm font-semibold mb-2">
              {venue.type.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} • {venue.city}, {venue.stateAbbr}
            </div>
            <h1 className="heading-1 text-white mb-6">
              Event Staffing at <span className="text-gradient">{venue.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">{venue.description}</p>
            <p className="text-gray-400">Capacity: {venue.capacity.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* Services for this venue */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">
            Staffing Services at {venue.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 8).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-dark-hover group text-center">
                <h3 className="text-white font-medium group-hover:text-brand-500 transition-colors text-sm">
                  {s.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Venues */}
      {nearbyVenues.length > 0 && (
        <section className="section-padding bg-dark-900/50">
          <div className="container-custom mx-auto">
            <h2 className="heading-2 text-white text-center mb-12">
              Other Venues in {venue.city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyVenues.map((v) => (
                <Link key={v.slug} href={`/venue/${v.slug}`} className="card-dark-hover group">
                  <h3 className="text-white font-medium group-hover:text-brand-500 transition-colors text-sm mb-1">
                    {v.name}
                  </h3>
                  <p className="text-gray-500 text-xs">Capacity: {v.capacity.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="heading-2 text-white text-center mb-8">
            Book Event Staff for {venue.name}
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
