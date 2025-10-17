import React from 'react';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Timeline from './components/Timeline.jsx';
import TicketPricing from './components/TicketPricing.jsx';
import Prizes from './components/Prizes.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-black">
      <Hero />
      <Highlights />
      <Timeline />
      <TicketPricing />
      <Prizes />
      <footer className="container mx-auto px-6 py-12">
        <div className="rounded-xl border-4 border-black bg-white px-6 py-4 shadow-[6px_6px_0_#000] text-sm font-semibold text-black/70">
          Built with a neobrutal taste. See you at the tournament.
        </div>
      </footer>
    </div>
  );
}
