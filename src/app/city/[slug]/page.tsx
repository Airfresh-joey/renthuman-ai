import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import cities from "@/data/cities.json";
import services from "@/data/services.json";
import venues from "@/data/venues.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.slug);
  if (!city) return {};
  return {
    title: `Event Staffing in ${city.name}, ${city.stateAbbr} | RentHuman`,
    description: `Professional event staffing in ${city.name}, ${city.stateAbbr}. Brand ambassadors, trade show staff, promotional models & more. Vetted talent, fast deployment. Get a free quote.`,
  };
}

export default function CityPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.slug);
  if (!city) notFound();

  const cityVenues = venues.filter((v) => v.citySlug === city.slug).slice(0, 6);
  const nearbyCities = cities
    .filter((c) => c.state === city.state && c.slug !== city.slug)
    .slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `RentHuman ${city.name}`,
    description: `Professional event staffing services in ${city.name}, ${city.stateAbbr}`,
    url: `https://renthuman.ai/city/${city.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.stateAbbr,
      addressCountry: "US",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "RentHuman",
      url: "https://renthuman.ai",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[
            { label: "Locations", href: "/locations" },
            { label: city.state, href: `/state/${city.state.toLowerCase().replace(/\s+/g, "-")}` },
            { label: city.name },
          ]} />
          <div className="mt-8 max-w-4xl">
            <div className="text-brand-500 text-sm font-semibold mb-2">{city.state} • {city.region}</div>
            <h1 className="heading-1 text-white mb-6">
              Event Staffing in <span className="text-gradient">{city.name}, {city.stateAbbr}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">{city.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">Get a Quote in {city.name} →</Link>
              <Link href="/for-talent" className="btn-secondary text-center">Join Our {city.name} Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Services in this city */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-4">
            Staffing Services in {city.name}
          </h2>
          <p className="text-gray-400 text-center mb-12">
            All 20+ staffing services available in {city.name}, {city.stateAbbr}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${city.slug}`}
                className="card-dark-hover group text-center"
              >
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-brand-500 transition-colors">
                  {s.name} in {city.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      {cityVenues.length > 0 && (
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="heading-2 text-white text-center mb-12">
              Major Venues in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityVenues.map((v) => (
                <Link key={v.slug} href={`/venue/${v.slug}`} className="card-dark-hover group">
                  <div className="text-brand-500 text-xs font-semibold mb-1">
                    {v.type.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </div>
                  <h3 className="text-white font-bold group-hover:text-brand-500 transition-colors mb-1">
                    {v.name}
                  </h3>
                  <p className="text-gray-500 text-sm">Capacity: {v.capacity.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why RentHuman in this city */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="heading-2 text-white mb-8">
            Why Choose RentHuman in {city.name}?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              {city.name} is one of America&apos;s most dynamic cities for events, conferences, and brand activations. Whether you&apos;re staffing a trade show, launching a product, running a sampling campaign, or hosting a corporate event, RentHuman has the local talent and expertise to make it happen.
            </p>
            <p>
              Our {city.name} talent pool includes experienced brand ambassadors, professional promotional models, skilled trade show staff, energetic street teams, and dedicated field managers — all vetted, trained, and ready to represent your brand.
            </p>
            <p>
              With deep knowledge of {city.name}&apos;s event landscape and venue requirements, we ensure seamless execution from planning to post-event reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="heading-2 text-white text-center mb-12">
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/city/${c.slug}`}
                  className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-300 hover:border-brand-500/50 hover:text-brand-500 transition-all text-sm"
                >
                  {c.name}, {c.stateAbbr}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="heading-2 text-white text-center mb-8">
            Get Event Staff in {city.name}
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
