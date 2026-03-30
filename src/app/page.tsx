import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import QuoteForm from "@/components/QuoteForm";
import FAQSection from "@/components/FAQSection";

const services = [
  { name: "Brand Ambassadors", slug: "brand-ambassadors", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", desc: "Charismatic brand representatives who embody your brand identity." },
  { name: "Promotional Models", slug: "promotional-models", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", desc: "Professional models for product launches, trade shows, and events." },
  { name: "Trade Show Staff", slug: "trade-show-staff", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", desc: "Experienced booth staff who drive engagement and capture leads." },
  { name: "Event Staff", slug: "event-staff", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", desc: "Reliable event support for conferences, galas, and corporate events." },
  { name: "Street Teams", slug: "street-teams", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", desc: "Energetic street teams for guerrilla marketing and samplings." },
  { name: "Product Demonstrators", slug: "product-demonstrators", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", desc: "Skilled demonstrators who showcase your product's value." },
  { name: "Hospitality Staff", slug: "hospitality-staff", icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546", desc: "Professional hospitality staff for VIP events and receptions." },
  { name: "Mobile Tour Staff", slug: "mobile-tour-staff", icon: "M13 10V3L4 14h7v7l9-11h-7z", desc: "Tour-ready staff for multi-city brand activations." },
];

const topCities = [
  "New York", "Los Angeles", "Chicago", "Las Vegas", "Miami",
  "Dallas", "Atlanta", "San Francisco", "Houston", "Phoenix",
  "Denver", "Seattle", "Orlando", "Nashville", "Austin",
  "San Diego", "Boston", "Minneapolis", "Charlotte", "Detroit",
];

const industries = [
  "Automotive", "Technology", "Food & Beverage", "Fashion", "Beauty",
  "Pharmaceutical", "Sports", "Entertainment", "Finance", "Healthcare",
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Director of Events",
    company: "Apex Trade Solutions",
    quote: "I'll be honest — we'd been burned by staffing agencies before. When we tried RentHuman for our CES booth, the difference was night and day. All 12 ambassadors arrived early, knew our pitch cold, and actually engaged people walking by. We pulled in 340 qualified leads in three days.",
  },
  {
    name: "David Okonkwo",
    title: "Trade Show Manager",
    company: "Sterling Industrial Corp",
    quote: "RentHuman's team actually qualified leads for us — asked the right questions, identified decision-makers, and flagged the hot prospects. Our sales team closed two deals directly from conversations that started on the show floor. That never happened before.",
  },
  {
    name: "Emily Strauss",
    title: "Brand Experience Director",
    company: "Forge & Frame Marketing",
    quote: "We ran a 30-city mobile tour and RentHuman sourced local talent in every single market. Not one no-show across the entire program. Before them, multi-city tours were our biggest operational headache. Now it's honestly the smoothest part of our campaigns.",
  },
];

const faqs = [
  {
    question: "How quickly can RentHuman staff my event?",
    answer: "We can staff most events within 48-72 hours. For larger activations, we recommend 1-2 weeks notice. Our network of 50,000+ vetted professionals across all 50 states means we always have talent ready to deploy.",
  },
  {
    question: "What areas does RentHuman cover?",
    answer: "RentHuman provides event staffing services across all 50 states. We have especially strong presence in major markets like New York, Los Angeles, Chicago, Las Vegas, Miami, Dallas, Atlanta, and San Francisco, plus 300+ additional cities nationwide.",
  },
  {
    question: "How are your staff members vetted?",
    answer: "Every RentHuman team member goes through a rigorous screening process including background checks, skill assessments, reference verification, and in-person or video interviews. We maintain a 98% client satisfaction rate because we only send the best.",
  },
  {
    question: "What types of events do you staff?",
    answer: "We staff everything from trade shows and product launches to mobile tours, sampling campaigns, corporate events, sporting events, concerts, and more. Whether you need 2 brand ambassadors or 200 event staff, we've got you covered.",
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is transparent and competitive. Rates vary by market, service type, and event requirements. Contact us for a free, no-obligation quote tailored to your specific needs. We offer volume discounts for multi-day and multi-city programs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,0,0.05),transparent_40%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container-custom mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-brand-500 text-sm font-medium">The #1 Nationwide Event Staffing Agency</span>
            </div>

            <h1 className="heading-1 text-white mb-6 leading-tight">
              Real Humans.<br />
              <span className="text-gradient">Real Results.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              From brand ambassadors to trade show staff, we provide vetted, professional event talent across all <strong className="text-white">50 states</strong> and <strong className="text-white">300+ cities</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact" className="btn-primary text-center">
                Get a Free Quote →
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                Explore Services
              </Link>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Staff On Demand</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whatever your event needs, we have the perfect talent ready to deploy nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-dark-hover group"
              >
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All 20+ Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why RentHuman */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">
                Why Leading Brands Choose <span className="text-gradient">RentHuman</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Nationwide Coverage", desc: "Staff available in all 50 states and 300+ cities. One point of contact for multi-market programs." },
                  { title: "Vetted Professionals", desc: "Rigorous background checks, skill assessments, and training ensure only the best represent your brand." },
                  { title: "48-Hour Deployment", desc: "Need staff fast? Our deep talent pool means we can activate in as little as 48 hours." },
                  { title: "Dedicated Field Management", desc: "Every program gets a dedicated field manager to ensure seamless execution on the ground." },
                  { title: "Real-Time Reporting", desc: "Live event recaps, photos, metrics, and KPI tracking delivered in real-time." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-500/10 rounded-lg flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl border border-dark-700/50 flex items-center justify-center overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                  alt="Brand ambassadors working at a live event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark-800 border border-dark-700 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-brand-500">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">Nationwide Coverage</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Event staffing in 300+ cities across all 50 states. Wherever your event is, we&apos;re there.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {topCities.map((city) => (
              <Link
                key={city}
                href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-300 hover:border-brand-500/50 hover:text-brand-500 transition-all text-sm"
              >
                {city}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locations" className="btn-secondary">
              View All 300+ Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized staffing solutions for every industry.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <Link
                key={ind}
                href={`/industries/${ind.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                className="px-6 py-3 card-dark-hover !p-4 text-gray-300 hover:text-brand-500 font-medium"
              >
                {ind}
              </Link>
            ))}
            <Link href="/industries" className="px-6 py-3 card-dark-hover !p-4 text-brand-500 font-bold">
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Trusted by 500+ brands nationwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-dark">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.title}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-2 text-white mb-6">
                Get Your <span className="text-gradient">Free Quote</span> Today
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Tell us about your event and we&apos;ll provide a custom staffing solution within 2 hours.
              </p>
              <div className="space-y-4">
                {[
                  "No obligation, completely free quotes",
                  "Typical response time under 2 hours",
                  "Custom staffing plans for any budget",
                  "Nationwide coverage in all 50 states",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
