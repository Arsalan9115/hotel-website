'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function BookingBar(){
  const [checkIn,setCheckIn]=useState('')
  const [guests,setGuests]=useState(2)
  const r=useRouter()
  return(
    <div className="bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-black/5 p-2 flex items-center gap-2 max-w-[720px] mx-auto -mt-8 relative z-10">
      <div className="flex-1 px-6 py-2"><p className="text-[10px] tracking-widest opacity-40">CHECK-IN</p><input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} className="w-full text-sm outline-none bg-transparent"/></div>
      <div className="w-[1px] h-10 bg-black/10"></div>
      <div className="flex-1 px-6 py-2"><p className="text-[10px] tracking-widest opacity-40">GUESTS</p><select value={guests} onChange={e=>setGuests(Number(e.target.value))} className="w-full text-sm outline-none bg-transparent"><option value={1}>1 Guest</option><option value={2}>2 Guests</option><option value={3}>3 Guests</option><option value={4}>4 Guests</option></select></div>
      <button onClick={()=>r.push('/rooms')} className="bg-black text-white px-8 py-3.5 rounded-full text-xs tracking-widest">SEARCH</button>
    </div>
  )
}
