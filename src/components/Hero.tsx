import { emailHref, phoneHref } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-black">
            Serving the communities of the East Bay Area
          </h1>

          <p className="mt-6 font-accent tracking-widest uppercase text-sm text-brand-black/70">
            New Project Inquiries
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={phoneHref()}
              className="inline-flex items-center rounded-xl bg-brand-yellow px-5 py-3 font-bold text-black hover:opacity-90"
            >
              Call or Text
            </a>
            <a
              href={emailHref("New Project Inquiry")}
              className="inline-flex items-center rounded-xl border border-brand-black/15 px-5 py-3 font-bold text-brand-black hover:bg-black/5"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-brand-black shadow-soft overflow-hidden">
            <div className="p-6">
              <p className="text-brand-yellow font-accent tracking-widest uppercase text-xs">
                Barsell Electrical Services
              </p>
              <p className="mt-2 text-white text-2xl font-extrabold">
                Clean work. Clear communication. No surprises.
              </p>
            </div>

            <div className="bg-brand-yellow h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
