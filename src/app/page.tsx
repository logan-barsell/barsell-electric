import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import { site } from "@/content/site";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

export const metadata: Metadata = {
  title: {
    absolute: `Home | ${site.name}`,
  },
  description: `Professional electrical services in ${site.city}. ${site.badges.join(", ")} (${site.license}). Specializing in residential service & repair, remodels, and new construction. Contact us for free estimates.`,
  openGraph: {
    title: `Home | ${site.name}`,
    description: `Professional electrical services in ${site.city}. Licensed, bonded, and insured.`,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home | ${site.name}`,
    description: `Professional electrical services in ${site.city}. Licensed, bonded, and insured.`,
    images: [`${baseUrl}/og-image.png`],
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
