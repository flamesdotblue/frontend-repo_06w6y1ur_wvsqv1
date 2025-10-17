import React from 'react';
import { Rocket, Users, Trophy } from 'lucide-react';

const HighlightCard = ({ icon: Icon, title, desc, color }) => (
  <div
    className={`group relative rounded-xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]`}
  >
    <div className={`absolute inset-0 ${color} opacity-20 rounded-xl`} />
    <div className="relative flex items-start gap-4">
      <div className="rounded-md border-4 border-black bg-yellow-300 p-3 shadow-[4px_4px_0_#000]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-extrabold text-xl">{title}</h3>
        <p className="text-black/70 mt-1">{desc}</p>
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
          color="bg-rose-300"
        />
        <HighlightCard
          icon={Users}
          title="Meet Teams"
          desc="Collaborate with mentors, recruiters, and peers."
          color="bg-sky-300"
        />
        <HighlightCard
          icon={Trophy}
          title="Win Offers"
          desc="Stand out and land interviews on the spot."
          color="bg-lime-300"
        />
      </div>
    </section>
  );
}
