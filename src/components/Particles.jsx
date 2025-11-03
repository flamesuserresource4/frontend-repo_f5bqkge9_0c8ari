import { useMemo } from 'react'

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 16,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.6 + 0.2,
    }))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] rounded-full bg-amber-200/50 blur-[1px] shadow-[0_0_12px_rgba(250,204,21,0.35)]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-60vh) translateX(10px); }
          100% { transform: translateY(-120vh) translateX(-10px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
