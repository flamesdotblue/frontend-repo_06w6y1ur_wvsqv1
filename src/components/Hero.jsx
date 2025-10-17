import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette/gradient overlay to preserve interaction with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,16,16,0)_0%,rgba(16,16,16,0.2)_55%,rgba(16,16,16,0.6)_100%)]" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
          Hiring Tournament 2025
        </h1>
        <p className="mt-4 max-w-2xl text-white/70 text-lg sm:text-xl">
          A neobrutalist event bringing top talent and bold ideas together. Build, ship, and get hired.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#tickets"
            className="inline-block rounded-md border-4 border-white bg-fuchsia-500 px-6 py-3 text-black font-extrabold shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000]"
          >
            Get Tickets
          </a>
          <a
            href="#timeline"
            className="inline-block rounded-md border-4 border-white bg-cyan-300 px-6 py-3 text-black font-extrabold shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000]"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
