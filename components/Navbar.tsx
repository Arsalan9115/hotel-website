'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Stays', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Wellness', href: '/wellness' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070707]/90 px-6 backdrop-blur-xl md:px-10">
      <div className="flex h-[64px] items-center justify-between">
        <Link href="/" className="serif text-[16px] font-semibold tracking-[0.22em] text-white md:text-[18px]">
          AURUM AMALFI
        </Link>
        <div className="hidden items-center gap-3 text-[8px] uppercase tracking-[0.16em] text-white/65 md:flex lg:gap-5 lg:text-[9px] lg:tracking-[0.22em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`border-b py-2 transition hover:text-white ${
                pathname === link.href
                  ? 'border-[#d2b780] text-white'
                  : 'border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rooms"
            className="rounded-full bg-white px-4 py-2 text-black transition hover:bg-[#d2b780] lg:px-6 lg:py-2.5"
          >
            Book now
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <Link
            href="/rooms"
            className="rounded-full bg-white px-4 py-2 text-[9px] uppercase tracking-[0.18em] text-black"
          >
            Book
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-2 rounded-full border border-white/25 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div id="mobile-site-menu" className="grid gap-1 border-t border-white/10 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-3 text-[10px] uppercase tracking-[0.2em] transition ${
                pathname === link.href
                  ? 'bg-white/10 text-[#d2b780]'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}