import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import blogs from "@/data/blogs.json";

export const metadata: Metadata = {
  title: "Blog | Event Staffing Insights & Tips",
  description:
    "Expert insights on event staffing, brand ambassadors, trade shows, and experiential marketing. Practical advice from the RentHuman team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom mx-auto">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="mt-8 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">
              The <span className="text-gradient">RentHuman</span> Blog
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Practical insights on event staffing, experiential marketing, and
              making your events actually work. No fluff.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-dark-hover flex flex-col"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-brand-500 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-dark-700/50 flex items-center justify-between">
                  <span className="text-gray-500 text-xs">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-brand-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
