import { motion } from 'framer-motion'
import HeroText from './components/HeroText'
import Scene from './components/Scene'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0613] text-white">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(250,204,21,0.08),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(88,28,135,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0613]/40 to-[#090513]" />
      </div>

      <main className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <HeroText />
          <Scene />
        </motion.div>

        {/* Bottom subtle divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <footer className="py-6 text-center text-sm text-amber-100/60">
          © {new Date().getFullYear()} KAMUI — Feudal strategy, forged in gold.
        </footer>
      </main>
    </div>
  )
}

export default App
