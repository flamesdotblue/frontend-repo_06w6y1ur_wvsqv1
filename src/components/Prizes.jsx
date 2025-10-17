import { Trophy, Gift, Star } from 'lucide-react'

export default function Prizes() {
  return (
    <section className="relative w-full bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Prizes & Outcomes</h2>
          <p className="max-w-3xl text-neutral-700">
            Beyond trophies, this is a hiring runway. Perform, and you move fast.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border-4 border-black bg-lime-300 p-6 shadow-[6px_6px_0_#000]">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg border-4 border-black bg-white shadow-[4px_4px_0_#000]">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black">Champions</h3>
            <p className="mt-2 text-sm">
              $10,000 cash prize, spotlight feature, private interviews with partner companies.
            </p>
          </div>

          <div className="rounded-xl border-4 border-black bg-cyan-300 p-6 shadow-[6px_6px_0_#000]">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg border-4 border-black bg-white shadow-[4px_4px_0_#000]">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black">Category Winners</h3>
            <p className="mt-2 text-sm">
              Awards for design, backend, devops, and product thinking. Swag and recruiter intros.
            </p>
          </div>

          <div className="rounded-xl border-4 border-black bg-amber-300 p-6 shadow-[6px_6px_0_#000]">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg border-4 border-black bg-white shadow-[4px_4px_0_#000]">
              <Gift className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black">Participants</h3>
            <p className="mt-2 text-sm">
              Certificates, judge feedback, and a public project page you can share with employers.
            </p>
          </div>
        </div>

        <div id="register" className="mt-12 rounded-xl border-4 border-black bg-neutral-900 p-6 text-white shadow-[6px_6px_0_#000]">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Ready to enter the arena?</h3>
              <p className="mt-1 text-neutral-300">Spots are limited. Secure your place in the next cohort.</p>
            </div>
            <a
              href="#"
              className="rounded-lg border-4 border-black bg-yellow-300 px-6 py-3 text-base font-black text-black shadow-[6px_6px_0_#000] transition-transform hover:-translate-y-0.5"
            >
              Apply in 2 minutes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
