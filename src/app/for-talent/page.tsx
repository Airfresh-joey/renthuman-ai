"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ForTalentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mdapgdpo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Join Our Team" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600">RentHuman</span> Team
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Work with the world&apos;s biggest brands. Flexible schedules. Competitive pay. Exciting events nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Competitive Pay", desc: "Earn top rates in the industry. Weekly direct deposit, always on time." },
              { title: "Flexible Schedule", desc: "Work when you want. Pick events that fit your schedule and lifestyle." },
              { title: "Exciting Events", desc: "Work with major brands at concerts, trade shows, product launches, and more." },
              { title: "Career Growth", desc: "Advance from staff to team lead to field manager. We promote from within." },
              { title: "Nationwide Opportunities", desc: "Events in 300+ cities. Travel opportunities for multi-city programs." },
              { title: "Training & Development", desc: "Free training programs to build your skills and professional experience." },
            ].map((b) => (
              <div key={b.title} className="card-dark">
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-12">Roles We&apos;re Hiring</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Brand Ambassadors", "Promotional Models", "Trade Show Staff", "Event Staff",
              "Street Team Members", "Product Demonstrators", "Hospitality Staff", "Emcees & MCs",
              "Registration Staff", "Greeters & Hosts", "Field Managers", "Mobile Tour Staff",
            ].map((role) => (
              <div key={role} className="card-dark text-center !p-4">
                <span className="text-gray-300">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-8">Apply Now</h2>
          <div className="card-dark">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-400">Thanks for applying. We&apos;ll review your application and get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First Name *" required className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
                  <input type="text" name="lastName" placeholder="Last Name *" required className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
                </div>
                <input type="email" name="email" placeholder="Email *" required className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
                <input type="tel" name="phone" placeholder="Phone *" required className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
                <input type="text" name="location" placeholder="City, State *" required className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
                <select name="role" className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" defaultValue="">
                  <option value="" disabled>Primary Role Interest *</option>
                  <option>Brand Ambassador</option>
                  <option>Promotional Model</option>
                  <option>Trade Show Staff</option>
                  <option>Event Staff</option>
                  <option>Field Manager</option>
                  <option>Other</option>
                </select>
                <textarea name="experience" placeholder="Tell us about your experience..." rows={4} className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none resize-none" />
                <button type="submit" className="btn-primary w-full" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Application →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
