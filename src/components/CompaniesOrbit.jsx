import React from 'react';

const logos = [
  { name: 'Alpha', color: 'from-cyan-400 to-emerald-400' },
  { name: 'Beta', color: 'from-fuchsia-400 to-pink-400' },
  { name: 'Gamma', color: 'from-amber-400 to-orange-400' },
  { name: 'Delta', color: 'from-sky-400 to-blue-400' },
  { name: 'Epsilon', color: 'from-lime-400 to-emerald-400' },
  { name: 'Zeta', color: 'from-purple-400 to-indigo-400' },
  { name: 'Eta', color: 'from-rose-400 to-pink-400' },
  { name: 'Theta', color: 'from-teal-400 to-cyan-400' },
  { name: 'Iota', color: 'from-violet-400 to-fuchsia-400' },
  { name: 'Kappa', color: 'from-green-400 to-teal-400' },
  { name: 'Lambda', color: 'from-blue-400 to-indigo-400' },
  { name: 'Sigma', color: 'from-orange-400 to-amber-400' },
];

function Orbit({ radius, duration, reverse = false, children, ring = true }) {
  const size = radius * 2;
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ width: size, height: size, marginLeft: -radius, marginTop: -radius }}
    >
      {ring && (
        <div className="absolute inset-0 rounded-full border border-white/15" />
      )}
      <div
        className={`absolute inset-0 ${reverse ? 'animate-spin-reverse' : 'animate-spin-slow'}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}

export default function CompaniesOrbit() {
  const rings = [
    { radius: 90, count: 4, duration: 32, reverse: false },
    { radius: 150, count: 6, duration: 48, reverse: true },
    { radius: 210, count: 8, duration: 62, reverse: false },
  ];

  let idx = 0;

  return (
    <section className="relative w-full bg-neutral-950 py-24">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto aspect-square w-full max-w-5xl">
          {/* Central Title */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_60%)] blur-2xl" />
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
                Companies Hiring from us
              </h2>
              <p className="mt-2 text-sm text-white/60">
                A snapshot of the ecosystem recruiting our champions
              </p>
            </div>
          </div>

          {/* Orbits */}
          {rings.map((ring, ringIdx) => {
            const angleStep = 360 / ring.count;
            return (
              <Orbit key={ringIdx} radius={ring.radius} duration={ring.duration} reverse={ring.reverse}>
                {new Array(ring.count).fill(0).map((_, i) => {
                  const logo = logos[idx++ % logos.length];
                  const angle = i * angleStep;
                  const tokenSize = ringIdx === 0 ? 44 : ringIdx === 1 ? 52 : 56;
                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(${ring.radius}px) rotate(${-angle}deg)`,
                        transformOrigin: 'center',
                      }}
                    >
                      <div
                        className={`relative grid place-items-center rounded-full border-2 border-white bg-neutral-900 shadow-[6px_6px_0_#000]`}
                        style={{ width: tokenSize, height: tokenSize }}
                        title={logo.name}
                      >
                        <div className={`absolute inset-0 -z-0 rounded-full bg-gradient-to-br ${logo.color} opacity-40`} />
                        <span className="z-10 select-none text-[10px] font-black uppercase leading-none tracking-wider text-white">
                          {logo.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Orbit>
            );
          })}

          {/* Decorative outer ring glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
        </div>
      </div>

      {/* Local keyframes for orbit rotation */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow linear infinite; }
        .animate-spin-reverse { animation: spin-reverse linear infinite; }
      `}</style>
    </section>
  );
}
