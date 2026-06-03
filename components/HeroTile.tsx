/* For Display the Greeting title */ 
'use client'

import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'

/* Time-based Greeting as extra feature for page attraction */
/* Welcome Greeting Title */
export default function HeroTile() {
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'

  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="col-span-2 rounded-2xl p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f1729 0%, #1a0a2e 50%, #0a1a2e 100%)',
        border: '1px solid var(--border)',
      }}
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'var(--accent-blue)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'var(--accent-purple)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sun size={16} style={{ color: 'var(--accent-teal)' }} />
          <span className="text-sm" style={{ color: 'var(--accent-teal)' }}>{greeting}</span>
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold mb-1"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
        >
          Welcome back, Vani! 👋
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          You have 4 courses in progress. Keep going and  all the best!
        </p>

        <div className="flex gap-6 mt-5">
          {[
            { label: 'Courses Active', value: '4' },
            { label: 'Hours This Week', value: '12.5' },
            { label: 'Completion Rate', value: '68%' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
