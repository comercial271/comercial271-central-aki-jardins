import { useState } from 'react'
import { MapPin, MessageCircle, Clapperboard, ChevronDown, ChevronUp, CheckCircle2, AlertTriangle, Lightbulb, ExternalLink } from 'lucide-react'

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

const guides: Guide[] = [
  {
    id: 'gmb',
    icon: MapPin,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    badge: 'Urgente — essa semana',
    badgeBg: 'bg-red-100 text-red-700',
    title: 'Otimizar o GMB (já criado em 15/05)',
    subtitle: 'O perfil foi criado mas está incompleto. Sem fotos e sem a descrição certa, você não aparece nas buscas "jardinagem Rio do Sul SC".',
    tempo: '~20 minutos',
    cta: { label: 'Abrir Google Meu Negócio', href: 'https://business.google.com' },
    steps: [
      { n: 1, text: 'Acesse business.google.com e faça login com a conta Google vinculada ao perfil AKI Jardins.' },
      { n: 2, text: 'Clique em "Editar perfil" → vá até a aba Informações.' },
      { n: 3, text: 'Verifique se o nome está exatamente:', bold: 'AKI Jardins Soluções e Paisagismo', tip: 'Nome diferente do CNPJ pode causar problema na verificação. Use o nome da empresa.' },
      { n: 4, text: 'Na categoria principal, confirme:', bold: '"Paisagista"', tip: 'Se não aparecer, use "Empresa de jardinagem" ou "Serviço de paisagismo".' },
      { n: 5, text: 'Na área de atendimento, adicione:', bold: 'Rio do Sul, Laurentino, Ituporanga, Lontras, Rio do Campo', tip: 'Adicione cidades no raio real de operação. Mais cidades não ajudam se você não atende.' },
      { n: 6, text: 'Preencha a descrição com exatamente:', bold: '"Empresa de jardinagem e paisagismo corporativo em Rio do Sul e região. Especialistas em industriais, condomínios e áreas verdes de alto padrão. 13 anos de mercado. Empresa LTDA. CNPJ ativo."', tip: 'As palavras "jardinagem Rio do Sul", "paisagismo Rio do Sul SC" precisam estar aqui para você aparecer nas buscas locais.' },
      { n: 7, text: 'Adicione o link do site:', bold: 'https://aki-jardins-digital.lovable.app' },
      { n: 8, text: 'Adicione o número do WhatsApp Business.', tip: 'Use o número que tem WA Business configurado — clientes vão clicar direto para conversar.' },
      { n: 9, text: 'Suba fotos reais:', bold: 'mínimo 5 fotos de serviços reais', warn: 'Perfil sem foto aparece no final dos resultados. A Fundisul é uma âncora de credibilidade — fotografe o próximo serviço lá.' },
      { n: 10, text: 'Depois de salvar: abra o Maps no celular e busque "jardinagem Rio do Sul SC". Verifique se aparece.', tip: 'Pode levar até 72h para o perfil aparecer após atualização.' },
    ],
    dica_final: 'Nenhuma empresa de jardinagem domina o Google de Rio do Sul/SC hoje. Com o perfil completo e 5+ fotos reais, você ocupa a primeira posição antes que qualquer concorrente perceba — e o próximo contrato chega sem você prospectar.',
  },
  {
    id: 'wa',
    icon: MessageCircle,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
    badge: 'Urgente — essa semana',
    badgeBg: 'bg-amber-100 text-amber-700',
    title: 'Corrigir Mensagem Automática WA Business',
    subtitle: 'A mensagem automática atual está com texto incorreto. Quando um cliente entra em contato e recebe uma mensagem sem sentido, perde a confiança imediatamente.',
    tempo: '~5 minutos',
    steps: [
      { n: 1, text: 'Abra o WhatsApp Business no celular.' },
      { n: 2, text: 'Acesse:', bold: 'Configurações (3 pontos) → Ferramentas comerciais → Mensagem de ausência.' },
      { n: 3, text: 'Desative a mensagem atual e apague o texto existente.' },
      { n: 4, text: 'Digite a nova mensagem de ausência:', bold: '"Obrigado pelo contato com a AKI Jardins! Estou em campo agora. Retorno em breve. Para orçamentos: envie o endereço e tipo de espaço que atendo você com rapidez."', tip: 'Pedir as informações de orçamento na mensagem automática filtra o cliente e reduz idas e vindas.' },
      { n: 5, text: 'Ative o horário de ausência:', bold: 'fora do horário comercial (18h às 8h) e fins de semana', tip: 'Durante o horário comercial, tente responder em até 2h — velocidade de resposta afeta o ranking do GMB.' },
      { n: 6, text: 'Configure também a mensagem de boas-vindas (novo contato):', bold: '"Olá! Aqui é a AKI Jardins Soluções e Paisagismo — Rio do Sul/SC. Atendemos industriais, condomínios e áreas verdes corporativas. Como posso te ajudar?"' },
      { n: 7, text: 'Salve e faça um teste:', bold: 'peça para alguém te mandar mensagem fora do horário comercial para confirmar que aparece certo.' },
    ],
    dica_final: 'Uma mensagem de ausência bem feita transforma o "sumiu" em "profissional". Quando o síndico ou gestor de uma empresa manda mensagem à noite e recebe uma resposta automática clara, a confiança sobe antes de qualquer conversa real.',
  },
  {
    id: 'reel',
    icon: Clapperboard,
    iconBg: 'bg-forest-100',
    iconColor: 'text-forest-700',
    badge: 'Fazer na próxima visita',
    badgeBg: 'bg-forest-100 text-forest-700',
    title: 'Primeiro Reel — Jardim da Empresa como Live Case',
    subtitle: 'Na próxima manutenção na Fundisul, você tem a oportunidade perfeita: filmar antes da manutenção, trabalhar, filmar depois. Isso vale mais que qualquer copy.',
    tempo: '~30 minutos de filmagem',
    steps: [
      { n: 1, text: 'Antes de começar a manutenção:', bold: 'filme 3 a 5 cenas do jardim no estado atual', tip: 'Câmera estável. Horizontal. Devagar. Mostra: canteiros, grama, bordas, detalhes que vão mudar.' },
      { n: 2, text: 'Durante o serviço:', bold: 'grave 2 ou 3 trechos de 15 segundos trabalhando', tip: 'Equipamento em uso, mãos na ferramenta, equipe uniformizada. Bastidores reais.' },
      {
        n: 3,
        text: 'Depois do serviço:',
        bold: 'filme os mesmos ângulos do antes — exatamente a mesma posição',
        warn: 'Esse é o passo mais importante. A transformação visual é o que para o scroll.',
      },
      { n: 4, text: 'No celular, abra o Instagram → Reels → clique no "+" para criar. Selecione os vídeos antes e depois.' },
      { n: 5, text: 'Monte no formato:', bold: 'ANTES (5s) → TRABALHO (10s) → DEPOIS (10s)', tip: 'Total de 25-30 segundos. Curto converte mais.' },
      { n: 6, text: 'Adicione música (instrumental ou trending do Instagram — tente evitar letra para não competir com a legenda).' },
      {
        n: 7,
        text: 'Na legenda, use exatamente:',
        bold: '"Mais uma manutenção concluída na Fundisul — Rio do Sul/SC. 13 anos cuidando das áreas verdes de quem leva sério. AKI Jardins Soluções e Paisagismo. LTDA ativa. Link na bio."',
        tip: 'Mencionar Fundisul pelo nome é a âncora de credibilidade. Empresas reconhecem outras empresas — esse post vai chamar atenção dos gestores que seguem o perfil.',
      },
      { n: 8, text: 'Hashtags:', bold: '#jardinagem #paisagismo #riodosul #riodosulsc #jardimcorporativo #manutencaojardinagem #akijardins' },
      { n: 9, text: 'Poste no horário de pico:', bold: 'terça ou quarta entre 18h e 20h.', tip: 'Horário em que gestores e síndicos estão scrollando. Evite segunda de manhã e fim de semana.' },
    ],
    dica_final: 'Esse primeiro Reel prova três coisas ao mesmo tempo: você é profissional, tem cliente corporativo e entrega resultado visual. Quando um gestor de outra empresa ver esse post, a primeira coisa que vai pensar é: "quero isso para minha empresa também".',
  },
]

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

