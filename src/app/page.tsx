import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import { site } from "@/content/site";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

const ogTitle = `${site.name} - Home`;
const ogDescription = `Professional electrical services in ${site.city}. Licensed, bonded, and insured.`;
const ogImage = `${baseUrl}/barsell-electrical-og.png`;

export const metadata: Metadata = {
  title: {
    absolute: ogTitle,
  },
  description: `Professional electrical services in ${site.city}. ${site.badges.join(", ")} (${site.license}). Specializing in residential service & repair, remodels, and new construction. Contact us for free estimates.`,
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: site.name,
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceGrid />
      <CTASection />
    </>
  );
}
