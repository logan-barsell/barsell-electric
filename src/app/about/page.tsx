import { site } from "@/content/site";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

const ogTitle = `About | ${site.name}`;
const ogDescription = `Learn about ${site.name} - ${site.tagline}. Licensed, bonded, and insured electrical services.`;
const ogImage = `${baseUrl}/barsell-electrical-og.png`;

export const metadata: Metadata = {
  title: {
    absolute: ogTitle,
  },
  description: `Meet ${site.owner}, owner/operator of ${site.name}. ${site.tagline}. California state licensed (${site.license}), bonded, and insured electrician serving ${site.city}.`,
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [ogImage],
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-4xl font-extrabold text-brand-black">About</h1>

      <div className="mt-6 rounded-2xl border border-brand-black/10 p-6">
        <p className="text-brand-black/80 leading-relaxed">
          My name is {site.owner}, owner/operator of {site.name}. I believe in
          doing business with integrity and having a mindset of serving the
          community. I value performing quality work that creates satisfied
          clients. I am California state licensed, bonded, and insured, so that
          you know you have a qualified electrician you can depend on.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-brand-yellow px-3 py-1 font-bold text-black">
            {site.license}
          </span>
          {site.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-brand-black/10 px-3 py-1 font-bold"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl border border-brand-black/15 px-5 py-3 font-bold text-brand-black hover:bg-black/5 transition-colors duration-200"
          >
            License Verification
          </a>
        </div>
      </div>
    </section>
  );
}
