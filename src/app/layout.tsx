import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat, Rajdhani } from "next/font/google";
import { site } from "@/content/site";
import type { Metadata } from "next";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fontAccent = Rajdhani({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "500", "600", "700"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: `Professional electrical services in ${site.city}. ${site.tagline}. ${site.badges.join(", ")}. Specializing in residential service & repair, remodels, and new construction.`,
  keywords: [
    "electrician",
    "electrical services",
    "Alamo CA",
    "East Bay electrician",
    "residential electrical",
    "electrical repair",
    "electrical remodels",
    "EV charger installation",
    "panel upgrades",
    "lighting installation",
    site.city,
    "California licensed electrician",
  ],
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: `Professional electrical services in ${site.city}. ${site.badges.join(", ")}. Licensed, bonded, and insured.`,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body
        className={`${fontSans.variable} ${fontAccent.variable} font-sans bg-white text-brand-ink`}
      >
        <Header />
        <main className="min-h-[70vh] relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
