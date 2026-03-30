import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://renthuman.ai${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-brand-500 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-500 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-200">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
