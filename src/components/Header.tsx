"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Brand Ambassadors", slug: "brand-ambassadors" },
  { name: "Promotional Models", slug: "promotional-models" },
  { name: "Trade Show Staff", slug: "trade-show-staff" },
  { name: "Event Staff", slug: "event-staff" },
  { name: "Street Teams", slug: "street-teams" },
  { name: "Product Demonstrators", slug: "product-demonstrators" },
  { name: "Hospitality Staff", slug: "hospitality-staff" },
  { name: "Emcees & MCs", slug: "emcees-and-mcs" },
  { name: "Mobile Tour Staff", slug: "mobile-tour-staff" },
  { name: "Field Managers", slug: "field-managers-and-team-leads" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-dark-700/50">
      <div className="container-custom mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform">
            R
          </div>
          <div>
            <span className="text-xl font-bold text-white">Rent</span>
            <span className="text-xl font-bold text-brand-500">Human</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-gray-300 hover:text-brand-500 transition-colors font-medium flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-dark-800 border border-dark-700 rounded-xl shadow-2xl p-4 grid gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="px-3 py-2 text-sm text-gray-300 hover:text-brand-500 hover:bg-dark-700/50 rounded-lg transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="px-3 py-2 text-sm text-brand-500 font-semibold hover:bg-dark-700/50 rounded-lg transition-colors border-t border-dark-700 mt-2 pt-3"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="text-gray-300 hover:text-brand-500 transition-colors font-medium">
            About
          </Link>
          <Link href="/industries" className="text-gray-300 hover:text-brand-500 transition-colors font-medium">
            Industries
          </Link>
          <Link href="/case-studies" className="text-gray-300 hover:text-brand-500 transition-colors font-medium">
            Case Studies
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-brand-500 transition-colors font-medium">
            Blog
          </Link>
          <Link href="/for-talent" className="text-gray-300 hover:text-brand-500 transition-colors font-medium">
            Join Our Team
          </Link>
          <Link href="/contact" className="btn-primary !py-3 !px-6 !text-base">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-900 border-t border-dark-700">
          <nav className="container-custom mx-auto py-4 px-4 flex flex-col gap-3">
            <Link href="/services" className="text-gray-300 hover:text-brand-500 py-2 font-medium" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-brand-500 py-2 font-medium" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/industries" className="text-gray-300 hover:text-brand-500 py-2 font-medium" onClick={() => setMobileOpen(false)}>
              Industries
            </Link>
            <Link href="/case-studies" className="text-gray-300 hover:text-brand-500 py-2 font-medium" onClick={() => setMobileOpen(false)}>
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-brand-500 py-2 font-medium" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/for-talent" className="text-gray-300 hover:text-brand-500 py-2 font-medium" onClick={() => setMobileOpen(false)}>
              Join Our Team
            </Link>
            <Link href="/contact" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
