// import Image from "next/image";
import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barsellelectrical.com";

const ogTitle = `Services | ${site.name}`;
const ogDescription = `Professional electrical services including ADUs, remodels, EV chargers, panel upgrades, and more in ${site.city}.`;
const ogImage = `${baseUrl}/barsell-electrical-og.png`;

const serviceDescriptions: Record<string, string> = {
  ADUs: "Accessory dwelling unit electrical installation and upgrades for your property.",
  Cabanas:
    "Complete electrical installation for outdoor cabanas and pool houses.",
  "Kitchen Remodels":
    "Full electrical service for kitchen renovations including new circuits, outlets, and lighting.",
  "Bathroom Remodels":
    "Comprehensive electrical work for bathroom upgrades and renovations.",
  "EV Charger Installation":
    "Professional EV charging station installation for home and commercial use.",
  "Recessed Lighting Upgrades":
    "Modern recessed lighting installation to brighten and update your space.",
  "Bathroom Fan Replacement":
    "Efficient bathroom exhaust fan installation and replacement services.",
  "Sub-panel and Main Service Panel Upgrades":
    "Electrical panel upgrades to meet modern power demands safely.",
  "Lighting Fixture Installation":
    "Expert installation of new lighting fixtures throughout your home.",
  "Under Cabinet Lighting":
    "Under cabinet lighting installation for kitchens and workspaces.",
  "New Switching and Outlet Installation":
    "New switches and outlets installed to code with clean finishes.",
};

// const serviceImages: Record<string, string> = {
//   "ADUs": "/services/adus.PNG",
//   "Cabanas": "/services/cabanas.PNG",
//   "Kitchen Remodels": "/services/kitchenremodels.PNG",
//   "Bathroom Remodels": "/services/bathroomremodels.PNG",
//   "EV Charger Installation": "/services/evchargers.PNG",
//   "Recessed Lighting Upgrades": "/services/recessedlighting.PNG",
//   "Bathroom Fan Replacement": "/services/bathroomfans.PNG",
//   "Sub-panel and Main Service Panel Upgrades": "/services/panelupgrades.PNG",
//   "Lighting Fixture Installation": "/services/lightingfixtures.PNG",
//   "Under Cabinet Lighting": "/services/undercabinetlighting.PNG",
//   "New Switching and Outlet Installation": "/services/switchingoutlets.PNG",
// };

export const metadata: Metadata = {
  title: "Services",
  description: `Specializing in residential service & repair, remodels, and new construction. ${services.specialties.slice(0, 5).join(", ")} and more. Licensed, bonded, and insured electrical services in ${site.city}.`,
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

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-4xl font-extrabold text-brand-black">Services</h1>
      <p className="mt-3 text-brand-black/70 max-w-2xl">
        Residential service and repair, remodels, and new construction. If you
        don’t see your project listed, reach out - we can point you in the right
        direction.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {services.specialties.map((s) => (
          <div
            key={s}
            className="rounded-2xl border border-brand-black/10 overflow-hidden"
          >
            <div className="bg-brand-yellow h-6" />
            {/* <div className="relative h-48 bg-brand-black/5">
              <Image
                src={serviceImages[s] || "/services/adus.PNG"}
                alt={s}
                fill
                className="object-cover"
              />
            </div> */}
            <div className="p-6">
              <p className="font-bold text-brand-black">{s}</p>
              <p className="mt-2 text-sm text-brand-black/65">
                {serviceDescriptions[s] ||
                  "Installed to code with careful attention to safety, function, and a clean finish."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
