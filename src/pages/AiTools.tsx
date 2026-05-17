import { Badge, Card, PageHeader } from '../components/UI';
import { aiLearningTools } from '../data/curriculum';

export default function AiTools() {
  return (
    <>
      <PageHeader eyebrow="AI-assisted learning" title="Learning tools for manuals, photos, quizzes, and diagnostics">
        Future AI tools can help learners summarize manuals, identify equipment, practice diagnostics, generate quizzes, and map skill gaps.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {aiLearningTools.map((tool) => <Card key={tool}><Badge>AI tool</Badge><h2 className="mt-4 text-xl font-black">{tool}</h2><p className="mt-3 text-stone-700">Local-first concept mockup. No paid API or backend integration has been added.</p></Card>)}
      </section>
    </>
  );
}
