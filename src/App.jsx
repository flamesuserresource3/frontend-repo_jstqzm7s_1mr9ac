import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function Divider() {
  return <div className="mx-auto max-w-7xl px-6"><div className="h-px w-full bg-neutral-200" /></div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Features />
        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-4 text-neutral-600">Start free, upgrade when your team is ready. No hidden fees.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium">Solo</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight">$29<span className="text-base font-normal text-neutral-500">/mo</span></p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                <li>All core features</li>
                <li>Secure client portal</li>
                <li>Email support</li>
              </ul>
              <a href="#" className="mt-8 inline-flex rounded-full bg-black text-white px-5 py-2 text-sm font-medium">Choose plan</a>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-900 text-white p-8 shadow-sm">
              <p className="text-sm font-medium">Firm</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight">$79<span className="text-base font-normal text-neutral-400">/user/mo</span></p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                <li>Everything in Solo</li>
                <li>Roles & permissions</li>
                <li>Priority support</li>
              </ul>
              <a href="#" className="mt-8 inline-flex rounded-full bg-white text-neutral-900 px-5 py-2 text-sm font-medium">Choose plan</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
