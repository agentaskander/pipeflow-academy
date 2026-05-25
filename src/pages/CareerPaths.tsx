import { DemoCard } from '../components/PublicDemo';
import { careerPathExamples } from '../data/publicDemo';

export default function CareerPaths() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Career paths</p><h1>From student to infrastructure operator</h1><p className="lede">Public career cards show training direction, skill growth, and role concepts using sanitized examples.</p></div></div>
      <div className="grid two">{careerPathExamples.map(([title, text]) => <DemoCard key={title} title={title} label="Career path" text={text} />)}</div>
    </section>
  );
}
