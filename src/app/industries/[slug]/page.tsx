import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import industries from "@/data/industries.json";
import services from "@/data/services.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  const relatedServices = services.filter((s) =>
    industry.commonServices.includes(s.slug)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.name} Event Staffing`,
    description: industry.metaDescription,
    provider: {
      "@type": "Organization",
      name: "RentHuman",
      url: "https://renthuman.ai",
    },
    areaServed: "US",
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
            { label: "Industries", href: "/industries" },
            { label: industry.name },
          ]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              {industry.name} <span className="text-gradient">Event Staffing</span>
            </h1>
            <p className="text-xl text-gray-300">{industry.description.split("\n\n")[0]}</p>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-4xl">
          {industry.description.split("\n\n").slice(1).map((p, i) => (
            <p key={i} className="text-gray-300 mb-4 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Common Events */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">
            Common {industry.name} Events We Staff
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.commonEvents.map((event, i) => (
              <div key={i} className="card-dark flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-500 font-bold">{i + 1}</span>
                </div>
                <span className="text-gray-300">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-2 text-white text-center mb-12">
            Recommended Services for {industry.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-dark-hover group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-400 text-sm">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="section-padding bg-dark-900/50">
          <div className="container-custom mx-auto max-w-3xl">
            <h2 className="heading-2 text-white text-center mb-12">
              {industry.name} Staffing FAQ
            </h2>
            <div className="space-y-4">
              {industry.faqs.map((faq, i) => (
                <div key={i} className="card-dark">
                  <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="heading-2 text-white text-center mb-8">
            Get {industry.name} Event Staff
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
