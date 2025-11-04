import { Scale, Shield, FileText, Clock } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Matter management',
    desc: 'Organize every case with notes, tasks, files, and timelines in a single matter-centric view.',
  },
  {
    icon: FileText,
    title: 'AI drafting',
    desc: 'Generate clean first drafts of contracts, letters, and filings—always editable and audit-ready.',
  },
  {
    icon: Shield,
    title: 'Security & compliance',
    desc: 'SOC 2, GDPR, encryption at rest and in transit. Granular permissions and audit trails.',
  },
  {
    icon: Clock,
    title: 'Time & billing',
    desc: 'Track time, create invoices, and accept online payments with trust accounting support.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for modern legal teams</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Simple on the surface, powerful under the hood. Everything you need to run your practice smoothly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
