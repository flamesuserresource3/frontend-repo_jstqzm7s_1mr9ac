import { Scale, Shield, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Scale,
    title: 'Gestão de casos',
    desc: 'Organize cada processo com notas, tarefas, arquivos e linhas do tempo em uma visão centrada no assunto.',
  },
  {
    icon: FileText,
    title: 'Redação por IA',
    desc: 'Gere primeiros rascunhos elegantes de contratos, petições e cartas — sempre editáveis e auditáveis.',
  },
  {
    icon: Shield,
    title: 'Segurança & compliance',
    desc: 'SOC 2, GDPR, criptografia em repouso e em trânsito. Permissões granulares e trilhas de auditoria.',
  },
  {
    icon: Clock,
    title: 'Tempo & faturação',
    desc: 'Registre horas, crie faturas e aceite pagamentos online com suporte a contas fiduciárias.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      {/* soft gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Feito para equipes jurídicas modernas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-neutral-600 max-w-2xl mx-auto"
          >
            Simples na superfície, poderoso por dentro. Tudo o que você precisa para administrar seu escritório com fluidez.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(200px_100px_at_top_left,rgba(0,0,0,0.05),transparent)]" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
