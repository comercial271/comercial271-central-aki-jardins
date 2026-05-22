import { useState } from 'react'
import { MapPin, MessageCircle, ShoppingBag, ChevronDown, ChevronUp, CheckCircle2, AlertTriangle, Lightbulb, ExternalLink } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step {
  n: number
  text: string
  tip?: string
  warn?: string
  bold?: string
}

interface Guide {
  id: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  badge: string
  badgeBg: string
  title: string
  subtitle: string
  tempo: string
  cta?: { label: string; href: string }
  steps: Step[]
  dica_final?: string
}

// ─── Guides data ──────────────────────────────────────────────────────────────

const guides: Guide[] = [
  {
    id: 'gmb',
    icon: MapPin,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    badge: 'Prioridade Máxima',
    badgeBg: 'bg-red-100 text-red-700',
    title: 'Google Meu Negócio',
    subtitle: 'Sua vitrine no Google. Quando alguém buscar "jardineiro Itatiba", você aparece. Gratuito.',
    tempo: '~15 minutos',
    cta: { label: 'Abrir Google Meu Negócio', href: 'https://business.google.com' },
    steps: [
      { n: 1, text: 'Acesse business.google.com e faça login com sua conta Google pessoal (Gmail).' },
      { n: 2, text: 'Clique em "Gerenciar agora" ou "Adicionar meu negócio".' },
      { n: 3, text: 'Digite o nome da empresa:', bold: 'Alexandre Jardins', tip: 'Use exatamente este nome — é sua marca. Não coloque "Jardinagem" nem seu nome pessoal.' },
      { n: 4, text: 'Na categoria, busque e selecione:', bold: '"Paisagista"', tip: 'Se não encontrar, use "Serviço de paisagismo" ou "Jardineiro". A categoria principal define em quais buscas você aparece.' },
      { n: 5, text: 'Selecione "Não" para loja física — você vai até o cliente.' },
      { n: 6, text: 'Na área de atendimento, adicione as cidades:', bold: 'Itatiba, Atibaia, Jarinu, Jundiaí', tip: 'Adicione no máximo 20 cidades em um raio realista. Mais cidades não significam mais clientes — significam relevância menor.' },
      { n: 7, text: 'Adicione o número do seu WhatsApp Business (quando criado). Pode pular e editar depois.' },
      { n: 8, text: 'Clique em "Próxima" e escolha o método de verificação.', tip: 'Prefira verificação por vídeo ou por telefone — é mais rápido que esperar carta.' },
      { n: 9, text: 'Após verificado, volte ao perfil e complete:', bold: 'Descrição, Horários e Fotos', warn: 'Perfil sem foto fica nos últimos resultados. Suba ao menos 5 fotos de trabalhos antes/depois.' },
      { n: 10, text: 'Na descrição, use exatamente:', bold: '"Paisagismo profissional em Itatiba e região. Manutenção de condomínios, residências e empresas. Serviço com qualidade, compromisso e pontualidade."', tip: 'As palavras "jardineiro Itatiba" e "paisagismo Itatiba" precisam estar na descrição para você aparecer nas buscas locais.' },
      { n: 11, text: 'Solicite as primeiras avaliações para os 2–3 clientes mais próximos usando os scripts da seção Links Rápidos.' },
    ],
    dica_final: 'Perfil completo com pelo menos 10 avaliações coloca você na primeira posição quando alguém buscar "jardineiro Itatiba" — e nenhum concorrente seu tem isso ainda.',
  },
  {
    id: 'wabusiness',
    icon: MessageCircle,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
    badge: 'Fazer esta semana',
    badgeBg: 'bg-amber-100 text-amber-700',
    title: 'WhatsApp Business',
    subtitle: 'Separa o pessoal do profissional. Passa credibilidade. Permite catálogo, mensagens automáticas e respostas rápidas.',
    tempo: '~20 minutos',
    cta: { label: 'Baixar WhatsApp Business', href: 'https://www.whatsapp.com/business/' },
    steps: [
      { n: 1, text: 'Baixe o app', bold: 'WhatsApp Business', text2: '(ícone verde com "B") na Play Store ou App Store. É gratuito.', warn: 'Não instale no mesmo celular que usa para o WhatsApp pessoal — use um chip dedicado ao negócio.' } as Step & { text2: string },
      { n: 2, text: 'Abra o app e insira o número do chip dedicado ao negócio. Valide com o código SMS.' },
      { n: 3, text: 'Toque em "Configurar perfil da empresa".' },
      { n: 4, text: 'Nome da empresa:', bold: 'Alexandre Jardins' },
      { n: 5, text: 'Categoria:', bold: 'Serviços' },
      { n: 6, text: 'Adicione uma foto de perfil profissional:', bold: 'você uniformizado em campo', tip: 'Foto sua vale mais que logo. Quem compra serviço compra pessoa.' },
      { n: 7, text: 'Preencha a descrição:', bold: '"Paisagismo profissional em Itatiba e região. Condomínios, residências e empresas. Alexandre — (11) 97492-3992"' },
      { n: 8, text: 'Configure a mensagem de boas-vindas (Ferramentas Comerciais → Mensagem de Boas-vindas):', bold: '"Olá! Sou o Alexandre, da Alexandre Jardins. Atendo condomínios e residências em Itatiba e região. Como posso te ajudar?"' },
      { n: 9, text: 'Configure a mensagem de ausência (Ferramentas Comerciais → Mensagem de Ausência):', bold: '"Obrigado pelo contato! Estou em campo agora. Retorno em breve. Para urgências: (11) 97492-3992."' },
      { n: 10, text: 'Crie respostas rápidas (Ferramentas Comerciais → Respostas Rápidas). Sugestões:', tip: '"/orcamento" → "Para enviar uma proposta preciso saber: endereço, tipo de espaço (residência/condomínio) e frequência desejada. Pode me mandar essas infos?"\n"/area" → "Atendo Itatiba, Atibaia, Jarinu e Jundiaí."\n"/catalogo" → [link do catálogo após criar]"' },
      { n: 11, text: 'Adicione o número no Google Meu Negócio, no Instagram e na sua assinatura de e-mail.' },
    ],
    dica_final: 'Com o WhatsApp Business configurado, você parece uma empresa — não um autônomo. Isso justifica cobrar R$800/dia antes mesmo de mostrar o portfólio.',
  },
  {
    id: 'catalogo',
    icon: ShoppingBag,
    iconBg: 'bg-forest-100',
    iconColor: 'text-forest-700',
    badge: 'Após criar o WA Business',
    badgeBg: 'bg-forest-100 text-forest-700',
    title: 'Catálogo de Serviços (WA Business)',
    subtitle: 'Lista seus serviços com preço, foto e descrição. O cliente visualiza antes de pedir orçamento — filtra quem não é seu ICP.',
    tempo: '~30 minutos',
    steps: [
      { n: 1, text: 'No WhatsApp Business, acesse:', bold: 'Configurações (3 pontos) → Ferramentas comerciais → Catálogo' },
      { n: 2, text: 'Toque no ícone "+" para adicionar o primeiro serviço.' },
      {
        n: 3,
        text: 'Serviço 1 —',
        bold: 'Manutenção de Jardim Residencial',
        tip: 'Preço: R$ 800,00 /diária\nDescrição: "Manutenção completa de jardins residenciais: corte, poda, adubação, limpeza e cuidados preventivos. Itatiba e região."\nFoto: jardim residencial limpo e bem cuidado (seu trabalho real)'
      },
      {
        n: 4,
        text: 'Serviço 2 —',
        bold: 'Implantação Paisagística',
        tip: 'Preço: Sob consulta\nDescrição: "Projeto e implantação de jardins do zero. Seleção de espécies, preparo de solo, plantio e acompanhamento inicial."\nFoto: resultado de implantação (antes + depois se tiver)'
      },
      {
        n: 5,
        text: 'Serviço 3 —',
        bold: 'Contrato de Manutenção — Condomínios',
        tip: 'Preço: Sob consulta\nDescrição: "Contratos mensais para condomínios residenciais em Itatiba. Equipe uniformizada, supervisão, relatório fotográfico mensal."\nFoto: área comum de condomínio (jardim de entrada, canteiros)',
        warn: 'Este é o serviço mais importante. Se tiver apenas uma foto boa, use aqui.'
      },
      {
        n: 6,
        text: 'Serviço 4 —',
        bold: 'Revitalização de Jardim',
        tip: 'Preço: Sob consulta\nDescrição: "Para jardins abandonados ou em mal estado. Limpeza profunda, substituição de plantas danificadas, reestruturação do espaço."\nFoto: antes e depois de uma revitalização'
      },
      { n: 7, text: 'Toque em "Salvar" após cada serviço. Revise nome, preço e foto antes de confirmar.' },
      { n: 8, text: 'Para compartilhar com um cliente:', bold: 'abra a conversa → toque no clipe 📎 → "Catálogo" → selecione o serviço → enviar', tip: 'Envie o serviço específico que o cliente perguntou, não o catálogo inteiro. Mensagem cirúrgica converte melhor.' },
      { n: 9, text: 'Atualize os preços conforme você aumenta as diárias. O catálogo é sua tabela de preços pública — mantenha-o atual.' },
    ],
    dica_final: 'Quando o cliente ver "R$800/diária" antes de perguntar, os que reclamam de preço eliminam-se sozinhos. Você só recebe contato de quem já aceita o valor.',
  },
]

