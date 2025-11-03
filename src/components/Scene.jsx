import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import FloatingCards from './FloatingCards'
import Particles from './Particles'

export default function Scene() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rx = useSpring(useTransform(my, [ -200, 200 ], [ 8, -8 ]), { stiffness: 60, damping: 15 })
  const ry = useSpring(useTransform(mx, [ -200, 200 ], [ -10, 10 ]), { stiffness: 60, damping: 15 })
  const tz = useSpring(10, { stiffness: 60, damping: 20 })

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    mx.set(x)
    my.set(y)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className="relative h-[70vh] md:h-[78vh] lg:h-[86vh] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e0719] to-[#140922] border border-amber-400/10 shadow-[0_0_60px_rgba(168,85,247,0.25),inset_0_0_120px_rgba(250,204,21,0.06)]"
      style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(250,204,21,0.12),transparent_50%),radial-gradient(ellipse_at_30%_70%,rgba(147,51,234,0.25),transparent_50%)]" />

      <Particles />

      {/* Table */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, z: tz }}
        className="absolute left-1/2 bottom-24 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-b from-[#1b0f2c] to-[#0e0817] rounded-[50%] blur-sm border-t border-amber-400/10 shadow-[0_-20px_80px_rgba(250,204,21,0.15)]"
      />

      {/* Samurai silhouette */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, z: tz }}
        className="absolute left-1/2 bottom-40 -translate-x-1/2 w-[520px] max-w-[82vw]"
      >
        <SamuraiSVG />
      </motion.div>

      {/* Candles */}
      <motion.div style={{ rotateX: rx, rotateY: ry, z: tz }} className="absolute inset-0">
        <Candle x="22%" bottom="18%" scale={0.9} />
        <Candle x="78%" bottom="20%" scale={1} />
        <Candle x="12%" bottom="14%" scale={0.8} />
        <Candle x="88%" bottom="16%" scale={0.85} />
      </motion.div>

      <FloatingCards />

      {/* Vignette and gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.5)),linear-gradient(to_top,rgba(0,0,0,0.45),transparent_35%)]" />
    </motion.div>
  )
}

function Candle({ x = '50%', bottom = '16%', scale = 1 }) {
  return (
    <div className="absolute" style={{ left: x, bottom, transform: `translateX(-50%) scale(${scale})` }}>
      <div className="relative w-3 h-10 bg-[#1f1233] rounded-sm border border-amber-400/20 shadow-[0_0_20px_rgba(250,204,21,0.25)]">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Flame />
        </div>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-2 rounded-full bg-amber-300/15 blur-md" />
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black/60 blur" />
      </div>
    </div>
  )
}

function Flame() {
  return (
    <div className="relative">
      <div className="w-2 h-4 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 rounded-full origin-bottom animate-flicker" />
      <div className="absolute inset-0 -z-10 w-6 h-6 -left-2 -top-1 rounded-full bg-amber-300/40 blur-md animate-pulse-slow" />
      <style>{`
        @keyframes flicker { 0%, 100% { transform: scaleY(0.9) translateX(0); filter: hue-rotate(0deg); } 50% { transform: scaleY(1.05) translateX(0.5px); filter: hue-rotate(-8deg); } }
        .animate-flicker { animation: flicker 0.18s infinite alternate ease-in-out; }
        @keyframes pulseSlow { 0%, 100% { opacity: .55; } 50% { opacity: .85; } }
        .animate-pulse-slow { animation: pulseSlow 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

function SamuraiSVG() {
  return (
    <svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto select-none">
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(250,204,21,0.45)" />
          <stop offset="60%" stopColor="rgba(250,204,21,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id="armor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2b0f3f" />
          <stop offset="100%" stopColor="#12081f" />
        </linearGradient>
      </defs>

      <ellipse cx="300" cy="360" rx="220" ry="26" fill="rgba(0,0,0,0.55)" />
      <circle cx="300" cy="140" r="220" fill="url(#goldGlow)" />

      {/* Body */}
      <g filter="url(#soft)">
        <path d="M230 260c10-34 40-58 70-58s60 24 70 58l28 78H202l28-78z" fill="url(#armor)" stroke="#d6b356" strokeOpacity="0.25" />
        {/* Head */}
        <path d="M300 120c-26 0-46 22-46 44 0 22 20 42 46 42s46-20 46-42c0-22-20-44-46-44z" fill="#1b0f2c" stroke="#d6b356" strokeOpacity="0.25" />
        {/* Helmet crest */}
        <path d="M300 76c-14 10-30 34-30 34l12 8s12-16 18-16 18 16 18 16l12-8s-16-24-30-34z" fill="#2b0f3f" stroke="#e7c15d" strokeOpacity="0.35" />
        {/* Shoulders */}
        <path d="M188 264c22-20 48-30 68-32l-28 84-58-10 18-42z" fill="#1a0b2a" opacity="0.95" />
        <path d="M412 264c-22-20-48-30-68-32l28 84 58-10-18-42z" fill="#1a0b2a" opacity="0.95" />
        {/* Arms on table */}
        <rect x="190" y="300" width="220" height="28" rx="10" fill="#160a24" />
        <rect x="200" y="310" width="200" height="12" rx="6" fill="#0f071a" />
        {/* Gold rim light */}
        <path d="M220 240c24-30 56-38 80-38s56 8 80 38" stroke="#facc15" strokeOpacity="0.35" strokeWidth="4" fill="none" />
      </g>

      {/* Sword on back silhouette */}
      <g opacity="0.9">
        <rect x="356" y="70" width="14" height="150" rx="3" transform="rotate(35 356 70)" fill="#170b27" />
        <rect x="220" y="70" width="14" height="150" rx="3" transform="rotate(-35 220 70)" fill="#170b27" />
      </g>
    </svg>
  )
}
