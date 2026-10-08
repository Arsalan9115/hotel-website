'use client'
import {useState} from 'react';
export default function Calendar({value,onSelect,minDate}:{value:string,onSelect:any,minDate?:string}){
 const [cur,setCur]=useState(new Date()); const y=cur.getFullYear(), m=cur.getMonth();
 const first=new Date(y,m,1), last=new Date(y,m+1,0); const days=[]; for(let i=0;i<first.getDay();i++) days.push(null); for(let d=1; d<=last.getDate(); d++) days.push(new Date(y,m,d));
 const toStr=(d:Date)=>d.toISOString().split('T')[0];
 return(<div className="bg-white border border-[#EADDCB] rounded-xl p-3 w-[300px] shadow-xl">
 <div className="flex justify-between mb-3"><button onClick={()=>setCur(new Date(y,m-1,1))}>‹</button><p className="text-[13px] font-medium">{cur.toLocaleString('en',{month:'long',year:'numeric'})}</p><button onClick={()=>setCur(new Date(y,m+1,1))}>›</button></div>
 <div className="grid grid-cols-7 gap-1">{days.map((d:any,i)=>{ if(!d) return <div key={i}/>; const s=toStr(d); const past=minDate && s<minDate; const sel=value===s; return <button key={i} disabled={!!past} onClick={()=>onSelect(s)} className={`h-8 rounded-full text-[12px] ${sel?'calendar-day selected':''} ${past?'opacity-20':''} hover:bg-[#F5E9D8]`}>{d.getDate()}</button>})}</div>
 </div>)
}