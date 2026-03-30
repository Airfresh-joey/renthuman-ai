import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import blogs from "@/data/blogs.json";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-6">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-gray-300 leading-relaxed">
              <span className="text-brand-500 mt-1.5 flex-shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const inlineFormat = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={i}
          className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="text-xl font-bold text-white mt-8 mb-4">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.replace("- ", ""));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={i}
          className="text-gray-300 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
        />
      );
    }
    i++;
  }
  flushList();

  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const currentIndex = blogs.findIndex((p) => p.slug === params.slug);
  const relatedPosts = blogs.filter((_, idx) => idx !== currentIndex).slice(0, 3);

  return (
    <>
      <section className="section-padding bg-dark-900/50 !pb-12">
        <div className="container-custom mx-auto">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="heading-1 text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-400">{post.author}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden max-w-4xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <section className="section-padding !pt-12">
        <div className="container-custom mx-auto">
          <article className="max-w-3xl">
            {renderMarkdown(post.content)}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900/50 !pt-12">
        <div className="container-custom mx-auto">
          <div className="card-dark max-w-3xl text-center mx-auto !p-12">
            <h2 className="heading-3 text-white mb-4">
              Need Staff for Your Next Event?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote. We typically respond within 2
              hours.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="heading-2 text-white mb-8">More From the Blog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group card-dark-hover"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs font-semibold text-brand-500">
                    {related.category}
                  </span>
                  <h3 className="text-white font-bold mt-2 group-hover:text-brand-500 transition-colors leading-snug">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
