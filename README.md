# Next-Gen Learning Dashboard  

This project is a student dashboard prototype built for the **Frontend Intern Challenge: Next-Gen Learning Dashboard** assignment task by Andaz Kumar.
Next.js student learning dashboard built with Supabase, Tailwind CSS, Framer Motion, and TypeScript. 

---

## Tech Stack
- **Next.js App Router**
- **Supabase** for live course data
- **Tailwind CSS** for styling
- **Framer Motion** for motion and interaction
- **Lucide React** for icons

---

## What I built

- A **dark mode** dashboard with deep background tones and subtle glows
- A **Bento grid** layout with a collapsible sidebar and main content area
- A **Hero tile**, **dynamic course cards**, and an **activity tile**
- A **server-rendered data flow** using Supabase and React Server Components
- A **loading skeleton** while course data loads
- Friendly **empty / error states** for Supabase issues

---

## Architecture

- `app/page.tsx` defines the main dashboard structure and uses `Suspense` for async data loading.
- `components/CoursesGrid.tsx` is a **Server Component** that fetches course data from Supabase.
- `components/CoursesGridClient.tsx` is a **Client Component** that animates course cards with Framer Motion.
- `components/CourseCard.tsx` shows each course with a dynamic icon, title, and animated progress bar.
- `components/Sidebar.tsx` includes collapse behavior and layout animations for active navigation.

---

## Server / Client split

- **Server-side**: data loading from Supabase happens in `CoursesGrid.tsx`, keeping keys secure and rendering HTML on the server.
- **Client-side**: animated interactions and hover states live in client components like `CoursesGridClient.tsx` and `CourseCard.tsx`.

---

## How to run locally

1. Copy `.env.example` to `.env.local`
2. Add your Supabase URL and anon key in `.env.local`
3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

---

## Deployment notes

- `.env.local` should never be committed.
- `.env.example` contains placeholder values and is safe to include in the repo.
- A successful Vercel deployment should use environment variables from the Vercel dashboard.

---

## What this challenge covers

- Live data from Supabase
- App Router + server components
- Tailwind + dark theme styling
- Framer Motion animations with spring physics
- Semantic, accessible markup
- Responsive behavior across desktop, tablet, and mobile

---

## Improvements made

- Replaced static fallback course data with live Supabase fetch
- Added clear error UI for connection or table issues
- Kept `.env.local` out of version control
- Added friendly loading skeletons for a polished experience

---
## Live Links:

## Github link:
[ https://github.com/vani-1705/learning-dashboard ]

## Live Demo link:
[ http://learning-dashboard-zeta-ten.vercel.app/ ]

---
