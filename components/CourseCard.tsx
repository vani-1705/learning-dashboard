/* Single course card for icon, title, animated progress bar */ 
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { Course } from '@/types'

function AnimatedBar({ value }: { value: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 300)
    return () => clearTimeout(timer)
  }, [value])

  const color =
    value >= 75 ? 'var(--accent-teal)' :
    value >= 40 ? 'var(--accent-blue)' :
    'var(--accent-purple)'

  return (
    <div
      className="w-full h-1.5 rounded-full overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.08)' }}
    >
      <motion.div
        className="h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
    </div>
  )
}

/* icon_name from supabase maps to lucide icon dynamically */
export default function CourseCard({ course }: { course: Course }) {
  const IconComponent =
    ((LucideIcons as unknown) as Record<string, React.ElementType>)[course.icon_name] ||
    LucideIcons.BookOpen

  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-2xl p-5 relative overflow-hidden group"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(79,142,247,0.08), rgba(168,85,247,0.08))',
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(79,142,247,0.3)' }}
      />

      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: 'rgba(79,142,247,0.15)',
            border: '1px solid rgba(79,142,247,0.2)',
          }}
        >
          <IconComponent size={20} style={{ color: 'var(--accent-blue)' }} />
        </div>

        <h3
          className="text-sm font-semibold mb-3 leading-snug"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
        >
          {course.title}
        </h3>

{ /* Progress bar animates 0 value on mount */ }

        <AnimatedBar value={course.progress} />
        <div className="flex justify-between mt-2">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Progress</span>
          <span className="text-xs font-medium" style={{ color: 'var(--accent-blue)' }}>
            {course.progress}%
          </span>
        </div>
      </div>
    </motion.article>
  )
}
