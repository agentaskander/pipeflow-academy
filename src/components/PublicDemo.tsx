import { Badge, Card } from './UI';

export function DemoCard({ title, label, text, items = [] }: { title: string; label: string; text: string; items?: string[] }) {
  return (
    <Card>
      <Badge>{label}</Badge>
      <h2 className="mt-4 text-xl font-black text-ink">{title}</h2>
      <p className="mt-3 leading-7 text-stone-700">{text}</p>
      {items.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((item) => <span className="rounded border border-stone-200 px-3 py-1 text-sm text-stone-700" key={item}>{item}</span>)}
        </div>
      )}
    </Card>
  );
}
