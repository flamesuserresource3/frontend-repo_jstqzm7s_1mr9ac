import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient flair */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 size-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-white to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Content */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div initial="hidden" animate="show" variants={container}>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/80 px-3 py-1 text-xs text-neutral-700 shadow-sm backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Nova: Redação assistida por IA
              </div>
              <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
                Gestão jurídica com estética e precisão
              </h1>
              <p className="mt-6 text-neutral-600 text-lg leading-relaxed max-w-2xl">
                Centralize casos, documentos, tempos e faturação em um fluxo elegante e intuitivo. Segurança de nível empresarial com experiência digna de Dribbble.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow hover:shadow-xl transition-all"
                >
                  Começar avaliação
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition-all"
                >
                  Ver recursos
                </a>
              </div>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-600">
                {[
                  'SOC 2 & GDPR',
                  'Workspace por assunto',
                  'Criptografia bancária',
                  'Suporte 24/7',
                ].map((item) => (
                  <motion.li key={item} className="inline-flex items-center gap-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <Check className="h-4 w-4 text-emerald-600" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 3D Spline Scene */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-neutral-200/60 bg-white/50 backdrop-blur">
              {/* Light sheen */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35),transparent_40%)]" />
              <Spline
                scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 left-6 right-6 mx-auto max-w-sm"
            >
              <div className="rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur px-4 py-3 shadow-sm">
                <p className="text-sm text-neutral-700">
                  Interaja com a gota digital — mova o mouse e veja como ela responde.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
