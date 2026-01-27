"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 text-center">
      <h1 className="text-6xl font-extrabold text-brand-black mb-4">500</h1>
      <h2 className="text-3xl font-bold text-brand-black mb-4">Something went wrong</h2>
      <p className="text-brand-black/70 mb-8">
        We&apos;re sorry, but something unexpected happened. Please try again.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={reset}
          className="inline-flex items-center rounded-xl bg-brand-yellow px-5 py-3 font-bold text-black hover:opacity-90 transition-opacity duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-brand-black/15 px-5 py-3 font-bold text-brand-black hover:bg-black/5 transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
