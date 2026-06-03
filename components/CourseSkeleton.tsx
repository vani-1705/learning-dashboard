/* For display the courses fetch from Supabase */ 
export default function CourseSkeleton() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <div
        className="w-10 h-10 rounded-xl mb-4 animate-pulse"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      />
      <div
        className="h-3 rounded-full mb-2 w-3/4 animate-pulse"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      />
      <div
        className="h-3 rounded-full mb-4 w-1/2 animate-pulse"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />
      <div
        className="h-1.5 rounded-full w-full animate-pulse"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      />
    </div>
  )
}
