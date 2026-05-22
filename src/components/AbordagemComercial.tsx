import { useState } from 'react'
import { MessageSquare, Phone, Send, ChevronDown, ChevronUp, Smartphone, Shield, User, Building2, CheckCircle, AlertTriangle, Copy, Check } from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handle = () => {
    navigator.clipboard.writeText(text).catch(() => {
      const el = document.createElement('textarea'); el.value = text
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
    })
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handle}
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${copied ? 'bg-green-500 text-white border-green-500' : 'border-forest-300 text-forest-600 hover:border-forest-600 hover:text-forest-900'}`}>
      {copied ? <><Check size={11} /> Copiado</> : <><Copy size={11} /> Copiar script</>}
    </button>
  )
}

function Script({ label, canal, texto }: { label: string; canal: string; texto: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50/80 transition-colors text-left">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-forest-700 bg-forest-100 px-2 py-0.5 rounded-full">{canal}</span>
          <span className="text-sm font-semibold text-forest-900">{label}</span>
        </div>
        {open ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
      </button>
      {open && (
        <div className="px-4 pb-4 bg-gray-50/50 border-t border-gray-100">
          <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans mt-3 mb-3">{texto}</pre>
          <CopyButton text={texto} />
        </div>
      )}
    </div>
  )
}

function EtapasList({ etapas }: { etapas: { titulo: string; prazo?: string; desc: string; detalhe?: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-6">
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 transition-colors mb-3">
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        {open ? 'Ocultar' : 'Ver'} {etapas.length} etapas da abordagem
      </button>
      {open && (
        <div className="flex flex-col gap-0">
          {etapas.map((e, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-forest-800 text-gold-500 font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</div>
                {i < etapas.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 mt-1.5" />}
              </div>
              <div className="pb-5 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <p className="font-bold text-forest-900 text-sm">{e.titulo}</p>
                  {e.prazo && <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">{e.prazo}</span>}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
                {e.detalhe && <p className="text-forest-700 text-xs font-medium mt-1.5 bg-forest-50 px-3 py-1.5 rounded-xl border-l-2 border-forest-400">{e.detalhe}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const etapasBelvedere = [
  { titulo: 'WhatsApp de retomada', prazo: 'Urgente', desc: 'Contatar síndico referenciando o orçamento já entregue. Tom: parceiro, não vendedor. Objetivo: obter feedback e agendar revisão.' },
  { titulo: 'Follow-up se silêncio em 48h', prazo: '48h depois', desc: 'Mensagem curta — perguntar diretamente se houve dúvida no orçamento.' },
  { titulo: 'Reunião de revisão', prazo: 'Na semana', desc: 'Apresentar proposta corrigida com margem. Mostrar cronograma de manutenção detalhado.' },
  { titulo: 'Envio da proposta final', prazo: '24h após reunião', desc: 'Usar o Gerador Selva. Incluir portfólio de condomínios se já tiver.' },
]

const etapasCondominio = [
  { titulo: 'Pesquisa prévia', prazo: '30 min antes', desc: 'Google Maps, Instagram do condomínio. Ver fotos das áreas verdes atuais. Identificar se há jardineiro visível.' },
  { titulo: 'Contato via portaria / síndico', prazo: 'Primeiro contato', desc: 'Apresentar Alexandre Jardins. Solicitar contato do síndico ou responsável pelo espaço externo.', detalhe: '"Bom dia! Aqui é o Alexandre, da Alexandre Jardins. Gostaria de falar com o síndico sobre manutenção das áreas verdes. Pode me passar o contato?"' },
  { titulo: 'WhatsApp ao síndico', prazo: 'No mesmo dia', desc: 'Primeiro contato formal. Tom empresarial. Mencionar especialização em condomínios de alto padrão em Itatiba.' },
  { titulo: 'Visita diagnóstica', prazo: 'Na semana', desc: 'Sem falar de preço. Portfólio físico se já tiver. Perguntas SPIN: frequência atual, histórico, o que incomoda hoje.' },
  { titulo: 'Proposta personalizada', prazo: '24h após visita', desc: 'Gerador Selva com base no que foi visto. Enviar pelo WhatsApp com mensagem referenciando o que foi visto.' },
  { titulo: 'Follow-up pós-proposta', prazo: '48–72h depois', desc: 'Máximo 2 follow-ups. Após isso, retomar em 30 dias.' },
]

const scriptBelvedereRetomada = `Bom dia, [Nome do Síndico]! Tudo bem?

Aqui é o Alexandre, da Alexandre Jardins. Passando para acompanhar o orçamento que enviei para as áreas verdes do condomínio.

