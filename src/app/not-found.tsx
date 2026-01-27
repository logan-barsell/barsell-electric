import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 text-center">
      <h1 className="text-6xl font-extrabold text-brand-black mb-4">404</h1>
      <h2 className="text-3xl font-bold text-brand-black mb-4">Page Not Found</h2>
      <p className="text-brand-black/70 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center rounded-xl bg-brand-yellow px-5 py-3 font-bold text-black hover:opacity-90 transition-opacity duration-200"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl border border-brand-black/15 px-5 py-3 font-bold text-brand-black hover:bg-black/5 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
