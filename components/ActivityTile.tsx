/* Mock contribution graph like Github activity grid */
'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'

function generateActivity() {
  const data = []
  for (let w = 0; w < 12; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0)
    }
    data.push(week)
  }
  return data
}

const activityData = generateActivity()

const intensityColor = (val: number) => {
  if (val === 0) return 'rgba(255,255,255,0.05)'
  if (val === 1) return 'rgba(45,212,191,0.2)'
  if (val === 2) return 'rgba(45,212,191,0.45)'
  if (val === 3) return 'rgba(45,212,191,0.7)'
  return 'rgba(45,212,191,0.95)'
}

/* Spans 2 columns, teal color intensity for activity level */
export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="col-span-2 rounded-2xl p-5"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Activity size={16} style={{ color: 'var(--accent-teal)' }} />
        <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
          Learning Activity
        </span>
        <span className="ml-auto text-xs" style={{ color: 'var(--text-muted)' }}>
          Last 12 weeks
        </span>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {activityData.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1.5">
            {week.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.004, type: 'spring', stiffness: 400 }}
                className="w-3 h-3 rounded-sm"
                style={{ background: intensityColor(day) }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Less</span>
        {[0, 1, 2, 3, 4].map((v) => (
          <div key={v} className="w-3 h-3 rounded-sm" style={{ background: intensityColor(v) }} />
        ))}
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>More</span>
      </div>
    </motion.article>
  )
}