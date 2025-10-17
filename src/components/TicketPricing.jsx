import { Calendar, MapPin, Clock } from 'lucide-react'

function Ticket({ tier, price, accent, stub, vertical, date = 'June 14–16, 2025', time = '9:00 AM – 6:00 PM', place = 'Remote + Onsite Finals' }) {
  return (
    <div className="group relative mx-auto w-full max-w-md">
      <div className="relative grid grid-cols-[1fr_auto] items-stretch">
        {/* Main body */}
        <div className={`relative rounded-l-xl border-4 border-black ${accent} p-6 shadow-[6px_6px_0_#000] transition-transform duration-200 group-hover:-translate-y-1 md:rounded-l-xl md:rounded-r-none`}>
          {/* Perforation */}
          <div className="pointer-events-none absolute right-[-12px] top-0 hidden h-full w-6 items-center justify-center md:flex">
            <div className="h-full w-px border-r-2 border-dashed border-black" />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-white/70 px-3 py-1 text-xs font-extrabold uppercase tracking-wider shadow-[4px_4px_0_#000] backdrop-blur">
                {tier}
              </span>
              <h3 className="mt-3 text-2xl font-black">AlgoU Hiring Tournament</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-neutral-800">
                <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white/70 px-3 py-1 backdrop-blur">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white/70 px-3 py-1 backdrop-blur">
                  <Clock className="h-4 w-4" />
                  <span>{time}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white/70 px-3 py-1 backdrop-blur">
                  <MapPin className="h-4 w-4" />
                  <span>{place}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <div className="text-5xl font-extrabold tracking-tight">{price}</div>
              <button
                type="button"
                className="rounded-lg border-4 border-black bg-black px-6 py-3 text-base font-black text-white shadow-[6px_6px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => {}}
              >
                Get Ticket
              </button>
              <p className="text-xs text-neutral-700">Access to all sessions + recordings.</p>
            </div>
          </div>

          {/* corner cutouts */}
          <div className="pointer-events-none absolute left-[-10px] top-8 h-5 w-5 rounded-full border-4 border-black bg-white/70 backdrop-blur" />
          <div className="pointer-events-none absolute left-[-10px] bottom-8 h-5 w-5 rounded-full border-4 border-black bg-white/70 backdrop-blur" />

          {/* subtle sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-l-xl [background:linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.35)_40%,transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Right stub */}
        <div className={`relative flex items-center justify-center rounded-r-xl border-4 border-l-0 border-black ${stub} p-4 shadow-[6px_6px_0_#000] md:min-h-[220px]`}>
          {/* holographic bars */}
          <div className="absolute inset-y-6 left-2 right-2 flex items-center justify-center gap-1 opacity-30 mix-blend-multiply">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className={`${i % 4 === 0 ? 'w-[4px]' : i % 3 === 0 ? 'w-[2px]' : 'w-[1px]'} h-full bg-black/70`} />
            ))}
          </div>
          <div className="relative flex h-full flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-widest">Admit One</span>
            <div className="mt-2 h-24 w-px bg-black/50" />
            <span className="mt-2 origin-center rotate-180 [writing-mode:vertical-rl] text-sm font-extrabold">
              {vertical}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TicketPricing() {
  const tickets = [
    {
      tier: 'Early Bird',
      price: '$20',
      accent: 'bg-amber-200',
      stub: 'bg-cyan-300',
      vertical: 'AlgoU · Early Bird',
    },
    {
      tier: 'Student',
      price: '$10',
      accent: 'bg-violet-200',
      stub: 'bg-pink-300',
      vertical: 'AlgoU · Student',
    },
    {
      tier: 'General',
      price: '$35',
      accent: 'bg-lime-200',
      stub: 'bg-orange-300',
      vertical: 'AlgoU · General',
    },
  ]

  return (
    <section id="pricing" className="relative w-full bg-neutral-100 py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pricing</h2>
          <p className="max-w-3xl text-neutral-700">Choose the pass that fits you. Limited quantities for Early Bird and Student tiers.</p>
        </div>

        {/* Ticket grid - minimal width cards side-by-side */}
        <div className="mx-auto grid max-w-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tickets.map((t) => (
            <Ticket key={t.tier} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
