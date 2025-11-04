import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px w-full bg-neutral-200/80" />
    </div>
  );
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
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Preços simples e transparentes</h2>
            <p className="mt-4 text-neutral-600">Comece grátis e evolua quando sua equipe estiver pronta. Sem taxas ocultas.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_100px_at_top_left,rgba(0,0,0,0.05),transparent)]" />
              <p className="relative text-sm font-medium">Solo</p>
              <p className="relative mt-2 text-4xl font-semibold tracking-tight">$29<span className="text-base font-normal text-neutral-500">/mês</span></p>
              <ul className="relative mt-6 space-y-3 text-sm text-neutral-600">
                <li>Todos os recursos essenciais</li>
                <li>Portal seguro para clientes</li>
                <li>Suporte por e-mail</li>
              </ul>
              <a href="#" className="relative mt-8 inline-flex rounded-full bg-black text-white px-5 py-2 text-sm font-medium">Escolher plano</a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 text-white p-8 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(220px_110px_at_top_left,rgba(255,255,255,0.06),transparent)]" />
              <p className="relative text-sm font-medium">Firm</p>
              <p className="relative mt-2 text-4xl font-semibold tracking-tight">$79<span className="text-base font-normal text-neutral-400">/usuário/mês</span></p>
              <ul className="relative mt-6 space-y-3 text-sm text-neutral-300">
                <li>Tudo do Solo</li>
                <li>Perfis e permissões</li>
                <li>Suporte prioritário</li>
              </ul>
              <a href="#" className="relative mt-8 inline-flex rounded-full bg-white text-neutral-900 px-5 py-2 text-sm font-medium">Escolher plano</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
