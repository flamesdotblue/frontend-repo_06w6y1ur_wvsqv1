import React from 'react';
import { Rocket, Users, Trophy } from 'lucide-react';

const HighlightCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group relative rounded-xl border-4 border-white bg-neutral-900 p-6 shadow-[6px_6px_0_#000]">
    <div className={`pointer-events-none absolute inset-0 ${color} opacity-10 rounded-xl`} />
    <div className="relative flex items-start gap-4">
      <div className="rounded-md border-4 border-white bg-yellow-300 p-3 text-black shadow-[4px_4px_0_#000]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-extrabold text-xl text-white">{title}</h3>
        <p className="text-white/70 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

export default function Highlights() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HighlightCard
          icon={Rocket}
          title="Build Fast"
          desc="Ship a polished prototype in hours with real-world constraints."
          color="bg-rose-400"
        />
        <HighlightCard
          icon={Users}
          title="Meet Teams"
          desc="Collaborate with mentors, recruiters, and peers."
          color="bg-sky-400"
        />
        <HighlightCard
          icon={Trophy}
          title="Win Offers"
          desc="Stand out and land interviews on the spot."
          color="bg-lime-400"
        />
      </div>
    </section>
  );
}
