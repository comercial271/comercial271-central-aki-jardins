import { Smartphone, Target, Users, ExternalLink, ArrowRight } from 'lucide-react'

const movimentos = [
  {
    icon: Smartphone,
    badge: 'URGENTE — SEM. 1',
    badgeColor: 'bg-red-100 text-red-700',
    title: 'Formalizar e Digitalizar',
    impact: 'Credibilidade imediata',
    desc: 'Abrir MEI (CNPJ), criar Google Meu Negócio, configurar WhatsApp Business e Instagram Alexandre Jardins — do zero.',
    steps: [
      'Abrir MEI em gov.br/mei (gratuito, 15 min)',
      'Criar conta Google Meu Negócio com região Itatiba/SP',
      'WhatsApp Business: chip dedicado, nome "Alexandre Jardins"',
    ],
  },
  {
    icon: Target,
    badge: 'PRIORIDADE — SEM. 2-3',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Precificar com Margem',
    impact: '+R$ 2.500–4.000/mês',
    desc: 'Reajustar diária para R$800 em todos os clientes atuais. Mapear e enviar lista de clientes até 29/05.',
    steps: [
      'Mapear todos os clientes desde janeiro (planilha)',
      'Reajustar preços: R$800/dia como piso — sem exceção',
      'Retomar Belvedere: contatar síndico com proposta + margem',
    ],
  },
  {
    icon: Users,
    badge: 'PARALELO — ATÉ 15/06',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    title: 'Prospectar Condomínios',
    impact: 'Meta breakeven R$10.500',
    desc: 'Ville Chamonix e Itatiba Country Club como alvos-chave. Bosque Di Fiori como canal de indicação.',
    steps: [
      'Abordar síndico Ville Chamonix (lotes 1.500+ m²)',
      'Itatiba Country Club: contato via portaria',
      'Visitar Bosque Di Fiori pessoalmente — proposta de parceria',
    ],
  },
]

const projecoes = [
  { situacao: 'Hoje (mai/2026)',              receita: '<R$ 3.000',    variacao: '—',     highlight: false },
  { situacao: 'Após reajuste de diária',      receita: 'R$ 4.500–5.000', variacao: '+65%', highlight: false },
  { situacao: '+ Belvedere (com margem)',     receita: 'R$ 6.000–6.500', variacao: '+120%', highlight: false },
  { situacao: '+ 1 condomínio contrato',      receita: 'R$ 8.500–9.000', variacao: '+200%', highlight: false },
  { situacao: 'Breakeven CLT (meta)',         receita: 'R$ 10.500',    variacao: '+250%', highlight: true  },
  { situacao: 'Meta 12 meses',               receita: 'R$ 15.000+',   variacao: '+400%', highlight: false },
]

export default function PlanoAcao() {
  return (
    <section id="plano" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Roteiro 30–90 dias</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Plano de Ação</h2>
        </div>

        <div className="bg-forest-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Gerado em 21/05/2026</p>
            <h3 className="text-white font-bold text-xl">Três movimentos para R$ 10.500/mês — sair do CLT com segurança</h3>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a href="https://docs.google.com/document/d/1jK0O7Z6XJ6PZu9S47LAc1BeOgW6wR9ahZtQ-wzSJvs0"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-forest-900 font-bold px-4 py-2 rounded-xl text-sm transition-colors">
              Ata da Sessão <ExternalLink size={12} />
            </a>
            <a href="https://drive.google.com/drive/folders/1ANWzuzZwS_mo13FQWIjpUHhTxr9Fcyvj"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-white/30 hover:border-white text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              Tarefas <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {movimentos.map((m, i) => {
            const Icon = m.icon
            return (
              <div key={i} className="bg-[#F4F6F0] rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-forest-800 p-2 rounded-xl">
                    <Icon size={16} className="text-gold-500" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${m.badgeColor}`}>{m.badge}</span>
                </div>
                <div>
                  <h3 className="font-bold text-forest-900">{m.title}</h3>
                  <p className="text-gold-600 font-bold text-lg mt-0.5">{m.impact}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {m.steps.map((s, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <ArrowRight size={13} className="text-forest-500 shrink-0 mt-0.5" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-forest-800 text-white">
                <th className="text-left px-5 py-3 font-semibold rounded-tl-2xl">Situação</th>
                <th className="text-right px-5 py-3 font-semibold">Receita Mensal</th>
                <th className="text-right px-5 py-3 font-semibold rounded-tr-2xl">Variação</th>
              </tr>
            </thead>
            <tbody>
              {projecoes.map((p, i) => (
                <tr key={i} className={`border-t border-gray-100 ${p.highlight ? 'bg-gold-100' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className={`px-5 py-3 ${p.highlight ? 'font-bold text-forest-900' : 'text-gray-600'}`}>{p.situacao}</td>
                  <td className={`px-5 py-3 text-right font-bold ${p.highlight ? 'text-forest-800 text-base' : 'text-gray-800'}`}>{p.receita}</td>
                  <td className={`px-5 py-3 text-right font-semibold ${p.highlight ? 'text-forest-700' : 'text-gray-400'}`}>{p.variacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
