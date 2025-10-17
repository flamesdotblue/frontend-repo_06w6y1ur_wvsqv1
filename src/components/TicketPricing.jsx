import { Calendar, MapPin, Clock } from 'lucide-react'

export default function TicketPricing() {
  return (
    <section id="pricing" className="relative w-full bg-neutral-100 py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pricing</h2>
          <p className="max-w-3xl text-neutral-700">Secure your place with an Early Bird ticket. Limited quantity, first come first served.</p>
        </div>

        {/* Ticket Mockup */}
        <div className="relative grid w-full grid-cols-1 gap-0 md:grid-cols-[1fr_auto]">
          {/* Main ticket body */}
          <div className="relative rounded-l-xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000] md:rounded-l-xl md:rounded-r-none">
            {/* Perforation dots */}
            <div className="pointer-events-none absolute right-[-12px] top-0 hidden h-full w-6 items-center justify-center md:flex">
              <div className="h-full w-px border-r-2 border-dashed border-black" />
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-amber-300 px-3 py-1 text-xs font-extrabold uppercase tracking-wider shadow-[4px_4px_0_#000]">
                  Early Bird
                </span>
                <h3 className="mt-3 text-2xl font-black">AlgoU Hiring Tournament</h3>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
                  <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neutral-100 px-3 py-1">
                    <Calendar className="h-4 w-4" />
                    <span>June 14–16, 2025</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neutral-100 px-3 py-1">
                    <Clock className="h-4 w-4" />
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neutral-100 px-3 py-1">
                    <MapPin className="h-4 w-4" />
                    <span>Remote + Onsite Finals</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 md:items-end">
                <div className="text-5xl font-extrabold tracking-tight">$20</div>
                <button
                  type="button"
                  className="rounded-lg border-4 border-black bg-lime-300 px-6 py-3 text-base font-black text-black shadow-[6px_6px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  onClick={() => {}}
                >
                  Get Ticket
                </button>
                <p className="text-xs text-neutral-600">Includes access to all sessions and recordings.</p>
              </div>
            </div>

            {/* decorative corners */}
            <div className="pointer-events-none absolute left-[-10px] top-8 h-5 w-5 rounded-full border-4 border-black bg-neutral-100" />
            <div className="pointer-events-none absolute left-[-10px] bottom-8 h-5 w-5 rounded-full border-4 border-black bg-neutral-100" />
          </div>

          {/* Right stub */}
          <div className="relative flex items-center justify-center rounded-r-xl border-4 border-l-0 border-black bg-cyan-300 p-4 shadow-[6px_6px_0_#000] md:min-h-[220px]">
            {/* barcode-like bars */}
            <div className="absolute inset-y-6 left-2 right-2 -z-0 flex items-center justify-center gap-1 opacity-20">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className={`h-full ${i % 3 === 0 ? 'w-[3px]' : 'w-[2px]'} bg-black`} />
              ))}
            </div>
            <div className="relative flex h-full flex-col items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-widest">Admit One</span>
              <div className="mt-2 h-24 w-px bg-black/40" />
              <span className="mt-2 origin-center rotate-180 [writing-mode:vertical-rl] text-sm font-extrabold">
                AlgoU · Early Bird
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