export default function Manuais() {
  const [open, setOpen] = useState<string | null>('gmb')

  return (
    <section id="manuais" className="py-20 bg-[#F4F6F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Ações prioritárias</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Guias Práticos</h2>
          <p className="text-gray-500 mt-2">Três ações que podem mudar a percepção da AKI Jardins esta semana — passo a passo.</p>
        </div>

        <div className="space-y-3">
          {guides.map(guide => {
            const Icon = guide.icon
            const isOpen = open === guide.id
            return (
              <div key={guide.id}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${isOpen ? 'border-forest-300 shadow-md' : 'border-gray-100 hover:border-forest-200'}`}>
                <button onClick={() => setOpen(isOpen ? null : guide.id)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4">
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
                    {isOpen ? <ChevronUp size={18} className="text-forest-600" /> : <ChevronDown size={18} className="text-gray-400" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-2 mb-5">
                        <CheckCircle2 size={15} className="text-forest-600" />
                        <p className="text-xs font-bold text-forest-700 uppercase tracking-wider">Passo a passo — {guide.tempo}</p>
                      </div>
                      <div>
                        {guide.steps.map(step => <StepItem key={step.n} step={step as Step & { text2?: string }} />)}
                      </div>
                      {guide.dica_final && (
                        <div className="mt-2 bg-forest-800 rounded-2xl p-4 flex gap-3">
                          <Lightbulb size={16} className="text-gold-500 shrink-0 mt-0.5" />
                          <p className="text-white/80 text-sm leading-relaxed">{guide.dica_final}</p>
                        </div>
                      )}
                      {guide.cta && (
                        <a href={guide.cta.href} target="_blank" rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
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
