"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, heading = "Frequently Asked Questions" }: { faqs: FAQ[]; heading?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom mx-auto">
        <h2 className="heading-2 text-white text-center mb-12">{heading}</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-dark cursor-pointer !p-0 overflow-hidden"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between p-5">
                <h3 className="text-white font-medium pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-400 border-t border-dark-700/50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
