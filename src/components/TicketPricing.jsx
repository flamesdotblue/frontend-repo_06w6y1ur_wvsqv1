import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const InfoChip = ({ icon: Icon, text }) => (
  <span className="backdrop-blur-md bg-white/60 border-2 border-black rounded-md inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold shadow-[3px_3px_0_#000]">
    <Icon className="h-3.5 w-3.5" />
    {text}
  </span>
);

const Ticket = ({ accent = 'bg-lime-300', stub = 'bg-rose-300', tier, price }) => (
  <div className={`relative w-[290px] sm:w-[320px] max-w-md select-none`}> 
    <div className={`relative rounded-xl border-4 border-black shadow-[6px_6px_0_#000] overflow-hidden`}> 
      {/* Sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-20 rotate-12 bg-gradient-to-tr from-white/10 via-white/60 to-white/10" />
      </div>
      {/* Main body */}
      <div className={`${accent} p-5`}> 
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-black text-2xl">{tier}</h3>
            <p className="text-black/70 font-semibold">Admit One</p>
          </div>
          <div className="text-right">
            <div className="font-black text-3xl leading-none">${price}</div>
            <div className="text-xs font-semibold text-black/70">+ taxes</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <InfoChip icon={Calendar} text="Jun 21, 2025" />
          <InfoChip icon={Clock} text="10:00 AM" />
          <InfoChip icon={MapPin} text="Pavilion Hall" />
        </div>
      </div>
      {/* Perforation */}
      <div className="h-3 bg-[radial-gradient(circle,rgba(0,0,0,0.7)_2px,transparent_2px)] [background-size:12px_12px] [background-position:center]" />
      {/* Stub */}
      <div className={`${stub} p-4 flex items-center justify-between`}> 
        <span className="uppercase tracking-widest text-xs font-black">Admit One</span>
        <div className="h-10 w-10 rounded-full border-4 border-black bg-white" />
      </div>
    </div>
    {/* Vertical band */}
    <div className="pointer-events-none absolute -left-4 top-3 bottom-3 w-6 rotate-[-6deg] bg-black text-white flex items-center justify-center rounded-md shadow-[4px_4px_0_#000]">
      <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-extrabold tracking-widest">ADMIT • ONE</span>
    </div>
  </div>
);

export default function TicketPricing() {
  const tickets = [
    { tier: 'Early Bird', price: 20, accent: 'bg-sky-300', stub: 'bg-amber-300' },
    { tier: 'Student', price: 10, accent: 'bg-lime-300', stub: 'bg-rose-300' },
    { tier: 'General', price: 35, accent: 'bg-purple-300', stub: 'bg-sky-300' },
  ];

  const leftVariants = {
    rest: { x: -120, rotateZ: -12, rotateY: 18, zIndex: 10, transition: { type: 'spring', stiffness: 120, damping: 14 } },
    hover: { x: -240, rotateZ: 0, rotateY: 0, zIndex: 30, transition: { type: 'spring', stiffness: 120, damping: 12 } },
  };
  const centerVariants = {
    rest: { x: 0, rotateZ: 0, rotateY: 0, scale: 1, zIndex: 20, transition: { type: 'spring', stiffness: 120, damping: 14 } },
    hover: { x: 0, rotateZ: 0, rotateY: 0, scale: 1.02, zIndex: 20, transition: { type: 'spring', stiffness: 120, damping: 12 } },
  };
  const rightVariants = {
    rest: { x: 120, rotateZ: 12, rotateY: -18, zIndex: 10, transition: { type: 'spring', stiffness: 120, damping: 14 } },
    hover: { x: 240, rotateZ: 0, rotateY: 0, zIndex: 30, transition: { type: 'spring', stiffness: 120, damping: 12 } },
  };

  return (
    <section id="tickets" className="container mx-auto px-6 py-16">
      <h2 className="font-black text-3xl md:text-4xl mb-6">Tickets</h2>
      <p className="text-black/70 max-w-2xl">
        Cards are curved like a hand-held fan. Hover to fan them out: the left and right ones glide away from the middle and face you to reveal complete details.
      </p>

      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="group relative mt-10 flex h-[460px] items-center justify-center overflow-visible"
        style={{ perspective: 1000 }}
      >
        {/* Background rail */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-40 max-w-3xl rounded-full bg-gradient-to-b from-black/10 to-transparent blur-xl" />

        {/* Left ticket */}
        <motion.div
          variants={leftVariants}
          className="absolute left-1/2 -translate-x-1/2 origin-bottom group/tk"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="group relative group-hover:translate-y-[-2px] transition-transform">
            <Ticket tier={tickets[0].tier} price={tickets[0].price} accent={tickets[0].accent} stub={tickets[0].stub} />
          </div>
        </motion.div>

        {/* Center ticket */}
        <motion.div
          variants={centerVariants}
          className="absolute left-1/2 -translate-x-1/2 origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="group relative group-hover:translate-y-[-2px] transition-transform">
            <Ticket tier={tickets[1].tier} price={tickets[1].price} accent={tickets[1].accent} stub={tickets[1].stub} />
          </div>
        </motion.div>

        {/* Right ticket */}
        <motion.div
          variants={rightVariants}
          className="absolute left-1/2 -translate-x-1/2 origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="group relative group-hover:translate-y-[-2px] transition-transform">
            <Ticket tier={tickets[2].tier} price={tickets[2].price} accent={tickets[2].accent} stub={tickets[2].stub} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
