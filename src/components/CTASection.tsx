import Image from "next/image";
import { emailHref, phoneHref } from "@/lib/links";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-2xl bg-brand-black p-8 md:p-10 text-white relative overflow-hidden">
        <div className="hidden lg:flex absolute -right-4 -bottom-4 h-48 w-48 rounded-full bg-brand-yellow/30 overflow-hidden items-center justify-center p-4">
          <Image
            src="/brand/logo-mark.jpg"
            alt="Barsell Electric logo mark"
            width={192}
            height={192}
            className="object-cover rounded-full opacity-70"
          />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold">
          Ready to start a project?
        </h3>
        <p className="mt-2 text-white/75">
          Call or email for availability, scheduling, and a straightforward
          estimate.
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
            className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
