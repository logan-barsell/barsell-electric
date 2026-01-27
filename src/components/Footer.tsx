"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { emailHref, phoneHref } from "@/lib/links";
import { FaGoogle, FaYelp, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="border-t border-brand-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-extrabold text-brand-black">{site.name}</p>
          <p className="mt-2 text-sm text-brand-black/70">{site.tagline}</p>
          <p className="mt-3 text-sm text-brand-black/70">
            {site.city} • {site.license}
          </p>
        </div>

        <div>
          <p className="font-bold text-brand-black">Contact</p>
          <div className="mt-3 space-y-2 text-sm">
            <a className="block hover:underline" href={phoneHref()}>
              {site.phoneDisplay}
            </a>
            <a
              className="block hover:underline"
              href={emailHref("New Project Inquiry")}
            >
              {site.email}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://g.page/r/CT7ISA4T41xAEBI/review"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black hover:text-brand-yellow transition-colors duration-200"
              aria-label="Google"
            >
              <FaGoogle className="w-5 h-5" />
            </a>
            <a
              href="https://nextdoor.com/page/barsell-electrical-services-alamo-ca?share_platform=10&utm_campaign=1769199161824&share_action_id=eee1c731-64a4-4a1e-8ae5-f2dbcfda7759"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black hover:text-brand-yellow transition-colors duration-200"
              aria-label="Nextdoor"
            >
              <SiNextdoor className="w-5 h-5" />
            </a>
            <a
              href="https://yelp.to/FRxDc8wNSz"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black hover:text-brand-yellow transition-colors duration-200"
              aria-label="Yelp"
            >
              <FaYelp className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581985075035&mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black hover:text-brand-yellow transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/barsell.electrical.services?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black hover:text-brand-yellow transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-brand-black">Pages</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                pathname === "/"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              } hover:underline`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-200 ${
                pathname === "/services"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              } hover:underline`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-200 ${
                pathname === "/about"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              } hover:underline`}
            >
              About
            </Link>
            <Link
              href="/reviews"
              className={`transition-colors duration-200 ${
                pathname === "/reviews"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              } hover:underline`}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                pathname === "/contact"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              } hover:underline`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-black/10 relative overflow-hidden bg-brand-yellow">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-brand-black flex flex-wrap items-center justify-between gap-3 relative z-10">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5 flex-wrap">
            {/* Licensed - Document/Certificate icon */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              CA Licensed
            </span>
            <span>•</span>
            {/* Bonded - Lock icon */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Bonded
            </span>
            <span>•</span>
            {/* Insured - Shield icon */}
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              Insured
            </span>
          </span>
        </div>

        {/* Curved top edge overlay */}
        <svg
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ height: "64px" }}
          viewBox="0 0 1200 64"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64 L0 50 Q300 48 600 50 Q900 52 1200 54 L1200 64 Z"
            fill="#F3CA46"
          />
        </svg>
      </div>
    </footer>
  );
}
