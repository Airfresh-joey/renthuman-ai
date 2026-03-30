import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Case Studies | Event Staffing Success Stories",
  description:
    "See how RentHuman has helped 500+ brands achieve incredible results with professional event staffing. Real case studies, real results.",
};

const caseStudies = [
  {
    title: "National Product Launch: 50 Cities in 30 Days",
    client: "Major CPG Brand",
    services: ["Brand Ambassadors", "Product Demonstrators", "Field Managers"],
    results: ["250+ brand ambassadors deployed", "1.2M product samples distributed", "340% ROI on staffing investment"],
    description: "A leading CPG brand needed to launch a new product line simultaneously across 50 major US cities. RentHuman coordinated recruitment, training, and deployment of 250+ brand ambassadors with dedicated field managers in every market.",
  },
  {
    title: "CES 2024 Trade Show Domination",
    client: "Enterprise Tech Company",
    services: ["Trade Show Staff", "Promotional Models", "Registration Staff"],
    results: ["15,000+ booth visitors in 4 days", "3,200 qualified leads captured", "98% client satisfaction score"],
    description: "This tech giant needed a team of 30 highly technical trade show staff for their massive CES booth. RentHuman sourced tech-savvy talent, conducted product-specific training, and managed all on-site logistics.",
  },
  {
    title: "Multi-City Mobile Tour: Coast to Coast",
    client: "Leading Beverage Brand",
    services: ["Mobile Tour Staff", "Street Teams", "Samplers"],
    results: ["25 cities covered in 60 days", "500,000+ samples distributed", "2.5M social media impressions"],
    description: "A national beverage brand needed tour staff for a 60-day mobile sampling tour hitting 25 cities. RentHuman provided consistent, energetic talent in every market with real-time reporting and photo documentation.",
  },
  {
    title: "Automotive Experience Center Staffing",
    client: "Luxury Auto Manufacturer",
    services: ["Brand Ambassadors", "Hospitality Staff", "Emcees"],
    results: ["Year-round staffing across 3 locations", "4.9/5 guest satisfaction rating", "45% test drive conversion rate"],
    description: "A luxury automotive brand needed premium talent for their permanent experience centers. RentHuman recruited, trained, and manages an ongoing team of brand ambassadors and hospitality staff at three flagship locations.",
  },
  {
    title: "National Conference Registration Management",
    client: "Fortune 500 Healthcare Company",
    services: ["Registration Staff", "Greeters", "Ushers"],
    results: ["8,000 attendees processed in 2 hours", "Zero wait time complaints", "Rebookeed for 5 annual events"],
    description: "Managing registration for an 8,000-person healthcare conference required precision and professionalism. RentHuman deployed a 40-person registration and guest services team that processed all attendees seamlessly.",
  },
  {
    title: "Guerrilla Marketing Blitz: NYC Launch",
    client: "DTC Fashion Brand",
    services: ["Street Teams", "Brand Ambassadors", "Social Media Staff"],
    results: ["200,000+ flyers & samples distributed", "50,000 social media engagements", "150% increase in NYC store traffic"],
    description: "A DTC fashion brand wanted to make a splash in New York City. RentHuman deployed 50 street team members across Manhattan and Brooklyn for a week-long guerrilla campaign with real-time social media coverage.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real results from real events. See how we&apos;ve helped brands achieve extraordinary outcomes with professional event staffing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="card-dark">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="text-brand-500 text-sm font-semibold mb-2">{cs.client}</div>
                    <h2 className="text-2xl font-bold text-white mb-4">{cs.title}</h2>
                    <p className="text-gray-400 mb-4">{cs.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.services.map((s) => (
                        <span key={s} className="px-3 py-1 bg-dark-700/50 rounded-full text-sm text-gray-300">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-dark-900/50 rounded-xl p-6 border border-dark-700/50">
                    <h3 className="text-white font-bold mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-gray-400 mb-8">Let&apos;s discuss how RentHuman can deliver results for your brand.</p>
          <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
        </div>
      </section>
    </>
  );
}
