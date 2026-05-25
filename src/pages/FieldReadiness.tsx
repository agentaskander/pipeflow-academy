import { DemoCard } from '../components/PublicDemo';
import { readinessExamples } from '../data/publicDemo';

export default function FieldReadiness() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Field readiness</p><h1>Apprentice ramp-up concepts</h1><p className="lede">Readiness is shown as public milestones and supervised practice concepts, not a private score or formula.</p></div></div>
      <div className="grid three">{readinessExamples.map(([title, text]) => <DemoCard key={title} title={title} label="Milestone" text={text} />)}</div>
    </section>
  );
}