Ficou alguma dúvida ou posso ajustar algum ponto? Estou à disposição para uma conversa rápida se preferir.

Alexandre | Alexandre Jardins
📱 [seu número]`

const scriptBelvedereFollowUp = `Bom dia!

Passando novamente sobre o orçamento de paisagismo. Caso prefira, posso passar aí pessoalmente para detalhar a proposta.

Alexandre | Alexandre Jardins`

const scriptCondominioNovo = `Bom dia! Tudo bem?

Aqui é o Alexandre, da Alexandre Jardins — empresa de jardinagem especializada em condomínios de alto padrão em Itatiba.

Gostaria de apresentar nossa solução de manutenção para o [Nome do Condomínio]. Trabalhamos com cronograma, equipe uniformizada e relatório fotográfico mensal.

Posso agendar uma visita rápida para apresentar nosso trabalho?

Alexandre | Alexandre Jardins
📱 [seu número]`

const scriptCondominioFollowUp = `Bom dia!

Passando para retomar o contato sobre a manutenção das áreas verdes.

Podemos marcar uma visita de 20 minutos sem compromisso — assim você vê o que fazemos antes de qualquer decisão.

Alexandre | Alexandre Jardins`

const scriptIndustria = `Bom dia! Tudo bem?

Aqui é o Alexandre, da Alexandre Jardins — empresa de jardinagem em Itatiba.

Passando a conhecer as empresas do Distrito Industrial e gostaria de apresentar nossa solução de manutenção de áreas verdes e paisagismo corporativo.

Trabalhamos com cronograma fixo, equipe unifomizada e relatório fotográfico. Posso enviar nosso portfólio?

