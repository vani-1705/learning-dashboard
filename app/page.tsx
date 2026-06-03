/* Main Dashboard Page combines all Bento Tiles */ 
import { Suspense } from 'react'
import Sidebar from '@/components/Sidebar'
import HeroTile from '@/components/HeroTile'
import StreakTile from '@/components/StreakTile'
import CoursesGrid from '@/components/CoursesGrid'
import ActivityTile from '@/components/ActivityTile'
import CourseSkeleton from '@/components/CourseSkeleton'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="bento-grid">

            <HeroTile />
            <StreakTile />

            <Suspense
              fallback={
                <>
                  <CourseSkeleton />
                  <CourseSkeleton />
                  <CourseSkeleton />
                  <CourseSkeleton />
                </>
              }
            >
              <CoursesGrid />
            </Suspense>

            <ActivityTile />

          </div>
        </div>
      </main>
    </div>
  )
}
