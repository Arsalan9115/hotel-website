'use client'
import { useState } from 'react'
import { ROOMS } from '@/lib/rooms'
import RoomCard from './RoomCard'
import BookingModal from './BookingModal'
export default function Rooms(){
  const [sel,setSel]=useState<any>(null)
  return(
    <section className="px-6 md:px-16 py-20 bg-[#080808]">
      <h3 className="text-center text-[#E2CFC0] tracking-widest text-3xl font-serif">ROOMS AND SUITES</h3>
      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">
        {ROOMS.map((r:any)=><RoomCard key={r.id} room={r} onBook={setSel}/>)}
      </div>
      {sel && <BookingModal room={sel} close={()=>setSel(null)}/>}
    </section>
  )
}
