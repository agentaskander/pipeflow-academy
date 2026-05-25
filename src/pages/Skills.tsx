import { Badge, Card, PageHeader } from '../components/UI';
import { courses, skillGroups } from '../data/curriculum';

export default function Skills() {
  return (
    <>
      <PageHeader eyebrow="Skills explorer" title="Practical skill catalog for training">
        Skills connect lessons, checklists, quizzes, tools, safety warnings, and certification readiness.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {skillGroups.map((group) => (
          <Card key={group}>
            <Badge>{group}</Badge>
            <div className="mt-4 flex flex-wrap gap-2">
              {[...new Set(courses.flatMap((course) => course.skillMapping))].filter((skill) => skill.toLowerCase().includes(group.split('/')[0].toLowerCase()) || group === 'Safety' || group === 'Diagnostics').slice(0, 6).map((skill) => <Badge key={skill}>{skill}</Badge>)}
            </div>
          </Card>
        ))}
      </section>
    </>
  );
}
