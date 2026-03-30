import Link from "next/link";

const footerServices = [
  { name: "Brand Ambassadors", href: "/services/brand-ambassadors" },
  { name: "Promotional Models", href: "/services/promotional-models" },
  { name: "Trade Show Staff", href: "/services/trade-show-staff" },
  { name: "Event Staff", href: "/services/event-staff" },
  { name: "Street Teams", href: "/services/street-teams" },
  { name: "Product Demonstrators", href: "/services/product-demonstrators" },
  { name: "Hospitality Staff", href: "/services/hospitality-staff" },
  { name: "Mobile Tour Staff", href: "/services/mobile-tour-staff" },
];

const footerCities = [
  { name: "New York", href: "/city/new-york" },
  { name: "Los Angeles", href: "/city/los-angeles" },
  { name: "Chicago", href: "/city/chicago" },
  { name: "Las Vegas", href: "/city/las-vegas" },
  { name: "Miami", href: "/city/miami" },
  { name: "Dallas", href: "/city/dallas" },
  { name: "San Francisco", href: "/city/san-francisco" },
  { name: "Atlanta", href: "/city/atlanta" },
];

const footerCompany = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "For Clients", href: "/for-clients" },
  { name: "Join Our Team", href: "/for-talent" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-700/50">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-500">
        <div className="container-custom mx-auto section-padding !py-16 text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Staff Your Next Event?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote in minutes. Nationwide coverage, vetted professionals, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get a Free Quote
            </Link>
            <Link href="/for-talent" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-600 transition-all duration-300 text-lg">
              Apply as Talent
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom mx-auto section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                R
              </div>
              <div>
                <span className="text-xl font-bold text-white">Rent</span>
                <span className="text-xl font-bold text-brand-500">Human</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Real Humans. Real Results. The nation&apos;s premier event staffing agency providing vetted, professional talent for brands across all 50 states.
            </p>
            <div className="flex gap-4">
              {["facebook", "instagram", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/renthuman`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-500 hover:bg-dark-700 transition-colors"
                  aria-label={social}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-brand-500 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-brand-500 hover:text-brand-400 transition-colors text-sm font-semibold">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Top Cities</h3>
            <ul className="space-y-2">
              {footerCities.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-brand-500 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-brand-500 hover:text-brand-400 transition-colors text-sm font-semibold">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-brand-500 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-white font-bold text-lg mb-2">Contact</h3>
              <p className="text-gray-400 text-sm">info@renthuman.ai</p>
              <p className="text-gray-400 text-sm">(888) 555-RENT</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RentHuman. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Nationwide Event Staffing</span>
            <span>•</span>
            <span>50 States</span>
            <span>•</span>
            <span>500+ Brands Served</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