Alexandre | Alexandre Jardins
📱 [seu número]`

export default function AbordagemComercial() {
  return (
    <section id="abordagem" className="py-20 bg-[#F4F6F0]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Estratégia B2B</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Abordagem Comercial</h2>
        </div>

        {/* Conceito central */}
        <div className="bg-forest-800 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-start gap-4">
            <Shield size={22} className="text-gold-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg mb-2">Você é o setor comercial da Alexandre Jardins</h3>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="bg-red-500/15 border border-red-400/30 rounded-xl p-3">
                  <p className="text-red-300 text-xs font-bold uppercase tracking-wide mb-1">Não fazer</p>
                  <p className="text-white/70 text-sm">"Oi, sou o Alexandre, faço jardinagem nos fins de semana, queria saber se precisam de alguém..."</p>
                </div>
                <div className="bg-green-500/15 border border-green-400/30 rounded-xl p-3">
                  <p className="text-green-300 text-xs font-bold uppercase tracking-wide mb-1">Fazer</p>
                  <p className="text-white/70 text-sm">"Bom dia, aqui é o comercial da Alexandre Jardins. Somos especializados em condomínios de alto padrão em Itatiba e gostaríamos de apresentar nossa solução..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup WhatsApp */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-xl shrink-0">
              <Smartphone size={18} className="text-green-700" />
            </div>
            <div>
              <p className="font-bold text-forest-900">Setup do WhatsApp Comercial</p>
              <p className="text-gray-500 text-xs">Configure antes de qualquer contato</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#F4F6F0] rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-forest-700 mb-2">Configuração do número</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  { icon: Smartphone, text: 'Chip separado ou segundo número de app' },
                  { icon: User,       text: 'Nome: "Alexandre | Alexandre Jardins"' },
                  { icon: Building2,  text: 'Foto: logo ou foto profissional em serviço' },
                  { icon: MessageSquare, text: 'Conta: WhatsApp Business (gratuito)' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icon size={13} className="text-forest-600 shrink-0 mt-0.5" /> {item.text}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">
                <strong>Por quê?</strong> Quando o síndico salvar o contato, aparece "Alexandre Jardins" — reforça que há empresa por trás, não um jardineiro autônomo.
              </p>
            </div>
          </div>
        </div>

        {/* Belvedere */}
        <div className="bg-white rounded-2xl border border-gray-100 mb-4 overflow-hidden">
          <div className="bg-forest-800 px-6 py-4 flex items-center gap-3">
            <div className="bg-gold-500/20 p-1.5 rounded-lg shrink-0">
              <Building2 size={16} className="text-gold-500" />
            </div>
            <div className="flex-1">
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest">Alvo 1 — Retomada</p>
              <p className="text-white font-bold text-lg leading-tight">Condomínio Belvedere</p>
            </div>
            <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">PROCESSO ABERTO</span>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-5 bg-blue-50 border-l-4 border-blue-400 px-4 py-3 rounded-r-xl">
              <strong className="text-blue-800">Contexto:</strong> Orçamento já entregue. Síndico já te conhece. <strong>Não é cold call — é follow-up de proposta.</strong> Retomar pedindo feedback.
            </p>
            <EtapasList etapas={etapasBelvedere} />
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={14} className="text-forest-600" />
              <p className="font-bold text-forest-900 text-sm">Scripts Prontos</p>
            </div>
            <div className="flex flex-col gap-2">
              <Script label="Retomada — feedback do orçamento" canal="WhatsApp" texto={scriptBelvedereRetomada} />
              <Script label="Follow-up sem resposta (48h)" canal="WhatsApp" texto={scriptBelvedereFollowUp} />
            </div>
          </div>
        </div>

        {/* Condomínio novo */}
        <div className="bg-white rounded-2xl border border-gray-100 mb-4 overflow-hidden">
          <div className="bg-forest-700 px-6 py-4 flex items-center gap-3">
            <div className="bg-gold-500/20 p-1.5 rounded-lg shrink-0">
              <Building2 size={16} className="text-gold-500" />
            </div>
            <div className="flex-1">
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest">Alvo 2 — Novo contato</p>
              <p className="text-white font-bold text-lg leading-tight">Condomínios Alto Padrão Itatiba</p>
            </div>
            <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">PROSPECÇÃO ATIVA</span>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-5 bg-amber-50 border-l-4 border-amber-400 px-4 py-3 rounded-r-xl">
              <strong className="text-amber-800">Vantagem:</strong> Concorrência digital zero em Itatiba. Nenhum autônomo domina a busca "jardineiro Itatiba SP" — a primeira posição no GMB está disponível para quem chegar primeiro.
            </p>
            <EtapasList etapas={etapasCondominio} />
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={14} className="text-forest-600" />
              <p className="font-bold text-forest-900 text-sm">Scripts Prontos</p>
            </div>
            <div className="flex flex-col gap-2">
              <Script label="Primeiro contato — síndico" canal="WhatsApp" texto={scriptCondominioNovo} />
              <Script label="Follow-up sem resposta (48h)" canal="WhatsApp" texto={scriptCondominioFollowUp} />
            </div>
            <div className="mt-4 bg-forest-50 border border-forest-100 rounded-2xl p-4 flex items-start gap-2">
              <Phone size={14} className="text-forest-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-forest-900 font-semibold text-sm mb-1">Script de abordagem — portaria</p>
                <p className="text-gray-600 text-sm italic">
                  "Bom dia! Aqui é o Alexandre, da Alexandre Jardins. Gostaria de falar com o síndico sobre a manutenção das áreas verdes do condomínio. Poderia me passar o contato dele?"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Distrito Industrial */}
        <div className="bg-white rounded-2xl border border-gray-100 mb-6 overflow-hidden">
          <div className="bg-forest-600 px-6 py-4 flex items-center gap-3">
            <div className="bg-gold-500/20 p-1.5 rounded-lg shrink-0">
              <Building2 size={16} className="text-gold-500" />
            </div>
            <div className="flex-1">
              <p className="text-gold-400 text-xs font-bold uppercase tracking-widest">Alvo 3 — Expansão</p>
              <p className="text-white font-bold text-lg leading-tight">Distrito Industrial Alfredo Rela</p>
            </div>
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">38 EMPRESAS</span>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-5 bg-blue-50 border-l-4 border-blue-400 px-4 py-3 rounded-r-xl">
              <strong className="text-blue-800">Oportunidade:</strong> Multinacionais como Bosch Rexroth, Valeo e Endress+Hauser têm padrão de ESG e imagem corporativa — áreas verdes bem mantidas são obrigatórias.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={14} className="text-forest-600" />
              <p className="font-bold text-forest-900 text-sm">Script Prontos</p>
            </div>
            <div className="flex flex-col gap-2">
              <Script label="Primeiro contato — empresa" canal="WhatsApp" texto={scriptIndustria} />
            </div>
          </div>
        </div>

        {/* Princípios */}
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { icon: Shield,       title: 'Sempre "nós", nunca "eu"',    desc: '"Nossa equipe", "nosso portfólio", "trabalhamos com" — posiciona empresa, não autônomo.' },
            { icon: Send,         title: 'GMB antes de tudo',           desc: 'Google Meu Negócio ativo é sua âncora de credibilidade antes de qualquer cold call.' },
            { icon: CheckCircle,  title: 'Máximo 2 follow-ups',         desc: 'Após 2 tentativas sem resposta, arquivar e retomar em 30 dias.' },
          ].map((p, i) => {
            const Icon = p.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 flex gap-3">
                <Icon size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-forest-900 text-sm mb-0.5">{p.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
