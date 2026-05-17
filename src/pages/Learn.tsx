import { Badge, Card, PageHeader } from '../components/UI';
import { courses } from '../data/curriculum';

export default function Learn() {
  return (
    <>
      <PageHeader eyebrow="Course catalog" title="Infrastructure training programs">
        Full seed programs include modules, lessons, practical checklists, quizzes, skill mapping, certification mapping, safety warnings, and required tools.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {courses.map((course) => (
          <Card key={course.id}>
            <div className="flex flex-wrap gap-2"><Badge>{course.track}</Badge><Badge>{course.level}</Badge></div>
            <h2 className="mt-4 text-2xl font-black">{course.title}</h2>
            <p className="mt-3 leading-7 text-stone-700">{course.summary}</p>
            <p className="mt-4 text-sm font-bold text-academy">{course.modules.length} modules · {course.modules.flatMap((module) => module.lessons).length} lessons</p>
            <div className="mt-4 flex flex-wrap gap-2">{course.requiredTools.map((tool) => <Badge key={tool}>{tool}</Badge>)}</div>
          </Card>
        ))}
      </section>
    </>
  );
}
