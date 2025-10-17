import React from 'react';

export default function WebsiteMockup() {
  const imgUrl =
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80';

  return (
    <section className="relative w-full bg-neutral-950 py-24">
      {/* Subtle backdrop glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[520px] w-[86%] max-w-6xl rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18)_0%,rgba(6,182,212,0.12)_35%,transparent_70%)] blur-0" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Website Showcase
            </h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              A clean mockup framing a screenshot of a modern, innovative site in our bold neobrutal style.
            </p>
          </div>

          {/* Desktop browser mockup */}
          <div className="relative">
            <div className="rounded-2xl border-4 border-white bg-neutral-900 shadow-[10px_10px_0_#000] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b-4 border-white bg-neutral-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
                <span className="h-3 w-3 rounded-full bg-yellow-400 border-2 border-white" />
                <span className="h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                <div className="ml-3 flex-1 rounded-md border-2 border-white/80 bg-neutral-900 px-3 py-1 text-xs text-white/70 truncate">
                  https://cool-website.example
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative">
                <img
                  src={imgUrl}
                  alt="Showcase website screenshot"
                  className="block w-full h-[460px] object-cover"
                  loading="lazy"
                />

                {/* Soft gradient edges */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.25),transparent_18%,transparent_82%,rgba(10,10,10,0.35))]" />
              </div>
            </div>

            {/* Mobile device overlay */}
            <div className="absolute -bottom-8 -right-6 hidden md:block">
              <div className="w-52 rounded-3xl border-4 border-white bg-neutral-900 shadow-[8px_8px_0_#000] overflow-hidden rotate-3">
                <div className="border-b-4 border-white bg-neutral-800 px-3 py-2 text-center text-[10px] font-semibold text-white/70">
                  m.cool-website.example
                </div>
                <img
                  src={imgUrl}
                  alt="Mobile website screenshot"
                  className="block w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
