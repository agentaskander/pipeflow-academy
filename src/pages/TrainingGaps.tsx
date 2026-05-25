import { DemoCard } from '../components/PublicDemo';
import { readinessExamples } from '../data/publicDemo';

export default function TrainingGaps() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Training gaps</p><h1>Public next-step examples</h1><p className="lede">Demo cards show learner progression concepts with synthetic language, not proprietary assessment or assessment internals.</p></div></div>
      <div className="grid three">
        {readinessExamples.map(([title, text]) => <DemoCard key={title} title={title} label="Readiness concept" text={text} />)}
      </div>
    </section>
  );
}
