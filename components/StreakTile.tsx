/* Show Current Learning Streak and Weekly Activity Dots */
'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function StreakTile() {
  const streak = 14
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const active = [true, true, true, true, true, false, false]

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-2xl p-5 relative overflow-hidden"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ background: '#f97316', transform: 'translate(20%, -20%)' }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Flame size={18} color="#f97316" />
          <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
            Daily Streak
          </span>
        </div>

        <div
          className="text-4xl font-bold mb-1"
          style={{ fontFamily: 'Syne, sans-serif', color: '#f97316' }}
        >
          {streak}
        </div>
        <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
          Days in a row 🔥
        </div>

        <div className="flex gap-2">
          {days.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 400, damping: 15 }}
                className="w-7 h-7 rounded-lg"
                style={{
                  background: active[i]
                    ? 'linear-gradient(135deg, #f97316, #ef4444)'
                    : 'rgba(255,255,255,0.05)',
                }}
              />
              <span className="text-xs" style={{ color: 'var(--text-muted)', fontSize: 10 }}>
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}