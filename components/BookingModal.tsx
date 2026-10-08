'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Calendar from './Calendar';
import { getNights, saveBooking } from '@/lib/bookings';

type Room = {
  id: number;
  name: string;
  price: number;
};

type BookingModalProps = {
  room: Room;
  close: () => void;
  ci?: string;
  co?: string;
  initialCI?: string;
  initialCO?: string;
};

export default function BookingModal({
  room,
  close,
  ci,
  co,
  initialCI,
  initialCO,
}: BookingModalProps) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(ci || initialCI || '');
  const [checkOut, setCheckOut] = useState(co || initialCO || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [calendar, setCalendar] = useState<'in' | 'out' | null>(null);
  const [error, setError] = useState('');
  const nights = getNights(checkIn, checkOut);

  const submitBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (!checkIn || !checkOut || nights <= 0 || !name.trim() || !email.trim()) {
      setError('Please enter valid dates and complete your contact details.');
      return;
    }

    try {
      const booking = saveBooking({
        room: room.name,
        checkIn,
        checkOut,
        nights,
        total: nights * room.price,
        name: name.trim(),
        email: email.trim(),
      });
      router.push(`/booking-confirmation?ref=${encodeURIComponent(booking.reference)}`);
      close();
    } catch {
      setError('We could not save your request in this browser. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl md:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#806d59]">Reservation request</p>
            <h2 id="booking-title" className="serif mt-2 text-[22px]">{room.name}</h2>
          </div>
          <button
            type="button"
            aria-label="Close reservation form"
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5"
          >
            ×
          </button>
        </div>

        <div className="relative mt-6 grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] tracking-widest text-black/50">CHECK IN</label>
            <button
              type="button"
              onClick={() => setCalendar(calendar === 'in' ? null : 'in')}
              className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-left text-sm"
            >
              {checkIn || 'Choose date'}
            </button>
            {calendar === 'in' && (
              <div className="absolute left-0 z-20 mt-3">
                <Calendar
                  value={checkIn}
                  onSelect={(date: string) => {
                    setCheckIn(date);
                    if (checkOut && getNights(date, checkOut) <= 0) setCheckOut('');
                    setCalendar(null);
                  }}
                  minDate={new Date().toISOString().slice(0, 10)}
                />
              </div>
            )}
          </div>
          <div>
            <label className="text-[10px] tracking-widest text-black/50">CHECK OUT</label>
            <button
              type="button"
              onClick={() => setCalendar(calendar === 'out' ? null : 'out')}
              className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-left text-sm"
            >
              {checkOut || 'Choose date'}
            </button>
            {calendar === 'out' && (
              <div className="absolute right-0 z-20 mt-3">
                <Calendar
                  value={checkOut}
                  onSelect={(date: string) => {
                    setCheckOut(date);
                    setCalendar(null);
                  }}
                  minDate={checkIn || new Date().toISOString().slice(0, 10)}
                />
              </div>
            )}
          </div>
        </div>

        <form
          onSubmit={submitBooking}
          className="mt-5 grid gap-3"
        >
          <label className="grid gap-2 text-[10px] uppercase tracking-[0.16em] text-black/55">
            Full name
            <input
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="rounded-full border border-black/10 px-4 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-[#c8ad7a]"
            />
          </label>
          <label className="grid gap-2 text-[10px] uppercase tracking-[0.16em] text-black/55">
            Email address
            <input
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="rounded-full border border-black/10 px-4 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-[#c8ad7a]"
            />
          </label>

          {nights > 0 && (
          <div className="mt-2 flex justify-between rounded-xl bg-[#FBF8F3] p-4 text-[13px]">
            <span>{nights} {nights === 1 ? 'night' : 'nights'} · estimate</span>
            <span>${nights * room.price}</span>
          </div>
          )}
          <p className="mt-1 text-xs leading-5 text-[#766a62]">
          This demo saves a request on this device only. No payment is taken and no email is sent.
          </p>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          <button
          type="submit"
          disabled={!checkIn || !checkOut || nights <= 0}
          className="mt-2 w-full rounded-full bg-black py-4 text-[11px] tracking-widest text-white transition hover:bg-[#493d34] disabled:cursor-not-allowed disabled:bg-black/15"
          >
          SEND RESERVATION REQUEST
          </button>
        </form>
      </div>
    </div>
  );
}
