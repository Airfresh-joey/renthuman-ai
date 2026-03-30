import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import services from "@/data/services.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const topCities = [
    "New York", "Los Angeles", "Chicago", "Las Vegas", "Miami",
    "Dallas", "Atlanta", "San Francisco", "Houston", "Denver",
    "Seattle", "Orlando", "Nashville", "Austin", "Phoenix",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "RentHuman",
      url: "https://renthuman.ai",
    },
    areaServed: "US",
    url: `https://renthuman.ai/services/${service.slug}`,
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
            { label: service.name },
          ]} />
          <div className="mt-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="heading-1 text-white mb-6">{service.name}</h1>
              <p className="text-xl text-gray-300 mb-8">{service.shortDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">Get a Free Quote →</Link>
                <Link href="/for-talent" className="btn-secondary text-center">Apply as Talent</Link>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl border border-dark-700/50 flex items-center justify-center">
              <p className="text-gray-500">{service.name} Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-white mb-8">About Our {service.name}</h2>
            <div className="prose prose-invert max-w-none">
              {service.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-300 mb-4 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">Benefits of Our {service.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="card-dark flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.useCases.map((useCase, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-brand-500 font-bold text-lg">0{i + 1}</span>
                <p className="text-gray-300">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-4">
            {service.name} by City
          </h2>
          <p className="text-gray-400 text-center mb-8">Available in 300+ cities nationwide</p>
          <div className="flex flex-wrap justify-center gap-3">
            {topCities.map((city) => (
              <Link
                key={city}
                href={`/${service.slug}/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-300 hover:border-brand-500/50 hover:text-brand-500 transition-all text-sm"
              >
                {service.name} in {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + FAQ */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-white mb-4">
                Book {service.name} Today
              </h2>
              <p className="text-gray-400 mb-6">
                Get a free, no-obligation quote for {service.name.toLowerCase()} in your city. We respond within 2 hours.
              </p>
              <QuoteForm />
            </div>
            <div>
              <h2 className="heading-2 text-white mb-8">{service.name} FAQ</h2>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="card-dark">
                    <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card-dark-hover group text-center">
                  <h3 className="text-white font-bold group-hover:text-brand-500 transition-colors">{s.name}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
