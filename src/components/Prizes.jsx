import React from 'react';
import { Medal, Gift, Briefcase } from 'lucide-react';

const PrizeCard = ({ icon: Icon, title, desc, color }) => (
  <div className="relative rounded-xl border-4 border-white bg-neutral-900 p-6 shadow-[6px_6px_0_#000]">
    <div className={`pointer-events-none absolute inset-0 ${color} opacity-10 rounded-xl`} />
    <div className="relative flex items-center gap-4">
      <div className="rounded-md border-4 border-white bg-rose-300 p-3 text-black shadow-[4px_4px_0_#000]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-extrabold text-xl text-white">{title}</h3>
        <p className="text-white/70 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

export default function Prizes() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="font-black text-3xl md:text-4xl mb-6">Prizes & Perks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PrizeCard icon={Medal} title="Grand Prize" desc="$2,000 cash + hardware swag" color="bg-purple-400" />
        <PrizeCard icon={Briefcase} title="Recruiter Picks" desc="Direct interviews with partner companies" color="bg-sky-400" />
        <PrizeCard icon={Gift} title="Category Awards" desc="Best UX, Best DevEx, Best AI Tooling" color="bg-lime-400" />
      </div>
    </section>
  );
}
