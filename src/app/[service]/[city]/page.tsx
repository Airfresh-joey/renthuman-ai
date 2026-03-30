import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import cities from "@/data/cities.json";
import services from "@/data/services.json";

interface Props {
  params: { service: string; city: string };
}

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ service: service.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.service);
  const city = cities.find((c) => c.slug === params.city);
  if (!service || !city) return {};
  return {
    title: `${service.name} in ${city.name}, ${city.stateAbbr} | RentHuman`,
    description: `Hire professional ${service.name.toLowerCase()} in ${city.name}, ${city.stateAbbr}. Vetted talent, fast deployment, nationwide reliability. Get a free quote from RentHuman today.`,
  };
}

export default function ServiceCityPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.service);
  const city = cities.find((c) => c.slug === params.city);
  if (!service || !city) notFound();

  const otherServicesInCity = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  const topCitiesForService = cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}, ${city.stateAbbr}`,
    description: `Professional ${service.name.toLowerCase()} for hire in ${city.name}, ${city.stateAbbr}`,
    provider: {
      "@type": "Organization",
      name: "RentHuman",
      url: "https://renthuman.ai",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
    url: `https://renthuman.ai/${service.slug}/${city.slug}`,
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
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}` },
            { label: city.name },
          ]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              {service.name} in <span className="text-gradient">{city.name}, {city.stateAbbr}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Need professional {service.name.toLowerCase()} in {city.name}? RentHuman provides vetted, experienced {service.name.toLowerCase()} ready to represent your brand at any event in the {city.name} metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Get {service.name} in {city.name} →
              </Link>
              <Link href={`/services/${service.slug}`} className="btn-secondary text-center">
                About {service.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* About this service in this city */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-white mb-6">
                Why Hire {service.name} in {city.name}?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {city.name} is a premier market for events, brand activations, and experiential marketing. Whether you&apos;re hosting an event at one of {city.name}&apos;s top venues, running a street-level campaign, or launching a product, having the right {service.name.toLowerCase()} makes all the difference.
                </p>
                <p>
                  RentHuman&apos;s {city.name}-based {service.name.toLowerCase()} are locally sourced, thoroughly vetted, and trained to deliver exceptional brand experiences. They bring knowledge of the local market, venues, and audience dynamics.
                </p>
                <p>
                  With our dedicated field management team in {city.state}, every activation runs smoothly from setup to teardown — with real-time reporting to keep you informed.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
              <div className="space-y-3">
                {[
                  `Vetted ${service.name.toLowerCase()} based in ${city.name}`,
                  "Background checked and professionally trained",
                  "Brand-specific preparation and briefing",
                  "Dedicated field manager on-site",
                  "Real-time event reporting and photos",
                  "Post-event recaps and performance metrics",
                  "48-hour deployment capability",
                  "Flexible scheduling and headcount",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">
            Other Services in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServicesInCity.map((s) => (
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

      {/* This service in other cities */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-4">
            {service.name} in Other Cities
          </h2>
          <p className="text-gray-400 text-center mb-8">Available in 300+ cities nationwide</p>
          <div className="flex flex-wrap justify-center gap-3">
            {topCitiesForService.map((c) => (
              <Link
                key={c.slug}
                href={`/${service.slug}/${c.slug}`}
                className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-300 hover:border-brand-500/50 hover:text-brand-500 transition-all text-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="heading-2 text-white text-center mb-8">
            Book {service.name} in {city.name}
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
