import { motion } from 'framer-motion'

const cards = [
  { id: 1, x: -140, y: -40, r: -12, delay: 0 },
  { id: 2, x: 40, y: -80, r: 8, delay: 0.2 },
  { id: 3, x: 160, y: 20, r: -6, delay: 0.4 },
  { id: 4, x: -10, y: 90, r: 14, delay: 0.6 },
]

export default function FloatingCards({ depth = 0.2 }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {cards.map((c) => (
        <motion.div
          key={c.id}
          initial={{ y: c.y - 20, opacity: 0 }}
          animate={{ y: [c.y, c.y - 10, c.y], opacity: 1 }}
          transition={{ duration: 8, delay: c.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `translate(calc(-50% + ${c.x}px), calc(-50% + ${c.y}px))` }}
        >
          <motion.div
            animate={{ rotate: [c.r - 5, c.r + 5, c.r - 5] }}
            transition={{ duration: 12, delay: c.delay + 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-28 h-40 sm:w-32 sm:h-48 rounded-xl bg-gradient-to-br from-[#1c0f2e] to-[#2b0f3f] border border-amber-400/30 shadow-[0_0_30px_rgba(250,204,21,0.25),inset_0_0_30px_rgba(168,85,247,0.15)]"
            style={{ perspective: 800 }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(250,204,21,0.25),transparent_60%)]" />
              <div className="absolute inset-[1px] rounded-[11px] border border-amber-300/40" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-400/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-amber-300/20 blur-md" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
