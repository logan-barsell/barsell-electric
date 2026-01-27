// import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";

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

export default function ServiceGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-brand-black">Services</h2>
          <p className="mt-2 text-brand-black/70">
            Specializing in residential service & repair, remodels, and new
            construction.
          </p>
        </div>
        <Link
          href="/services"
          className="hidden md:inline-flex rounded-xl border border-brand-black/15 px-4 py-2 font-bold hover:bg-black/5"
        >
          View all
        </Link>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.specialties.slice(0, 9).map((s) => (
          <div
            key={s}
            className="rounded-2xl border border-brand-black/10 overflow-hidden"
          >
            <div className="bg-brand-yellow h-3" />
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
                  "Quality installation and clean finishes—built to code and built to last."}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link
          href="/services"
          className="inline-flex rounded-xl border border-brand-black/15 px-4 py-2 font-bold hover:bg-black/5"
        >
          View all services
        </Link>
      </div>
    </section>
  );
}
