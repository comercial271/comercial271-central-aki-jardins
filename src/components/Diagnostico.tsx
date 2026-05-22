import { ClipboardList, BarChart2, FileText, Video, ExternalLink, Brain } from 'lucide-react'

const cards = [
  {
    icon: ClipboardList,
    badge: 'FORMULÁRIO ✅',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'Diagnóstico 360° — Perfil Completo',
    desc: 'Empresa LTDA ativa, Simples Nacional, Fundisul como cliente corporativo, 13+ anos de mercado. Experiência técnica sólida — trava está no posicionamento digital e prospecção ativa.',
    link: { label: 'Abrir no Drive', href: 'https://drive.google.com/drive/folders/1SRtvql2L6jnXuaMTqisVUNdX1CnxXlkz' },
  },
  {
    icon: FileText,
    badge: 'SESSÃO 1 — 13/05',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Sessão Individual — Digitalização e Contratos',
    desc: 'Diagnóstico do GMB criado (15/05), portfólio inexistente digitalmente, WhatsApp com mensagem automática incorreta, ausência de contratos padrão. Fundisul como alavanca de credibilidade.',
    link: { label: 'Ver no Drive', href: 'https://drive.google.com/drive/folders/1SRtvql2L6jnXuaMTqisVUNdX1CnxXlkz' },
  },
  {
    icon: Video,
    badge: 'SESSÃO 2 — 14/05',
    badgeColor: 'bg-gold-100 text-yellow-700',
    title: 'Sessão Coletiva — Mentalidade Estratégica',
    desc: 'Modelo mental de empresa, precificação com margem real, gerador de propostas com IA, posicionamento como LTDA corporativa vs. jardineiro autônomo.',
    link: { label: 'Ver no Drive', href: 'https://drive.google.com/drive/folders/1SRtvql2L6jnXuaMTqisVUNdX1CnxXlkz' },
  },
  {
    icon: BarChart2,
    badge: 'PUBLICADO ✅',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Site AKI Jardins — Publicado',
    desc: 'Site institucional publicado em 15/05/2026. Apresentação da empresa, serviços e contato. Integrar no GMB e Instagram como link principal.',
    link: { label: 'Ver site', href: 'https://aki-jardins-digital.lovable.app' },
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
                <span className="text-gold-500 font-semibold">Empresa sólida, cliente corporativo, 13 anos de experiência — mas posicionamento digital zero.</span> Fundisul é âncora financeira e risco ao mesmo tempo: depender de um único cliente expõe a operação. O próximo contrato não vai chegar por indicação — vai te encontrar no Google. Ou não vai te encontrar.
              </p>
              <p className="text-gold-400 text-sm italic mt-3">
                A janela de vantagem em Rio do Sul/SC está aberta agora. Nenhum concorrente local domina o digital. Você chega primeiro ou chega tarde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
