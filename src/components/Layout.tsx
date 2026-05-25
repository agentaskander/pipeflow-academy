import { GraduationCap, ShieldCheck } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { surface } from '../surface';

export default function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-ink">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 px-5 py-4 backdrop-blur xl:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <a href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded bg-academy text-white"><GraduationCap size={24} /></span>
            <span>
              <strong className="block text-lg">{surface.name}</strong>
              <small className="text-stone-600">{surface.tagline}</small>
            </span>
          </a>
          <nav className="flex gap-2 overflow-x-auto pb-1 text-sm" aria-label="Primary navigation">
            {surface.navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded px-3 py-2 ${isActive ? 'bg-academy text-white' : 'text-stone-700 hover:bg-stone-200'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="border-t border-stone-200 px-5 py-8 xl:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>{surface.domain} · {surface.footerDescription}</p>
          <div className="flex flex-col gap-2 md:items-end">
            <span className="flex items-center gap-2"><ShieldCheck size={18} /> {surface.safetyNote}</span>
            <a className="font-bold text-academy" href={surface.siblingSurface.localUrl}>
              Open {surface.siblingSurface.label} surface
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
