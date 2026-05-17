import { Badge, Card, PageHeader } from '../components/UI';

const paths = ['Entry helper', 'Apprentice', 'Technician trainee', 'Trade specialist', 'Lead technician', 'Facilities operator'];

export default function Apprenticeships() {
  return (
    <>
      <PageHeader eyebrow="Career pathways" title="Apprenticeship and workforce pathways">
        Structured paths for new workers to build safety habits, trade foundations, practical signoffs, and employer readiness.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-3 xl:px-10">
        {paths.map((path, index) => <Card key={path}><Badge>step {index + 1}</Badge><h2 className="mt-4 text-xl font-black">{path}</h2><p className="mt-3 text-stone-700">Training milestones, supervised practice, quizzes, and field-ready behavior standards.</p></Card>)}
      </section>
    </>
  );
}
