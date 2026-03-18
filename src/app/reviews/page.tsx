'use client';

import { site } from '@/content/site';
import { FaGoogle, FaYelp, FaFacebook } from 'react-icons/fa';
import { SiNextdoor } from 'react-icons/si';
// import { FaInstagram } from "react-icons/fa"; // Commented out for now

const platforms = [
  {
    name: 'Google',
    href: 'https://search.google.com/local/writereview?placeid=ChIJXzigSoSLj4ARPshIDhPjXEA',
    icon: FaGoogle,
  },
  {
    name: 'Yelp',
    href: 'https://yelp.to/FRxDc8wNSz',
    icon: FaYelp,
  },
  {
    name: 'Nextdoor',
    href: 'https://nextdoor.com/page/barsell-electrical-services-alamo-ca?share_platform=10&utm_campaign=1769199161824&share_action_id=eee1c731-64a4-4a1e-8ae5-f2dbcfda7759',
    icon: SiNextdoor,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61581985075035&mibextid=wwXIfr',
    icon: FaFacebook,
  },
  // {
  //   name: "Instagram",
  //   href: site.social.instagram || "#",
  //   icon: FaInstagram,
  // },
];

export default function ReviewsPage() {
  // Detect touch capability - most reliable method
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-expect-error - msMaxTouchPoints is IE-specific
      navigator.msMaxTouchPoints > 0);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-brand-black text-4xl font-extrabold">Leave a Review</h1>

      <p className="text-brand-black/80 mt-4 leading-relaxed">
        Thank you for choosing <span className="font-bold">{site.name}</span>! It was an honor
        serving your electrical needs. Your feedback is valuable - please consider leaving a review
        on any of the following platforms.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {platforms.map((p) => {
          const IconComponent = p.icon;
          let iconSize = 'w-8 h-8'; // Default
          if (p.name === 'Nextdoor') iconSize = 'w-14 h-14';
          else if (p.name === 'Google') iconSize = 'w-6 h-6';
          else if (p.name === 'Yelp') iconSize = 'w-10 h-10';
          else if (p.name === 'Facebook') iconSize = 'w-8 h-8';
          return (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="border-brand-black/10 flex items-center gap-4 rounded-2xl border p-6 transition-colors duration-200 hover:bg-black/5"
            >
              <div className="flex-shrink-0">
                <IconComponent className={`${iconSize} text-brand-yellow`} />
              </div>
              <div>
                <p className="text-brand-black font-bold">{p.name}</p>
                <p className="text-brand-black/65 mt-1 text-sm">
                  {isTouchDevice ? 'Tap to leave a review' : 'Click to leave a review'}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
