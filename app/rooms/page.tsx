'use client';

import { useEffect, useState } from 'react';
import BookingModal from '@/components/BookingModal';
import Navbar from '@/components/Navbar';
import { ROOMS } from '@/lib/rooms';

export default function Rooms() {
  const [bookingRoom, setBookingRoom] = useState<(typeof ROOMS)[number] | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCheckIn(params.get('ci') || '');
    setCheckOut(params.get('co') || '');
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f1eb] text-[#1f1b19]">
      <Navbar />
      <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-28 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#766a62]">Stay at Aurum Amalfi</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="serif text-4xl md:text-6xl">Suites with a view.</h1>
            <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#625750]">
              Six private spaces, each with its own perspective on the coast. Choose the stay that
              feels like yours.
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#766a62]">6 unique suites</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="overflow-hidden rounded-[22px] border border-[#e8d8c6] bg-white shadow-[0_18px_35px_rgba(42,29,20,0.05)]"
            >
              <img src={room.img} alt={room.name} className="h-[280px] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="serif text-xl">{room.name}</h2>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#766a62]">
                      {room.size}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-sm font-medium">
                    ${room.price}
                    <span className="text-[10px] text-[#766a62]"> / night</span>
                  </p>
                </div>
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#625750]">{room.detail}</p>
                <button
                  onClick={() => setBookingRoom(room)}
                  className="mt-4 rounded-full bg-[#1d1a18] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#493d34]"
                >
                  Book this suite
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {bookingRoom && (
        <BookingModal
          room={bookingRoom}
          close={() => setBookingRoom(null)}
          ci={checkIn}
          co={checkOut}
        />
      )}
    </main>
  );
}
