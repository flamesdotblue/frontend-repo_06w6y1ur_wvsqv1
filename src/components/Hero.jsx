import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-yellow-200">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 mix-blend-normal" />
        <h1 className="relative font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-black">
          Hiring Tournament 2025
        </h1>
        <p className="relative mt-4 max-w-2xl text-black/80 text-lg sm:text-xl">
          A neobrutalist event bringing top talent and bold ideas together. Build, ship, and get hired.
        </p>
        <div className="relative mt-8 flex items-center gap-4">
          <a
            href="#tickets"
            className="inline-block rounded-md border-4 border-black bg-lime-300 px-6 py-3 text-black font-semibold shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000]"
          >
            Get Tickets
          </a>
          <a
            href="#timeline"
            className="inline-block rounded-md border-4 border-black bg-white px-6 py-3 text-black font-semibold shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000]"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
