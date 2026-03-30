import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-custom mx-auto text-center">
        <div className="text-8xl font-bold text-brand-500/20 mb-4">404</div>
        <h1 className="heading-2 text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
