import { DemoCard } from '../components/PublicDemo';
import { certificationExamples } from '../data/publicDemo';

export default function CertificationProgress() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Certification progress</p><h1>Public credential pathway examples</h1><p className="lede">Track sample training paths and certification concepts without exposing private requirements, scoring, or learner records.</p></div></div>
      <div className="grid two">{certificationExamples.map(([title, text]) => <DemoCard key={title} title={title} label="Certificate concept" text={text} />)}</div>
    </section>
  );
}
