import { site } from "@/content/site";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

const ogTitle = `Reviews | ${site.name}`;
const ogDescription = `Share your experience with ${site.name}. Leave a review on your preferred platform.`;
const ogImage = `${baseUrl}/barsell-electrical-og.png`;

export const metadata: Metadata = {
  title: {
    absolute: ogTitle,
  },
  description: `Leave a review for ${site.name} on Google, Yelp, Nextdoor, Facebook, or Instagram. Your feedback helps us serve the ${site.city} community better.`,
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

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
