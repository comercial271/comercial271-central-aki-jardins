import { ClipboardList, BarChart2, FileText, Video, ExternalLink, Brain } from 'lucide-react'

const cards = [
  {
    icon: ClipboardList,
    badge: 'FORMULÁRIO ✅',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'Diagnóstico 360° — Perfil Completo',
    desc: 'Tempo de mercado, faturamento, equipe, reserva financeira, presença digital e trava central identificada. Clientes chegam sem negociar preço — diferencial raro.',
    link: { label: 'Abrir', href: 'https://docs.google.com/document/d/11CnwqxHJuKfW-GxmwFkRrMmkYO2Kcb4hHK3S0k9KcZw' },
  },
  {
    icon: BarChart2,
    badge: '21/05/2026',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Orçamento Belvedere — Lucro Zerado',
    desc: 'Implantação paisagística R$6.299,69 calculada corretamente — mas campo "Lucro: 0%". Com 25% de margem seria R$8.500. Retomar contato com o síndico.',
    link: { label: 'Ver PDF', href: 'https://drive.google.com/file/d/1jAWLele2a4U-X4alZUFpvi2PsKYtvJot' },
  },
  {
    icon: FileText,
    badge: 'SESSÃO 1 — 21/05',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Ata da Sessão 1 (Gemini)',
    desc: 'Transição para R$10.500/mês, diária R$800, abertura de MEI, GMB e Instagram Alexandre Jardins, mapeamento de clientes até 29/05.',
    link: { label: 'Abrir ata', href: 'https://docs.google.com/document/d/1jK0O7Z6XJ6PZu9S47LAc1BeOgW6wR9ahZtQ-wzSJvs0' },
  },
  {
    icon: Video,
    badge: 'GRAVAÇÃO — 21/05',
    badgeColor: 'bg-gold-100 text-yellow-700',
    title: 'Gravação da Sessão 1',
    desc: 'Formalização, precificação com margem, digitalização (GMB + Instagram), condomínios Itatiba como alvo principal.',
    link: { label: 'Assistir', href: 'https://drive.google.com/file/d/1QJKZ9dQZeFKySfg4N_ks128-15FqdYDY' },
  },
]

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="py-20 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Radiografia do negócio</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Meu Diagnóstico</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-forest-100 p-2 rounded-xl shrink-0">
                    <Icon size={18} className="text-forest-700" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-forest-900 text-sm mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
                <a href={c.link.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-forest-700 hover:text-forest-900 text-sm font-semibold transition-colors w-fit">
                  {c.link.label} <ExternalLink size={12} />
                </a>
              </div>
            )
          })}
        </div>

        <div className="bg-forest-800 rounded-2xl p-6 border-l-4 border-gold-500">
          <div className="flex items-start gap-3">
            <Brain size={20} className="text-gold-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-bold mb-1">Trava Central Identificada</p>
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="text-gold-500 font-semibold">Estabilidade pública como âncora psicológica</span> — sabe calcular custo, trava no momento de colocar margem. Prova: orçamento Belvedere com lucro literal de 0%. Segurança do CLT vira justificativa para não crescer.
              </p>
              <p className="text-gold-400 text-sm italic mt-3">
                A decisão não é "sair do CLT" — é chegar em R$10.500/mês e deixar o número decidir por você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