// ─── Step renderer ────────────────────────────────────────────────────────────

function StepItem({ step }: { step: Step & { text2?: string } }) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-7 h-7 rounded-full bg-forest-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
          {step.n}
        </div>
        <div className="w-px flex-1 bg-gray-200 mt-1" />
      </div>
      <div className="pb-4 min-w-0 flex-1">
        <p className="text-sm text-gray-700 leading-relaxed">
          {step.text}{' '}
          {step.bold && <strong className="text-forest-900">{step.bold}</strong>}
          {(step as Step & { text2?: string }).text2 && ` ${(step as Step & { text2?: string }).text2}`}
        </p>
        {step.tip && (
          <div className="mt-2 flex gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3">
            <Lightbulb size={13} className="text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700 leading-relaxed whitespace-pre-line">{step.tip}</p>
          </div>
        )}
        {step.warn && (
          <div className="mt-2 flex gap-2 bg-amber-50 border border-amber-100 rounded-xl p-3">
            <AlertTriangle size={13} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">{step.warn}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Manuais() {
  const [open, setOpen] = useState<string | null>('gmb')

  return (
    <section id="manuais" className="py-20 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Setup digital</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Guias Práticos</h2>
          <p className="text-gray-500 mt-2">Passo a passo para montar sua presença digital do zero — sem precisar contratar ninguém.</p>
        </div>

        <div className="space-y-3">
          {guides.map(guide => {
            const Icon = guide.icon
            const isOpen = open === guide.id
            return (
              <div
                key={guide.id}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${isOpen ? 'border-forest-300 shadow-md' : 'border-gray-100 hover:border-forest-200'}`}
              >
                {/* Header */}
                <button
                  onClick={() => setOpen(isOpen ? null : guide.id)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4"
                >
                  <div className={`w-11 h-11 rounded-xl ${guide.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon size={20} className={guide.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <p className="font-bold text-forest-900">{guide.title}</p>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${guide.badgeBg}`}>{guide.badge}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-snug pr-4">{guide.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:block text-xs text-gray-400 font-medium">{guide.tempo}</span>
                    {isOpen
                      ? <ChevronUp size={18} className="text-forest-600" />
                      : <ChevronDown size={18} className="text-gray-400" />
                    }
                  </div>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-2 mb-5">
                        <CheckCircle2 size={15} className="text-forest-600" />
                        <p className="text-xs font-bold text-forest-700 uppercase tracking-wider">Passo a passo — {guide.tempo}</p>
                      </div>

                      <div>
                        {guide.steps.map(step => (
                          <StepItem key={step.n} step={step as Step & { text2?: string }} />
                        ))}
                      </div>

                      {guide.dica_final && (
                        <div className="mt-2 bg-forest-800 rounded-2xl p-4 flex gap-3">
                          <Lightbulb size={16} className="text-gold-500 shrink-0 mt-0.5" />
                          <p className="text-white/80 text-sm leading-relaxed">{guide.dica_final}</p>
                        </div>
                      )}

                      {guide.cta && (
                        <a
                          href={guide.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
                        >
                          {guide.cta.label} <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
