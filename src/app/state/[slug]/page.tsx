import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import states from "@/data/states.json";
import services from "@/data/services.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return states.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = states.find((s) => s.slug === params.slug);
  if (!state) return {};
  return {
    title: state.metaTitle,
    description: state.metaDescription,
  };
}

export default function StatePage({ params }: Props) {
  const state = states.find((s) => s.slug === params.slug);
  if (!state) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Event Staffing in ${state.name}`,
    description: state.metaDescription,
    provider: {
      "@type": "Organization",
      name: "RentHuman",
      url: "https://renthuman.ai",
    },
    areaServed: {
      "@type": "State",
      name: state.name,
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
            { label: "Locations", href: "/locations" },
            { label: state.name },
          ]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              Event Staffing in <span className="text-gradient">{state.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">{state.description}</p>
            <Link href="/contact" className="btn-primary">Get a Free Quote in {state.name} →</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Cities in State */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">
            Cities We Serve in {state.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {state.majorCities.map((city) => (
              <Link
                key={city}
                href={`/city/${city}`}
                className="px-5 py-3 card-dark-hover !p-4 text-gray-300 hover:text-brand-500 font-medium"
              >
                {city.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">
            Services Available in {state.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-dark-hover group text-center !p-4">
                <span className="text-gray-300 group-hover:text-brand-500 transition-colors text-sm font-medium">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="heading-2 text-white text-center mb-8">
            Get Event Staff in {state.name}
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
