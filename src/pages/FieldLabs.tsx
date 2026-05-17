import { Badge, Card, PageHeader } from '../components/UI';
import { courses } from '../data/curriculum';

export default function FieldLabs() {
  return (
    <>
      <PageHeader eyebrow="Practical simulation labs" title="Field labs and hands-on checkoffs">
        Labs translate lessons into tool practice, diagnostic stations, scenario checklists, instructor signoff, and safety review.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {courses.slice(0, 6).map((course) => <Card key={course.id}><Badge>{course.track}</Badge><h2 className="mt-4 text-xl font-black">{course.title} lab</h2><p className="mt-3 text-stone-700">{course.modules[0].practicalChecklist.join(', ')}</p></Card>)}
      </section>
    </>
  );
}
