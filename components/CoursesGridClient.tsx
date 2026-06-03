/* Client components handles staggered entrance animation */ 
'use client'

import { motion, Variants } from 'framer-motion'
import CourseCard from './CourseCard'
import { Course } from '@/types'

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

/* Each card fadesin and slides up with spring physics */
export default function CoursesGridClient({ courses }: { courses: Course[] }) {
  return (
    <>
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
          initial={false}
          animate="show"
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </>
  )
}
