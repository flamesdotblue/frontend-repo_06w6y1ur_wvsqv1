import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Item = ({ time, title, info }) => (
  <div className="relative rounded-xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_#000]">
    <div className="flex items-center gap-3 text-black/80">
      <Clock className="h-5 w-5" />
      <span className="font-semibold">{time}</span>
    </div>
    <h4 className="mt-2 font-extrabold text-xl">{title}</h4>
    <p className="text-black/70 mt-1">{info}</p>
  </div>
);

export default function Timeline() {
  return (
    <section id="timeline" className="container mx-auto px-6 py-16">
      <div className="mb-6 inline-flex items-center gap-2 rounded-md border-4 border-black bg-yellow-200 px-4 py-2 shadow-[4px_4px_0_#000]">
        <Calendar className="h-5 w-5" />
        <span className="font-bold">June 21, 2025</span>
        <span className="mx-2">·</span>
        <MapPin className="h-5 w-5" />
        <span className="font-bold">Downtown Pavilion</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Item time="09:00" title="Check-in & Breakfast" info="Grab your badge, meet your crew, and fuel up." />
        <Item time="10:00" title="Kickoff & Brief" info="Format, problem statements, and judging." />
        <Item time="10:30" title="Build Sprint" info="Pair up, design, and ship core features." />
        <Item time="14:00" title="Mentor Pass" info="Feedback rounds with recruiters & mentors." />
        <Item time="16:00" title="Demos" info="3-min lightning demos to the panel." />
        <Item time="17:30" title="Awards & Offers" info="Prizes, interviews, and wrap." />
      </div>
    </section>
  );
}
