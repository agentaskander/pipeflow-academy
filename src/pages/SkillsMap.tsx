import { DemoCard } from '../components/PublicDemo';
import { skillMapExamples } from '../data/publicDemo';

export default function SkillsMap() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Skills map</p><h1>Public training pathway map</h1><p className="lede">The demo skill map shows high-level learning categories and sanitized examples without private assessment logic.</p></div></div>
      <div className="grid two">
        {skillMapExamples.map((item) => <DemoCard key={item.title} title={item.title} label={item.label} text={item.text} items={item.items} />)}
      </div>
    </section>
  );
}
