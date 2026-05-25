import { DemoCard } from '../components/PublicDemo';
import { skillGraphExamples } from '../data/publicDemo';

export default function SkillsGraph() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Skills graph</p><h1>Public training pathway map</h1><p className="lede">The demo skill graph shows high-level learning categories and sanitized examples without private assessment logic.</p></div></div>
      <div className="grid two">
        {skillGraphExamples.map((item) => <DemoCard key={item.title} title={item.title} label={item.label} text={item.text} items={item.items} />)}
      </div>
    </section>
  );
}
