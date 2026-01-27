"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { phoneHref } from "@/lib/links";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(73);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMobileMenuOpen(false), 300);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMobileMenuOpen(false), 300);
  };

  // Get header height for backdrop positioning
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsAnimating(false);
        setTimeout(() => setIsMobileMenuOpen(false), 300);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Backdrop with blur - MUST be outside header to blur content */}
      {isMobileMenuOpen && isAnimating && (
        <div
          style={{ 
            position: "fixed",
            top: `${headerHeight}px`,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: `calc(100vh - ${headerHeight}px)`,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 35,
            opacity: 1,
            transition: "opacity 500ms ease-out",
            pointerEvents: "auto"
          }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <header 
        ref={headerRef}
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-brand-black/10"
        style={{ isolation: "isolate", position: "relative" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-end justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMobileMenu}
          >
            <Image
              src="/brand/logo-full.jpg"
              alt={`${site.name} logo`}
              width={220}
              height={64}
              priority
              className="rounded-xl w-32 h-auto sm:w-40 md:w-[220px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold px-2 py-4">
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                pathname === "/"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-200 ${
                pathname === "/services"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-200 ${
                pathname === "/about"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              }`}
            >
              About
            </Link>
            <Link
              href="/reviews"
              className={`transition-colors duration-200 ${
                pathname === "/reviews"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              }`}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                pathname === "/contact"
                  ? "text-brand-yellow"
                  : "text-brand-black hover:text-brand-yellow"
              }`}
            >
              Contact
            </Link>

            <a
              href={phoneHref()}
              className="ml-2 inline-flex items-center rounded-xl bg-brand-yellow px-4 py-2 font-bold text-black hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={buttonRef}
            onClick={toggleMobileMenu}
            className="md:hidden relative px-2 py-4 -mr-2 z-50 cursor-pointer"
            style={{ isolation: "isolate" }}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6" style={{ filter: "none", backdropFilter: "none" }}>
              <span
                className={`absolute top-1/2 left-0 w-6 h-0.5 bg-brand-black transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isAnimating ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
                style={{ filter: "none", opacity: 1 }}
              />
              <span
                className={`absolute top-1/2 left-0 w-6 h-0.5 bg-brand-black transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                style={{ filter: "none" }}
              />
              <span
                className={`absolute top-1/2 left-0 w-6 h-0.5 bg-brand-black transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isAnimating ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
                style={{ filter: "none", opacity: 1 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={menuRef} className="md:hidden">
            {/* Menu Panel */}
            <nav
              className={`absolute top-full left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-brand-black/10 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                isAnimating ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mx-auto max-w-6xl px-4 py-6">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-3.5 px-4 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-brand-black/5 hover:translate-x-1 ${
                        pathname === item.href
                          ? "text-brand-yellow bg-brand-yellow/10"
                          : "text-brand-black"
                      } ${
                        isAnimating
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        transitionDelay: isAnimating
                          ? `${index * 50 + 100}ms`
                          : `${(menuItems.length - index) * 30}ms`,
                      }}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <a
                  href={phoneHref()}
                  className={`block mt-6 py-4 px-5 text-center rounded-xl bg-brand-yellow font-bold text-black hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    isAnimating
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-4 scale-95"
                  }`}
                  style={{
                    transitionDelay: isAnimating
                      ? `${menuItems.length * 50 + 150}ms`
                      : "0ms",
                  }}
                  onClick={closeMobileMenu}
                >
                  Call Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
