import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'

function App() {
  return (
    <div className="min-h-screen w-full font-['Manrope',_Inter,_system-ui]">
      {/* HERO with Spline 3D */}
      <Hero />

      {/* Highlights / How it works */}
      <Highlights />

      {/* Timeline */}
      <Timeline />

      {/* Prizes & CTA */}
      <Prizes />

      {/* Footer */}
      <footer className="w-full bg-neutral-900 py-10 text-neutral-300">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm">© 2025 HireQuest Tournament. Built for makers.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#highlights" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Code of Conduct</a>
              <a href="#register" className="hover:text-white">Register</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
