'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getBookings, type BookingRequest } from '@/lib/bookings';

export default function BookingConfirmationPage() {
  const [booking, setBooking] = useState<BookingRequest | null>(null);
  const [message, setMessage] = useState('Loading your reservation request…');

  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get('ref');
    if (!reference) {
      setMessage('No reservation reference was provided.');
      return;
    }

    try {
      const savedBooking = getBookings().find((item) => item.reference === reference);
      if (!savedBooking) {
        setMessage('This request is not saved in this browser. Please start a new reservation.');
        return;
      }
      setBooking(savedBooking);
      setMessage('');
    } catch {
      setMessage('We could not read the saved request from this browser.');
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f1eb] text-[#1f1b19]">
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-[760px] items-center px-5 py-28">
        <section className="w-full rounded-[28px] border border-[#e8d8c6] bg-white p-7 shadow-[0_24px_60px_rgba(42,29,20,0.08)] md:p-12">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2e8d8] text-2xl text-[#806d48]">
            {booking ? '✓' : 'A'}
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#806d48]">Aurum Amalfi</p>
          <h1 className="serif mt-3 text-4xl md:text-5xl">
            {booking ? 'Request received.' : 'Reservation request'}
          </h1>

          {booking ? (
            <>
              <p className="mt-5 text-sm leading-7 text-[#625750]">
                Your request has been saved in this browser. This demo does not check live
                availability, send an email, or confirm a hotel reservation.
              </p>
              <dl className="mt-8 grid gap-4 rounded-2xl bg-[#faf6f1] p-5 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#766a62]">Reference</dt>
                  <dd className="mt-1 font-medium">{booking.reference}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#766a62]">Suite</dt>
                  <dd className="mt-1 font-medium">{booking.room}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#766a62]">Check in</dt>
                  <dd className="mt-1 font-medium">{booking.checkIn}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#766a62]">Check out</dt>
                  <dd className="mt-1 font-medium">{booking.checkOut}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#766a62]">Guest</dt>
                  <dd className="mt-1 font-medium">{booking.name}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#766a62]">Estimated total</dt>
                  <dd className="mt-1 font-medium">${booking.total} · {booking.nights} nights</dd>
                </div>
              </dl>
            </>
          ) : (
            <p role="status" className="mt-5 text-sm leading-7 text-[#625750]">{message}</p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/rooms"
              className="rounded-full bg-[#1d1a18] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#493d34]"
            >
              Browse suites
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[#d9c5a7] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#4a3d36]"
            >
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
