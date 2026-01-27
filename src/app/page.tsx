import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `Home | ${site.name}`,
  },
  description: `Professional electrical services in ${site.city}. ${site.badges.join(", ")} (${site.license}). Specializing in residential service & repair, remodels, and new construction. Contact us for free estimates.`,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: `Professional electrical services in ${site.city}. Licensed, bonded, and insured.`,
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
