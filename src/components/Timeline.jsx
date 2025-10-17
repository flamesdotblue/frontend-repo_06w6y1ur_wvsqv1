import { Clock, Code, Presentation, Medal } from 'lucide-react'

const phases = [
  {
    time: 'Day 1 — Kickoff',
    title: 'Briefing + Team Formation',
    details: 'Review challenge packs, form squads, set up repos and pipelines. Speed-run discovery.',
    icon: Clock,
  },
  {
    time: 'Day 2 — Build',
    title: 'Implementation Sprints',
    details: 'Ship incrementally. Judges circulate for office hours. Surprise constraints keep it real.',
    icon: Code,
  },
  {
    time: 'Day 3 — Demo',
    title: 'Presentations & Q&A',
    details: '5-minute demo, 3-minute Q&A. Rubric focuses on clarity, impact, and tradeoffs.',
    icon: Presentation,
  },
  {
    time: 'Finale',
    title: 'Awards & Offers',
    details: 'Top teams advance to rapid interviews. Offers and prizes announced live.',
    icon: Medal,
  },
]

export default function Timeline() {
  return (
    <section className="relative w-full bg-neutral-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Timeline</h2>
            <p className="mt-2 max-w-2xl text-neutral-700">
              Four punchy phases. Built to simulate high-signal work with supportive constraints.
            </p>
          </div>
          <a
            href="#register"
            className="hidden rounded-lg border-4 border-black bg-yellow-300 px-5 py-3 text-sm font-black text-black shadow-[6px_6px_0_#000] sm:inline-block"
          >
            Save my spot
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {phases.map((p) => (
            <div
              key={p.title}
              className="relative rounded-xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]"
            >
              <div className="mb-3 inline-flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border-4 border-black bg-cyan-300 shadow-[4px_4px_0_#000]">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-700">
                  {p.time}
                </span>
              </div>
              <h3 className="text-xl font-black text-black">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{p.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
