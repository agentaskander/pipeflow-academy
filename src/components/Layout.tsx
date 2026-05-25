import { GraduationCap, ShieldCheck } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  ['/', 'Home'],
  ['/learn', 'Learn'],
  ['/certifications', 'Certifications'],
  ['/certification-progress', 'Progress'],
  ['/skills', 'Skills'],
  ['/skills-graph', 'Skills Graph'],
  ['/field-readiness', 'Readiness'],
  ['/training-gaps', 'Gaps'],
  ['/workflow-labs', 'Workflow Labs'],
  ['/career-paths', 'Career Paths'],
  ['/apprenticeships', 'Apprenticeships'],
  ['/electrical', 'Electrical'],
  ['/plumbing', 'Plumbing'],
  ['/hvac', 'HVAC'],
  ['/datacenter', 'Datacenter'],
  ['/field-labs', 'Field Labs'],
  ['/ai-tools', 'AI Tools'],
  ['/instructors', 'Instructors'],
  ['/business', 'Business'],
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-ink">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 px-5 py-4 backdrop-blur xl:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <a href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded bg-academy text-white"><GraduationCap size={24} /></span>
            <span>
              <strong className="block text-lg">PipeFlow Academy</strong>
              <small className="text-stone-600">Training the Next Generation of Infrastructure Professionals</small>
            </span>
          </a>
          <nav className="flex gap-2 overflow-x-auto pb-1 text-sm" aria-label="Primary navigation">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
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
          <p>pipeflowacademy.com · public education demo for training paths, certifications, and skill graph concepts.</p>
          <span className="flex items-center gap-2"><ShieldCheck size={18} /> Public demo surface. Proprietary ontology, scoring, orchestration, and private operational datasets are not exposed.</span>
        </div>
      </footer>
    </div>
  );
}
