'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ROOMS } from '@/lib/rooms';
import BookingModal from '@/components/BookingModal';
import Calendar from '@/components/Calendar';
import { getNights } from '@/lib/bookings';

const perks = [
  'Sustainable Luxury',
  'Private Beach Club',
  'Skyline Dining',
  'Tailored Concierge',
];

const gallery = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80',
];

const experiences = [
  { title: 'Sunrise Yacht', detail: 'Private coastal cruising and aperitivo service.' },
  { title: 'Spa Rituals', detail: 'Massage, hydrotherapy, and wellness journeys.' },
  { title: 'Chef-led Dining', detail: 'Seasonal tasting menus with signature pairings.' },
];

export default function Home() {
  const [book, setBook] = useState<any>(null);
  const [ci, setCi] = useState('');
  const [co, setCo] = useState('');
  const [showCal, setShowCal] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const nights = getNights(ci, co);

  return (
    <main className="min-h-screen bg-[#f7f1eb] text-[#1f1b19]">
      <header className="sticky top-0 z-50 border-b border-[#e8d8c6] bg-[#f7f1eb]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7c0a5] bg-white/60 text-xs font-medium text-[#7f684e]">
              A
            </div>
            <Link href="/" className="serif text-[20px] tracking-[0.2em] text-[#2a211d] md:text-[22px]">
              AURUM AMALFI
            </Link>
          </div>

          <div className="hidden items-center gap-4 text-[9px] uppercase tracking-[0.16em] text-[#4a3d36] lg:flex xl:gap-8 xl:text-[10px] xl:tracking-[0.22em]">
            <Link className="transition hover:text-[#9b7948]" href="/rooms">Rooms</Link>
            <Link className="transition hover:text-[#9b7948]" href="/dining">Dining</Link>
            <Link className="transition hover:text-[#9b7948]" href="/wellness">Wellness</Link>
            <Link className="transition hover:text-[#9b7948]" href="/experiences">Experiences</Link>
            <Link className="transition hover:text-[#9b7948]" href="/about">About</Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-[#d9c5a7] bg-white/60 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#5d4f45] xl:block">
              Forbes 5-star 2025
            </span>
            <button
              onClick={() => setBook(ROOMS[0])}
              className="rounded-full bg-[#1d1a18] px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white shadow-lg shadow-black/10 transition hover:bg-[#2d2a28] md:px-5 md:text-[10px]"
            >
              Reserve
            </button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="home-mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full border border-[#d9c5a7] px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-[#4a3d36] lg:hidden"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div id="home-mobile-menu" className="grid gap-1 border-t border-[#e8d8c6] px-4 py-3 lg:hidden">
            {[
              ['Rooms', '/rooms'],
              ['Dining', '/dining'],
              ['Wellness', '/wellness'],
              ['Experiences', '/experiences'],
              ['About', '/about'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[10px] uppercase tracking-[0.2em] text-[#4a3d36] transition hover:bg-white/70"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-6 md:px-6 md:pt-8">
        <section className="relative overflow-hidden rounded-[30px] border border-[#e8d8c6] bg-[#d9d2c9] shadow-[0_28px_60px_rgba(31,22,18,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury resort coast"
            className="h-[620px] w-full object-cover md:h-[760px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1a19]/60 via-[#1b1a19]/10 to-[#1b1a19]/20" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-5 text-white md:px-10">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#e5c98a]" />
              Private villa retreat
            </div>
            <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm">
              Amalfi Coast
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-10 md:pb-10">
            <div className="mx-auto max-w-[980px] rounded-[28px] border border-white/15 bg-[#efe0ce]/10 p-3 backdrop-blur-md md:p-4">
              <div className="rounded-[22px] bg-[#f5eee7]/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] md:p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-4">
                    <div className="serif text-[40px] leading-none text-[#1f1b19] md:text-[72px]">
                      Coastal Haven
                    </div>
                    <p className="max-w-[570px] text-sm leading-6 text-[#574e49] md:text-base">
                      An enclave of refined seaside living, curated for slow mornings, dramatic sunsets,
                      and unforgettable stays.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-full border border-[#d8c7ad] bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#5d4f45]">
                    Six private suites
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setBook(ROOMS[0])}
                    className="rounded-full bg-[#1b1917] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-white"
                  >
                    Explore Rooms
                  </button>
                  <Link
                    href="/rooms"
                    className="rounded-full border border-[#c7b089] bg-[#f4e7d4] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-[#2b221d]"
                  >
                    View all
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-10 mx-auto max-w-[1120px] rounded-[24px] border border-[#ebdcc9] bg-white/90 p-2 shadow-[0_18px_40px_rgba(43,31,25,0.08)] backdrop-blur-xl md:p-3">
          <div className="grid gap-2 md:grid-cols-[1.3fr_1.3fr_1fr_0.7fr]">
            <div className="rounded-[18px] bg-[#faf6f1] px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#766a62]">Check in</p>
              <button onClick={() => setShowCal(showCal === 'in' ? null : 'in')} className="mt-2 text-left text-base font-medium text-[#1b1a18] md:text-lg">
                {ci || 'Add date'}
              </button>
              {showCal === 'in' && (
                <div className="relative z-30 mt-4">
                  <Calendar
                    value={ci}
                    onSelect={(d: string) => {
                      setCi(d);
                      setShowCal(null);
                    }}
                  />
                </div>
              )}
            </div>

            <div className="rounded-[18px] bg-[#faf6f1] px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#766a62]">Check out</p>
              <button onClick={() => setShowCal(showCal === 'out' ? null : 'out')} className="mt-2 text-left text-base font-medium text-[#1b1a18] md:text-lg">
                {co || 'Add date'}
                {nights > 0 && <span className="ml-2 text-[#7b6d5f]">• {nights}N</span>}
              </button>
              {showCal === 'out' && (
                <div className="relative z-30 mt-4">
                  <Calendar
                    value={co}
                    onSelect={(d: string) => {
                      setCo(d);
                      setShowCal(null);
                    }}
                    minDate={ci}
                  />
                </div>
              )}
            </div>

            <div className="rounded-[18px] bg-[#faf6f1] px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#766a62]">Guests</p>
              <p className="mt-2 text-base font-medium text-[#1b1a18] md:text-lg">2 Guests, 1 Suite</p>
            </div>

            <Link
              href={`/rooms?ci=${ci}&co=${co}`}
              className="flex items-center justify-center rounded-[18px] bg-[#1b1917] px-6 py-4 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white"
            >
              Check availability
            </Link>
          </div>
        </section>

        <section className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-[#eadbc6] py-5">
          {perks.map((item) => (
            <div key={item} className="rounded-full border border-[#e5d0af] bg-white/60 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#574d47]">
              {item}
            </div>
          ))}
        </section>

        <section className="py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#766a62]">The collection</p>
              <h2 className="serif mt-2 text-[32px] text-[#1f1b19] md:text-[52px]">Rooms and suites</h2>
            </div>
            <Link href="/rooms" className="text-[11px] uppercase tracking-[0.24em] text-[#4e413a]">
              View all
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ROOMS.map((room: any) => (
              <article key={room.id} className="overflow-hidden rounded-[24px] border border-[#e8d8c6] bg-white shadow-[0_18px_35px_rgba(42,29,20,0.05)]">
                <img src={room.img} alt={room.name} className="h-[310px] w-full object-cover" />
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="serif text-[22px] text-[#1f1b19]">{room.name}</h3>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#72675f]">{room.size}</p>
                    </div>
                    <span className="text-sm font-medium text-[#4d4038]">${room.price}<span className="text-[10px] text-[#7b6f67]">/night</span></span>
                  </div>
                  <p className="text-sm leading-6 text-[#5d5049]">{room.detail}</p>
                  <button
                    onClick={() => setBook(room)}
                    className="rounded-full bg-[#1d1a18] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-white"
                  >
                    Book now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 pb-20 md:grid-cols-3">
          {experiences.map((item, index) => (
            <div key={item.title} className="rounded-[26px] border border-[#e9d9c7] bg-[#fffaf5] p-6 shadow-[0_16px_30px_rgba(39,30,22,0.04)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1e5d4] text-lg text-[#5d4d3c]">
                {index + 1}
              </div>
              <h3 className="serif text-[24px] text-[#1f1b19]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5d5049]">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="pb-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#766a62]">Gallery</p>
              <h2 className="serif mt-2 text-[32px] text-[#1f1b19] md:text-[48px]">Moments worth lingering for</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, index) => (
              <div key={src} className={index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
                <img
                  src={src}
                  alt="Hotel experience"
                  className={`h-[240px] w-full rounded-[24px] object-cover shadow-[0_14px_30px_rgba(34,26,20,0.08)] ${index === 0 ? 'h-[360px]' : ''}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="mb-8 max-w-[620px]">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#766a62]">Guestbook preview</p>
            <h2 className="serif mt-2 text-[32px] text-[#1f1b19] md:text-[48px]">A stay remembered.</h2>
            <p className="mt-3 text-xs leading-5 text-[#766a62]">
              Sample testimonial copy for this website preview. Replace with verified guest feedback before publishing.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: 'The sea view made even a quiet morning feel unforgettable.',
                stay: 'Sample note · Cliff Suite',
              },
              {
                quote: 'Thoughtful details, beautiful surroundings, and nowhere else we needed to be.',
                stay: 'Sample note · Garden Retreat',
              },
              {
                quote: 'A peaceful escape with the coast right outside our door.',
                stay: 'Sample note · Beach House',
              },
            ].map((review) => (
              <article
                key={review.stay}
                className="rounded-[24px] border border-[#e8d8c6] bg-white p-6 shadow-[0_16px_30px_rgba(34,26,20,0.04)]"
              >
                <div aria-label="Sample five-star rating" className="text-sm tracking-[0.2em] text-[#a98345]">
                  ★★★★★
                </div>
                <blockquote className="serif mt-5 text-[21px] leading-8 text-[#302721]">
                  “{review.quote}”
                </blockquote>
                <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-[#766a62]">
                  {review.stay}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pb-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#766a62]">Good to know</p>
            <h2 className="serif mt-2 text-[32px] text-[#1f1b19] md:text-[44px]">
              Frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-[#e8d8c6] border-y border-[#e8d8c6]">
              {[
                {
                  question: 'Does a reservation request confirm my stay?',
                  answer:
                    'Not yet. This website preview stores a request in your browser only; it is not connected to live availability or the hotel reservation system.',
                },
                {
                  question: 'Will I be charged when I send a request?',
                  answer:
                    'No. This demo does not take payment. The displayed room totals are estimates based on the selected nightly rate and dates.',
                },
                {
                  question: 'Where is Aurum Amalfi?',
                  answer:
                    'The retreat is presented as being on Italy’s Amalfi Coast. The map shows the wider coast; an exact property address and directions should be added before launch.',
                },
                {
                  question: 'How do I choose a suite?',
                  answer:
                    'Browse all six suites to compare the size, setting, and listed nightly price, then start a reservation request for the one you prefer.',
                },
              ].map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[#302721]">
                    {item.question}
                    <span className="text-lg text-[#927647] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-7 text-sm leading-6 text-[#625750]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-[#e8d8c6] bg-white p-3 shadow-[0_16px_30px_rgba(34,26,20,0.05)]">
            <iframe
              title="Map showing the Amalfi Coast in Italy"
              src="https://www.google.com/maps?q=Amalfi%20Coast%2C%20Italy&output=embed"
              className="h-[320px] w-full rounded-[18px] border-0 md:h-[390px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 px-3 py-4">
              <div>
                <p className="serif text-xl">Amalfi Coast, Italy</p>
                <p className="mt-1 text-xs text-[#766a62]">General area map · exact hotel pin not supplied</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Amalfi+Coast%2C+Italy"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d9c5a7] px-5 py-2.5 text-[9px] uppercase tracking-[0.18em] text-[#4a3d36] transition hover:bg-[#f7f1eb]"
              >
                Open map
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20 overflow-hidden rounded-[30px] bg-[#1d1a18] px-6 py-10 text-white shadow-[0_25px_50px_rgba(27,22,18,0.22)] md:px-10 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[540px]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d2ba8d]">Stay in slow luxury</p>
              <h2 className="serif mt-3 text-[36px] md:text-[52px]">Plan your next unforgettable escape</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/rooms" className="rounded-full bg-[#e6c784] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-[#1d1a18]">
                Browse suites
              </Link>
              <button onClick={() => setBook(ROOMS[0])} className="rounded-full border border-white/20 px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-white">
                Reserve now
              </button>
            </div>
          </div>
        </section>
      </div>

      {book && <BookingModal room={book} close={() => setBook(null)} ci={ci} co={co} />}
    </main>
  );
}
