import { Badge, Card, PageHeader, Warning } from '../components/UI';
import { certifications, courses } from '../data/curriculum';

const metrics = [
  ['Programs', String(courses.length)],
  ['Modules', String(courses.flatMap((course) => course.modules).length)],
  ['Lessons', String(courses.flatMap((course) => course.modules.flatMap((module) => module.lessons)).length)],
  ['Certifications', String(certifications.length)],
  ['Practical labs', '8'],
  ['Employer pathways', '4'],
];

export default function Admin() {
  return (
    <>
      <PageHeader eyebrow="School administration" title="Academy operations dashboard">
        Mock dashboard for students, courses, certifications, labs, instructors, business opportunities, and AI learning tools.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-3 xl:px-10">
        {metrics.map(([label, value]) => <Card key={label}><Badge>{label}</Badge><strong className="mt-3 block text-4xl">{value}</strong></Card>)}
        <div className="md:col-span-3"><Warning>No backend, authentication, learner records, payment system, or production hosting has been added.</Warning></div>
      </section>
    </>
  );
}
