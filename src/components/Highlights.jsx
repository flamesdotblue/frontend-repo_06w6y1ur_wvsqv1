import { Users, Trophy, Briefcase, ShieldCheck } from 'lucide-react'

const items = [
  {
    title: 'Real-World Challenges',
    desc: 'Solve production-grade tasks designed by hiring teams. No trick questions, just practical problems.',
    icon: ShieldCheck,
    color: 'bg-pink-300',
  },
  {
    title: 'Meet Hiring Managers',
    desc: 'Showcase your approach live and get direct feedback from decision makers.',
    icon: Users,
    color: 'bg-lime-300',
  },
  {
    title: 'Win Offers & Prizes',
    desc: 'Top performers receive fast-tracked interviews, cash prizes, and exclusive perks.',
    icon: Trophy,
    color: 'bg-cyan-300',
  },
  {
    title: 'Portfolio-Ready',
    desc: 'Walk away with public, polished projects and judge notes to bolster your profile.',
    icon: Briefcase,
    color: 'bg-amber-300',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Why this tournament?</h2>
          <p className="max-w-3xl text-neutral-700">
            Neobrutal, no-nonsense and radically transparent. Ship solutions, collaborate loud, and be seen for your craft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border-4 border-black bg-neutral-50 p-5 shadow-[6px_6px_0_#000] transition-transform hover:-translate-y-1"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border-4 border-black ${item.color} shadow-[4px_4px_0_#000]`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
