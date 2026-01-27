import { site } from "@/content/site";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

const ogTitle = `${site.name} | Contact`;
const ogDescription = `Get in touch with ${site.name} for your electrical service needs. Free estimates available.`;
const ogImage = `${baseUrl}/barsell-electrical-og.png`;

export const metadata: Metadata = {
  title: {
    absolute: ogTitle,
  },
  description: `Contact ${site.name} for electrical services in ${site.city}. Call ${site.phoneDisplay}, email ${site.email}, or text us. Free estimates available.`,
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
