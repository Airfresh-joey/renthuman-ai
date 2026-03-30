"use client";

import { useState } from "react";

export default function QuoteForm({ className = "" }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnjodzey", {
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

  if (submitted) {
    return (
      <div className={`card-dark text-center py-12 ${className}`}>
        <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-3 text-white mb-2">Quote Request Received!</h3>
        <p className="text-gray-400">We&apos;ll get back to you within 2 hours during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`card-dark space-y-4 ${className}`}>
      <h3 className="heading-3 text-white mb-2">Get a Free Quote</h3>
      <p className="text-gray-400 text-sm mb-6">Tell us about your event and we&apos;ll provide a custom quote.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        />
      </div>

      <select
        name="service"
        className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        defaultValue=""
      >
        <option value="" disabled>Service Needed *</option>
        <option value="brand-ambassadors">Brand Ambassadors</option>
        <option value="promotional-models">Promotional Models</option>
        <option value="trade-show-staff">Trade Show Staff</option>
        <option value="event-staff">Event Staff</option>
        <option value="street-teams">Street Teams</option>
        <option value="product-demonstrators">Product Demonstrators</option>
        <option value="hospitality-staff">Hospitality Staff</option>
        <option value="mobile-tour-staff">Mobile Tour Staff</option>
        <option value="other">Other</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="city"
          placeholder="Event City"
          className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        />
        <input
          type="date"
          name="date"
          placeholder="Event Date"
          className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your event..."
        rows={4}
        className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors resize-none"
      />

      <button type="submit" className="btn-primary w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Request Free Quote →"}
      </button>
      <p className="text-gray-500 text-xs text-center">Typically respond within 2 hours. No obligation.</p>
    </form>
  );
}
