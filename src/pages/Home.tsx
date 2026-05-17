import { ArrowRight, Award, BookOpen, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, Card, Warning } from '../components/UI';
import { certifications, courses } from '../data/curriculum';

export default function Home() {
  return (
    <>
      <section className="training-grid px-5 py-20 xl:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge tone="dark">pipeflowacademy.com</Badge>
            <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-normal md:text-7xl">
              Training the Next Generation of Infrastructure Professionals.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-700">
              Practical training, certifications, apprenticeships, field labs, and AI-assisted learning for plumbing, electrical, HVAC, datacenter, and facilities careers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded bg-academy px-5 py-3 font-bold text-white" to="/learn">Start learning <ArrowRight size={18} /></Link>
              <Link className="rounded border border-stone-300 px-5 py-3 font-bold" to="/certifications">View certifications</Link>
              <Link className="rounded border border-stone-300 px-5 py-3 font-bold" to="/field-labs">Field labs</Link>
            </div>
          </div>
          <Card>
            <div className="grid gap-4">
              <div className="flex items-center gap-3"><BookOpen className="text-academy" /><strong>{courses.length} full training programs</strong></div>
              <div className="flex items-center gap-3"><Award className="text-academy" /><strong>{certifications.length} certification tracks</strong></div>
              <div className="flex items-center gap-3"><BriefcaseBusiness className="text-academy" /><strong>Apprentice, contractor, and employer pathways</strong></div>
            </div>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10 xl:px-10">
        <Warning>Certificates are training credentials unless/until aligned with local licensing, apprenticeship, state, county, or municipal trade requirements.</Warning>
      </section>
    </>
  );
}
