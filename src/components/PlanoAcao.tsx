import { Smartphone, Target, Users, ExternalLink, ArrowRight } from 'lucide-react'

const movimentos = [
  {
    icon: Smartphone,
    badge: 'URGENTE — SEM. 1',
    badgeColor: 'bg-red-100 text-red-700',
    title: 'Ativar Presença Digital',
    impact: 'Visibilidade imediata no Google',
    desc: 'GMB criado em 15/05 mas não otimizado. Mensagem automática WA Business incorreta. Instagram @akijardins sem estratégia. Três correções de alta visibilidade com impacto imediato.',
    steps: [
      'Otimizar GMB: fotos reais, descrição com "jardinagem Rio do Sul SC", link WA e site',
      'Corrigir mensagem automática WA Business (texto atual passa mensagem errada)',
      'Instagram @akijardins: primeiros 3 posts corporativos — Fundisul como âncora de credibilidade',
    ],
  },
  {
    icon: Target,
    badge: 'PRIORIDADE — SEM. 2-3',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Construir Prova Social',
    impact: '+credibilidade B2B instantânea',
    desc: 'Fundisul é âncora — usar como case documentado. Solicitar depoimento formal. Fotografar o jardim da empresa como live case no Instagram e no site.',
    steps: [
      'Solicitar depoimento Fundisul: gestor responsável pelo contrato de manutenção',
      'Fotografar antes/depois da próxima manutenção Fundisul — documentar em alta qualidade',
      'Integrar site aki-jardins-digital.lovable.app no GMB e Instagram como link único',
    ],
  },
  {
    icon: Users,
    badge: 'PARALELO — ATÉ 15/06',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    title: 'Prospectar Ativamente',
    impact: 'Meta R$30.000/mês em 12m',
    desc: 'Lista 20 empresas de Rio do Sul e região. Industriais, condomínios alto padrão, hospitais e universidades. Fundisul como referência de abertura em todas as abordagens.',
    steps: [
      'Listar 20 alvos: industriais + condomínios alto padrão + Hospital Regional + UNIDAVI',
      'Abordar 3 empresas/semana com script que menciona Fundisul como cliente ativo',
      'Shopping Rio Sul e empresas do polo industrial como expansão natural da carteira',
    ],
  },
]

const projecoes = [
  { situacao: 'Hoje (mai/2026)',               receita: '~R$ 3.000',        variacao: '—',      highlight: false },
  { situacao: 'Após 1ª prospecção ativa',      receita: 'R$ 6.000–8.000',   variacao: '+150%',  highlight: false },
  { situacao: '+ 1 contrato industrial novo',  receita: 'R$ 12.000+',       variacao: '+300%',  highlight: false },
  { situacao: '+ 2 contratos condomínio',      receita: 'R$ 18.000–20.000', variacao: '+500%',  highlight: false },
  { situacao: 'Meta 12 meses — Selva Premium', receita: 'R$ 30.000',        variacao: '+900%',  highlight: true  },
  { situacao: 'Empresa estruturada (escala)',   receita: 'R$ 30.000+',       variacao: '+900%+', highlight: false },
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
            <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Sessões 1 + 2 — 13/05 e 14/05/2026</p>
            <h3 className="text-white font-bold text-xl">Três movimentos para R$ 30.000/mês — empresa sólida, expansão digital</h3>
          </div>
          <a href="https://drive.google.com/drive/folders/1SRtvql2L6jnXuaMTqisVUNdX1CnxXlkz"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-forest-900 font-bold px-4 py-2 rounded-xl text-sm transition-colors shrink-0">
            Drive AKI Jardins <ExternalLink size={12} />
          </a>
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
