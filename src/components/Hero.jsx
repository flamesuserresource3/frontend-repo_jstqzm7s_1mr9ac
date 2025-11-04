import { ArrowRight, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              New: AI-assisted document drafting
            </div>
            <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Modern practice management for law firms
            </h1>
            <p className="mt-6 text-neutral-600 text-lg leading-relaxed max-w-2xl">
              CaseFlow brings intake, case files, time tracking, billing, and secure client communication together in one elegant, compliant workspace.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow hover:shadow-lg transition-all"
              >
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition-all"
              >
                See features
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-600">
              {[
                'SOC 2 & GDPR compliant',
                'Matter-centric workspace',
                'Bank-grade encryption',
                '24/7 support for your team',
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-neutral-100 to-transparent blur-2xl" aria-hidden />
              <div className="relative rounded-xl overflow-hidden ring-1 ring-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1974&auto=format&fit=crop"
                  alt="Dashboard preview"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-neutral-600">
                {['Matters', 'Tasks', 'Invoices'].map((tag) => (
                  <div key={tag} className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
