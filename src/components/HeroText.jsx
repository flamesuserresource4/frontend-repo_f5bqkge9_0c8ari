import { Apple, Windows, Linux, Smartphone, Android, Tablet } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroText() {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full text-left text-white px-6 md:px-8 lg:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-xl"
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="text-2xl font-semibold tracking-[0.3em] text-amber-300 drop-shadow-[0_0_12px_rgba(234,179,8,0.6)]">
            KAMUI
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-amber-400/60 to-transparent" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          <span className="block text-amber-300 drop-shadow-[0_0_24px_rgba(234,179,8,0.35)]">
            A STRATEGIC CARD GAME
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg lg:text-xl text-amber-100/90 leading-relaxed max-w-prose">
          Command the battlefield in a cross‑platform, Ethereum‑powered card experience inspired by the art and tactics of feudal Japan. Collect, craft, and outwit your opponents with on‑chain permanence and true ownership.
        </p>

        <div className="mt-8 flex items-center gap-3 text-amber-200/90">
          <div className="text-sm uppercase tracking-widest text-amber-300/90">Available on</div>
          <div className="h-px w-12 bg-amber-400/60" />
        </div>

        <div className="mt-4 grid grid-cols-6 gap-3 sm:gap-4 text-amber-200/90">
          <IconBadge label="macOS"><Apple size={20} /></IconBadge>
          <IconBadge label="Windows"><Windows size={20} /></IconBadge>
          <IconBadge label="Linux"><Linux size={20} /></IconBadge>
          <IconBadge label="iPhone"><Smartphone size={20} /></IconBadge>
          <IconBadge label="Android"><Android size={20} /></IconBadge>
          <IconBadge label="iPad Pro"><Tablet size={20} /></IconBadge>
        </div>
      </motion.div>
    </div>
  )
}

function IconBadge({ children, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center gap-2 rounded-md border border-amber-500/20 bg-white/5 backdrop-blur-sm px-3 py-2 shadow-[inset_0_0_20px_rgba(250,204,21,0.06),0_0_20px_rgba(250,204,21,0.05)]"
    >
      <span className="text-amber-300">{children}</span>
      <span className="text-xs font-medium tracking-wide text-amber-100/90">{label}</span>
    </motion.div>
  )
}
