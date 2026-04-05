import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renthuman.ai"),
  title: {
    default: "RentHuman | #1 Nationwide Event Staffing Agency",
    template: "%s | RentHuman",
  },
  description:
    "RentHuman is the nation's premier event staffing agency. Brand ambassadors, promotional models, trade show staff & more across all 50 states. Real Humans. Real Results.",
  keywords: [
    "event staffing agency",
    "brand ambassadors",
    "promotional models",
    "trade show staff",
    "event staff",
    "nationwide staffing",
    "experiential marketing staff",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://renthuman.ai",
    siteName: "RentHuman",
    title: "RentHuman | #1 Nationwide Event Staffing Agency",
    description:
      "The nation's premier event staffing agency. Brand ambassadors, promotional models, trade show staff & more across all 50 states.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RentHuman - Nationwide Event Staffing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentHuman | #1 Nationwide Event Staffing Agency",
    description:
      "The nation's premier event staffing agency. Real Humans. Real Results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      name: "RentHuman",
      url: "https://renthuman.ai",
      logo: "https://renthuman.ai/logo.png",
      image: "https://renthuman.ai/og-image.jpg",
      description:
        "The nation's premier event staffing agency providing brand ambassadors, promotional models, trade show staff and more across all 50 states.",
      foundingDate: "2010",
      areaServed: "US",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "CO",
        addressCountry: "US",
      },
      telephone: "+17205070845",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+17205070845",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Air Fresh Marketing",
        url: "https://www.airfreshmarketing.com",
      },
      sameAs: [
        "https://facebook.com/renthuman",
        "https://instagram.com/renthuman",
        "https://linkedin.com/company/renthuman",
        "https://twitter.com/renthuman",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Event Staffing Services",
      provider: {
        "@type": "Organization",
        name: "RentHuman",
        url: "https://renthuman.ai",
      },
      serviceType: "Event Staffing",
      areaServed: "US",
      description:
        "Nationwide event staffing including brand ambassadors, promotional models, trade show staff, street teams, and product demonstrators.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Event Staffing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Ambassadors" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Promotional Models" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade Show Staff" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Street Teams" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Demonstrators" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospitality Staff" } },
        ],
      },
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-dark-950 text-white`}
      >
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
