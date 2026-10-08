'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBookings, type BookingRequest } from '@/lib/bookings';

export default function Admin() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setBookings(getBookings());
    } catch {
      setError('Saved booking requests could not be read from this browser.');
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] px-5 py-10 pt-24 text-[#E2CFC0] md:px-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86A]">Local preview only</p>
      <h1 className="mt-3 text-3xl tracking-widest text-[#C9A86A]">
        RESERVATION REQUESTS · {bookings.length}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
        These requests are saved only in this browser. This preview dashboard has no authentication
        and is not a production booking-management system.
      </p>

      {error && <p role="alert" className="mt-8 text-sm text-red-300">{error}</p>}
      {!error && bookings.length === 0 && <p className="mt-8">No saved requests in this browser.</p>}
      <div className="mt-8 grid gap-4">
        {bookings.map((booking) => (
          <article
            key={booking.reference}
            className="grid gap-3 rounded-xl border border-[#C9A86A]/20 bg-[#111] p-5 text-sm sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Guest</p>
              <p className="mt-1">{booking.name}</p>
              <p className="text-white/55">{booking.email}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Suite</p>
              <p className="mt-1">{booking.room}</p>
              <p className="text-white/55">{booking.reference}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Dates</p>
              <p className="mt-1">{booking.checkIn} — {booking.checkOut}</p>
              <p className="text-white/55">{booking.nights} nights</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">Estimate</p>
              <p className="mt-1 text-[#C9A86A]">${booking.total}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 inline-block rounded-full border border-[#C9A86A] px-6 py-3 text-[10px] uppercase tracking-[0.18em]"
      >
        Back to home
      </Link>
    </main>
  );
}
