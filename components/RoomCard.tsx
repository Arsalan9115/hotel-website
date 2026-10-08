'use client';

import { useEffect, useState } from 'react';
import { getOccupancy } from '@/lib/availability';

type RoomCardProps = {
  room: {
    id: number;
    img: string;
    tag: string;
    name: string;
    desc: string;
    price: number;
  };
  onBook: (room: RoomCardProps['room']) => void;
};

export default function RoomCard({ room, onBook }: RoomCardProps) {
  const [o, setO] = useState({ booked: 0, free: 10, percent: 0 });

  useEffect(() => {
    setO(getOccupancy(room.id));
  }, [room.id]);

  return (
    <div className="overflow-hidden rounded-[16px] border border-white/10 bg-[#141414]">
      <div className="relative">
        <img src={room.img} className="h-[260px] w-full object-cover" alt={room.name} />
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[9px] text-white/80">
          {room.tag}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[#C5A880] px-3 py-1 text-[9px] font-bold text-black">
          {o.free} FREE
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="serif text-[13px] text-white">{room.name}</h3>
            <p className="mt-1 text-[10px] text-white/40">{room.desc}</p>
          </div>
          <div className="text-right">
            <p className="serif text-[13px] text-[#C5A880]">{room.price} USD</p>
            <p className="text-[9px] text-white/30">{o.booked} Booked</p>
          </div>
        </div>

        <div className="mt-4 h-[2px] bg-white/10">
          <div className="h-full bg-[#C5A880]" style={{ width: `${o.percent * 10}%` }}></div>
        </div>

        <button onClick={() => onBook(room)} className="mt-4 w-full rounded-full bg-[#C5A880] py-2.5 text-[11px] font-semibold text-black">
          BOOK
        </button>
      </div>
    </div>
  );
}