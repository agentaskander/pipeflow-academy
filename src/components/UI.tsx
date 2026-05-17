import type { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="training-grid border-b border-stone-200 px-5 py-16 xl:px-10">
      <div className="mx-auto max-w-7xl">
        {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-widest text-academy">{eyebrow}</p>}
        <h1 className="max-w-5xl text-4xl font-black tracking-normal text-ink md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">{children}</p>
      </div>
    </section>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <article className={`rounded border border-stone-200 bg-white p-6 shadow-sm ${className}`}>{children}</article>;
}

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'warn' | 'dark' }) {
  const classes = tone === 'warn' ? 'bg-amber-100 text-amber-800' : tone === 'dark' ? 'bg-ink text-white' : 'bg-teal-50 text-academy';
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${classes}`}>{children}</span>;
}

export function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded border border-amber-300 bg-amber-50 p-4 text-amber-900">
      <AlertTriangle className="shrink-0" size={22} />
      <p className="leading-7">{children}</p>
    </div>
  );
}
