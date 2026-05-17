import { Badge, Card, PageHeader, Warning } from '../components/UI';
import { certifications, courses } from '../data/curriculum';

export default function Certifications() {
  return (
    <>
      <PageHeader eyebrow="Certification tracks" title="Stackable training credentials">
        Credentials map courses, quizzes, practical checkoffs, skill groups, safety warnings, and future employer reporting.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 xl:px-10">
        <Warning>Training credentials do not replace licensing, apprenticeship, state, county, or municipal requirements.</Warning>
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification) => (
            <Card key={certification}>
              <Badge>credential</Badge>
              <h2 className="mt-4 text-xl font-black">{certification}</h2>
              <p className="mt-3 text-stone-700">Required courses: {courses.filter((course) => course.certificationMapping.includes(certification)).map((course) => course.title).join(', ') || 'planned curriculum mapping'}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
