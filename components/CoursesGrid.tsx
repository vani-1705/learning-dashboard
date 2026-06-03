/* Server component fetches course from supabase */
import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import CoursesGridClient from './CoursesGridClient'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Supabase error:', error)
    throw new Error('Unable to load courses from Supabase.')
  }

  return data || []
}

/* Returns empty state if fetches fails */
export default async function CoursesGrid() {
  try {
    const courses = await getCourses()

    if (!courses.length) {
      return (
        <section
          className="col-span-3 rounded-2xl p-6 text-center"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            No courses available yet.
          </p>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            Your Supabase `courses` table is empty. Insert course rows and refresh the page.
          </p>
        </section>
      )
    }

    return <CoursesGridClient courses={courses} />
  } catch (error) {
    return (
      <section
        className="col-span-3 rounded-2xl p-6 text-center"
        style={{
          background: 'rgba(196, 40, 28, 0.08)',
          border: '1px solid rgba(196, 40, 28, 0.25)',
          color: 'var(--text-primary)',
        }}
      >
        <p className="text-base font-semibold" style={{ color: '#ffb3b3' }}>
          Oops! We couldn’t load your courses.
        </p>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          Please check your Supabase connection and confirm your <code>courses</code> table exists.
        </p>
      </section>
    )
  }
}