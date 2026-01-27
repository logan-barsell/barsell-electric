import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for electrical services in ${site.city}. Call ${site.phoneDisplay}, email ${site.email}, or text us. Free estimates available.`,
  openGraph: {
    title: `Contact | ${site.name}`,
    description: `Get in touch with ${site.name} for your electrical service needs. Free estimates available.`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
