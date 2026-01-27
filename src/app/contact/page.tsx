"use client";

import { site } from "@/content/site";
import { emailHref, phoneHref, smsHref, messageHref } from "@/lib/links";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdSms } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaGoogle, FaYelp, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";

export default function ContactPage() {
  // Detect touch capability - most reliable method
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-expect-error - msMaxTouchPoints is IE-specific
      navigator.msMaxTouchPoints > 0);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-4xl font-extrabold text-brand-black">Contact</h1>
      <p className="mt-3 text-brand-black/70 max-w-2xl">
        Get in touch with {site.name} for your electrical service needs. We&apos;re
        here to help with estimates, questions, and scheduling.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Phone */}
        <a
          href={phoneHref()}
          className="rounded-2xl border border-brand-black/10 p-6 hover:bg-black/5 transition-colors duration-200 flex items-center gap-4"
        >
          <div className="flex-shrink-0">
            <BiSolidPhoneCall className="w-10 h-10 text-brand-yellow" />
          </div>
          <div>
            <p className="font-bold text-brand-black">Phone</p>
            <p className="mt-2 text-sm text-brand-black/65">
              {site.phoneDisplay}
            </p>
            <p className="mt-1 text-xs text-brand-black/50">
              {isTouchDevice ? "Tap to call" : "Click to call"}
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href={emailHref("New Project Inquiry")}
          className="rounded-2xl border border-brand-black/10 p-6 hover:bg-black/5 transition-colors duration-200 flex items-center gap-4"
        >
          <div className="flex-shrink-0">
            <MdEmail className="w-10 h-10 text-brand-yellow" />
          </div>
          <div>
            <p className="font-bold text-brand-black">Email</p>
            <p className="mt-2 text-sm text-brand-black/65 break-all">
              {site.email}
            </p>
            <p className="mt-1 text-xs text-brand-black/50">
              {isTouchDevice ? "Tap to email" : "Click to email"}
            </p>
          </div>
        </a>

        {/* Text */}
        <a
          href={smsHref()}
          className="rounded-2xl border border-brand-black/10 p-6 hover:bg-black/5 transition-colors duration-200 flex items-center gap-4"
        >
          <div className="flex-shrink-0">
            <MdSms className="w-10 h-10 text-brand-yellow" />
          </div>
          <div>
            <p className="font-bold text-brand-black">Text</p>
            <p className="mt-2 text-sm text-brand-black/65">
              {site.phoneDisplay}
            </p>
            <p className="mt-1 text-xs text-brand-black/50">
              {isTouchDevice ? "Tap to text" : "Click to text"}
            </p>
          </div>
        </a>

        {/* Location */}
        <div className="rounded-2xl border border-brand-black/10 p-6 flex items-center gap-4">
          <div className="flex-shrink-0">
            <FaMapLocationDot className="w-10 h-10 text-brand-yellow" />
          </div>
          <div>
            <p className="font-bold text-brand-black">Service Area</p>
            <p className="mt-2 text-sm text-brand-black/65">{site.city}</p>
            <p className="mt-1 text-xs text-brand-black/50">{site.tagline}</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex items-center justify-center gap-6 py-10 px-6">
        <a
          href="https://g.page/r/CT7ISA4T41xAEBI/review"
          target="_blank"
          rel="noreferrer"
          className="text-brand-yellow hover:opacity-90 transition-opacity duration-200"
          aria-label="Google"
        >
          <FaGoogle className="w-10 h-10" />
        </a>
        <a
          href="https://nextdoor.com/page/barsell-electrical-services-alamo-ca?share_platform=10&utm_campaign=1769199161824&share_action_id=eee1c731-64a4-4a1e-8ae5-f2dbcfda7759"
          target="_blank"
          rel="noreferrer"
          className="text-brand-yellow hover:opacity-90 transition-opacity duration-200"
          aria-label="Nextdoor"
        >
          <SiNextdoor className="w-10 h-10" />
        </a>
        <a
          href="https://yelp.to/FRxDc8wNSz"
          target="_blank"
          rel="noreferrer"
          className="text-brand-yellow hover:opacity-90 transition-opacity duration-200"
          aria-label="Yelp"
        >
          <FaYelp className="w-10 h-10" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61581985075035&mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          className="text-brand-yellow hover:opacity-90 transition-opacity duration-200"
          aria-label="Facebook"
        >
          <FaFacebook className="w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com/barsell.electrical.services?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          className="text-brand-yellow hover:opacity-90 transition-opacity duration-200"
          aria-label="Instagram"
        >
          <FaInstagram className="w-10 h-10" />
        </a>
      </div>

      {/* Quick Action CTA */}
      <div className="mt-8 rounded-2xl bg-brand-black p-8 text-white">
        <h2 className="text-2xl font-extrabold">Ready to Get Started?</h2>
        <p className="mt-2 text-white/75">
          Contact us today for a free estimate on your electrical project.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={phoneHref()}
            className="inline-flex items-center rounded-xl bg-brand-yellow px-5 py-3 font-bold text-black hover:opacity-90 transition-opacity duration-200"
          >
            Call Now
          </a>
          <a
            href={messageHref()}
            className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 font-bold hover:bg-white/10 transition-colors duration-200"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}
