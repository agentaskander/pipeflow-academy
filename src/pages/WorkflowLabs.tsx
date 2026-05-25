import { DemoCard } from '../components/PublicDemo';
import { skillGraphExamples } from '../data/publicDemo';

export default function WorkflowLabs() {
  return (
    <section className="page">
      <div className="section-header"><div><p className="eyebrow">Workflow labs</p><h1>Practical demo flows</h1><p className="lede">Each lab uses public, synthetic examples for tools, safety reminders, documentation, and instructor review.</p></div></div>
      <div className="grid two">{skillGraphExamples.map((item) => <DemoCard key={item.title} title={item.title} label="Lab concept" text={item.text} items={item.items} />)}</div>
    </section>
  );
}
