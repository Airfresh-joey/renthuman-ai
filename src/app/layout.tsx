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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Event Staffing & Brand Ambassador Services",
    provider: {
      "@type": "Organization",
      name: "RentHuman",
      url: "https://renthuman.ai",
    },
    serviceType: "Event Staffing",
    description:
      "AI-powered nationwide event staffing including brand ambassadors, promotional models, trade show staff, product sampling, and street teams across all 50 U.S. states.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Staffing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Ambassadors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trade Show Staff" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Promotional Models" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Sampling Staff" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Street Teams" } },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://renthuman.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://renthuman.ai/services",
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RentHuman",
    url: "https://renthuman.ai",
    logo: "https://renthuman.ai/logo.png",
    description:
      "The nation's premier event staffing agency providing brand ambassadors, promotional models, trade show staff and more across all 50 states.",
    foundingDate: "2010",
    areaServed: "US",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+17205070845",
      contactType: "sales",
      areaServed: "US",
    },
    sameAs: [
      "https://facebook.com/renthuman",
      "https://instagram.com/renthuman",
      "https://linkedin.com/company/renthuman",
      "https://twitter.com/renthuman",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-dark-950 text-white`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
