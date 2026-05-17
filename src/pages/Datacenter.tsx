import { Badge, Card, PageHeader } from '../components/UI';
import { courses } from '../data/curriculum';

const topics = ['Cooling systems', 'Thermal management', 'Chilled water systems', 'Pumps', 'Redundancy', 'Uptime', 'Emergency response', 'Facilities operations', 'Electrical distribution', 'Maintenance workflows'];

export default function Datacenter() {
  const items = courses.filter((course) => course.track === 'datacenter');
  return (
    <>
      <PageHeader eyebrow="AI Infrastructure Systems" title="Datacenter infrastructure training">Specialized training for AI-era infrastructure systems and datacenter cooling operations.</PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 lg:grid-cols-2 xl:px-10">
        {items.map((course) => <Card key={course.id}><Badge>{course.level}</Badge><h2 className="mt-4 text-2xl font-black">{course.title}</h2><p className="mt-3 text-stone-700">{course.summary}</p></Card>)}
        <Card><Badge>topics</Badge><div className="mt-4 flex flex-wrap gap-2">{topics.map((topic) => <Badge key={topic}>{topic}</Badge>)}</div></Card>
      </section>
    </>
  );
}
