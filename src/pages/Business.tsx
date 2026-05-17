import { Badge, Card, PageHeader } from '../components/UI';
import { businessFramework } from '../data/curriculum';

export default function Business() {
  return (
    <>
      <PageHeader eyebrow="Business growth" title="Contractor operations and workforce expansion">
        Business tracks support employer onboarding, apprenticeships, paid cohorts, continuing education, partnerships, and contractor operations.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 xl:px-10">
        {businessFramework.map((item) => <Card key={item}><Badge>growth model</Badge><h2 className="mt-4 text-xl font-black">{item}</h2><p className="mt-3 text-stone-700">Package curriculum, checklists, reporting, and skill development for businesses and employers.</p></Card>)}
      </section>
    </>
  );
}
