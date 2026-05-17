import { Badge, Card, PageHeader } from '../components/UI';

const instructors = ['Master plumber instructor', 'Electrical safety instructor', 'HVAC cooling instructor', 'Datacenter facilities instructor'];

export default function Instructors() {
  return (
    <>
      <PageHeader eyebrow="Instructor profiles" title="Real-world instructors and reviewers">
        Instructor profiles are placeholders for trade experts, field supervisors, safety reviewers, and employer mentors.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {instructors.map((instructor) => <Card key={instructor}><Badge>profile</Badge><h2 className="mt-4 text-xl font-black">{instructor}</h2><p className="mt-3 text-stone-700">Owns lesson review, practical signoff standards, and safety escalation guidance.</p></Card>)}
      </section>
    </>
  );
}
