import { Badge, Card, PageHeader } from '../components/UI';
import { courses } from '../data/curriculum';

export default function Hvac() {
  const items = courses.filter((course) => course.track === 'hvac');
  return (
    <>
      <PageHeader eyebrow="HVAC/cooling" title="HVAC and cooling training">Cooling fundamentals, thermal baselines, airflow, hydronics, preventive maintenance, and field diagnostics.</PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {items.map((course) => <Card key={course.id}><Badge>{course.level}</Badge><h2 className="mt-4 text-2xl font-black">{course.title}</h2><p className="mt-3 text-stone-700">{course.summary}</p></Card>)}
      </section>
    </>
  );
}
