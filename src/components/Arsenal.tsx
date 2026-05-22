import { Zap, PlayCircle, Building, List, Star, FileText, FolderOpen, ExternalLink } from 'lucide-react'

const docs = [
  {
    icon: FileText,
    title: 'Ata da Sessão 1',
    desc: 'Transcrição completa + insights da sessão individual de diagnóstico (21/05/2026).',
    link: { label: 'Abrir', href: 'https://docs.google.com/document/d/1jK0O7Z6XJ6PZu9S47LAc1BeOgW6wR9ahZtQ-wzSJvs0' },
  },
  {
    icon: PlayCircle,
    title: 'Gravação da Sessão 1',
    desc: 'Vídeo completo da sessão 1 — diagnóstico, precificação e plano de saída do CLT.',
    link: { label: 'Abrir', href: 'https://drive.google.com/file/d/1QJKZ9dQZeFKySfg4N_ks128-15FqdYDY' },
  },
  {
    icon: List,
    title: 'Diagnóstico 360° Completo',
    desc: 'Análise de mercado Itatiba, concorrentes, condomínios-alvo e estratégia de entrada.',
    link: { label: 'Abrir', href: 'https://docs.google.com/document/d/11CnwqxHJuKfW-GxmwFkRrMmkYO2Kcb4hHK3S0k9KcZw' },
  },
  {
    icon: Building,
    title: 'Orçamento Belvedere',
    desc: 'PDF do orçamento enviado — base para renegociação com 25% de margem (~R$8.500).',
    link: { label: 'Abrir', href: 'https://drive.google.com/file/d/1jAWLele2a4U-X4alZUFpvi2PsKYtvJot' },
  },
  {
    icon: FolderOpen,
    title: 'Material da Mentoria',
    desc: 'Pasta com todos os materiais enviados pela Selva ao longo do programa.',
    link: { label: 'Abrir', href: 'https://drive.google.com/drive/folders/1rFWXAL_NznUe5AcmYzWx98W19qIx-x1C' },
  },
  {
    icon: Star,
    title: 'Tarefas e Acompanhamento',
    desc: 'Histórico de tarefas, checkpoints e evolução na mentoria.',
    link: { label: 'Abrir', href: 'https://drive.google.com/drive/folders/1ANWzuzZwS_mo13FQWIjpUHhTxr9Fcyvj' },
  },
]

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-20 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Ferramentas e documentos</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Seu Arsenal</h2>
        </div>

        <div className="bg-forest-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="bg-gold-500/20 p-3 rounded-xl shrink-0">
            <Zap size={24} className="text-gold-500" />
          </div>
          <div className="flex-1">
            <span className="inline-block bg-gold-500 text-forest-900 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-1.5">
              EXCLUSIVO SELVA PREMIUM
            </span>
            <h3 className="text-white font-bold text-lg">Gerador de Propostas Selva</h3>
            <p className="text-white/60 text-sm mt-0.5">Propostas profissionais em minutos — posiciona você como empresa, não autônomo</p>
          </div>
          <a href="https://geradordepropostaselva.lovable.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0">
            Abrir Gerador <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {docs.map((d, i) => {
            const Icon = d.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                <div className="bg-forest-100 p-2 rounded-xl shrink-0 mt-0.5">
                  <Icon size={15} className="text-forest-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-forest-900 text-sm leading-snug mb-0.5">{d.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2">{d.desc}</p>
                  <a href={d.link.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-forest-700 hover:text-forest-900 text-xs font-semibold transition-colors">
                    {d.link.label} <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3">
          <FolderOpen size={18} className="text-forest-600 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-forest-900 text-sm">Pasta Completa — Propostas e Portfólios</p>
            <p className="text-gray-400 text-xs">Todos os arquivos organizados por categoria</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1xPS3NLg9JR0q8smBiJylIkvvHKXBpwxK" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shrink-0">
            Abrir <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </section>
  )
}
