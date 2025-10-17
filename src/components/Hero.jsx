import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + grid overlay - non-blocking for Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pb-16 pt-28 sm:pt-32 md:pt-40">
        <span className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-yellow-300 px-4 py-2 text-sm font-extrabold uppercase tracking-wider shadow-[6px_6px_0_#000]">
          <Rocket className="h-4 w-4" /> HireQuest 2025
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          The Neobrutal Hiring Tournament
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          A fast-paced, skills-first competition where top talent ships real solutions live. Battle through challenges, wow judges, and earn offers on the spot.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#register"
            className="rounded-lg border-4 border-black bg-lime-300 px-6 py-3 text-base font-black text-black shadow-[6px_6px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Register Now
          </a>
          <a
            href="#highlights"
            className="rounded-lg border-4 border-black bg-white/90 px-6 py-3 text-base font-black text-black shadow-[6px_6px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-300">
          <span className="rounded-md border-2 border-neutral-700 bg-neutral-900 px-3 py-1 font-semibold">June 14–16, 2025</span>
          <span className="rounded-md border-2 border-neutral-700 bg-neutral-900 px-3 py-1 font-semibold">Remote + Onsite Finals</span>
          <span className="rounded-md border-2 border-neutral-700 bg-neutral-900 px-3 py-1 font-semibold">Teams or Solo</span>
        </div>
      </div>
    </section>
  )
}
