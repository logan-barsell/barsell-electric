import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Leave a review for ${site.name} on Google, Yelp, Nextdoor, Facebook, or Instagram. Your feedback helps us serve the ${site.city} community better.`,
  openGraph: {
    title: `Reviews | ${site.name}`,
    description: `Share your experience with ${site.name}. Leave a review on your preferred platform.`,
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
