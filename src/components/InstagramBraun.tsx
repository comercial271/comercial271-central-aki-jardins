import { useState } from 'react'
import { Building2, Wrench, MapPin, Camera, BookOpen, TrendingUp, CheckCircle, Circle, AlertCircle, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

const IG_IDEAS_KEY = 'andre_ig_ideas_v1'

// ─── Pilares ─────────────────────────────────────────────────────────────────

const pilares = [
  {
    id: 'corporativo',
    nome: 'Corporativo',
    Icon: Building2,
    bg: 'bg-forest-700',
    freq: '2x/semana',
    desc: 'Mostre que é empresa: LTDA, Fundisul como cliente, NF, CNPJ. Posicionamento corporativo que diferencia de qualquer autônomo da região.',
    gancho: '"Temos a Fundisul na carteira. Empresa registrada, 13 anos de mercado. Isso não é jardineiro — é empresa de paisagismo."',
    formato: 'Reel ou Carrossel',
  },
  {
    id: 'tecnico',
    nome: 'Técnico',
    Icon: Wrench,
    bg: 'bg-teal-600',
    freq: '1x/semana',
    desc: 'Expertise que concorrente autônomo não tem. Equipamento profissional, técnica correta, resultado diferenciado. Prova visual de competência.',
    gancho: '"Esse equipamento custa R$15k. Autônomo não tem. Empresa tem."',
    formato: 'Reel (work in progress)',
  },
  {
    id: 'local',
    nome: 'Local — Rio do Sul',
    Icon: MapPin,
    bg: 'bg-gold-600',
    freq: '1x/semana',
    desc: 'Referência regional. 13 anos em Rio do Sul e região. Conhece cada condomínio, cada indústria, cada estação do Sul do Brasil.',
    gancho: '"13 anos cuidando das áreas verdes de Rio do Sul. Sou daqui. Vou ficar."',
    formato: 'Reel ou Story',
  },
  {
    id: 'bastidores',
    nome: 'Bastidores',
    Icon: Camera,
    bg: 'bg-slate-600',
    freq: '2-3x/semana (Stories)',
    desc: 'Como é a rotina de uma empresa profissional: chegada no cliente, equipamento, equipe, resultado. Humaniza sem tirar a autoridade corporativa.',
    gancho: '"7h da manhã. Equipamento carregado. Mais um dia cuidando das áreas verdes de Rio do Sul:"',
    formato: 'Stories + Reels curtos',
  },
  {
    id: 'educativo',
    nome: 'Educativo',
    Icon: BookOpen,
    bg: 'bg-purple-700',
    freq: '1x/semana',
    desc: 'Dicas práticas para gestores e síndicos: quando podar, como manter, o que fazer antes de contratar. Posiciona como especialista, não como fornecedor.',
    gancho: '"3 sinais de que sua empresa precisa de um contrato de manutenção agora:"',
    formato: 'Carrossel ou Reel',
  },
]

// ─── Ideias ───────────────────────────────────────────────────────────────────

const ideias = [
  // Corporativo
  { id: '01', pilar: 'corporativo', formato: 'Reel',      hook: 'Temos a Fundisul na carteira. Empresa registrada, 13 anos de mercado. Isso não é jardineiro — é empresa de paisagismo.', visual: 'André direto na câmera, no jardim da Fundisul — fala sobre o que significa ter um cliente corporativo e o que isso exige de estrutura' },
  { id: '02', pilar: 'corporativo', formato: 'Carrossel', hook: '5 diferenças entre contratar uma empresa de jardinagem e contratar um autônomo — o que ninguém te conta:', visual: 'Cada slide: uma diferença real (NF, CNPJ, seguro, contrato, equipamento). Último slide: "AKI Jardins. Empresa LTDA."' },
  { id: '03', pilar: 'corporativo', formato: 'Reel',      hook: 'Empresa precisa de empresa. A Fundisul entendeu isso. E você?', visual: 'Cenas do jardim Fundisul — área bem cuidada — tom de autoridade corporativa, sem arrogância' },
  { id: '04', pilar: 'corporativo', formato: 'Carrossel', hook: 'Por que gestores de indústrias e condomínios preferem empresa com CNPJ para manutenção de áreas verdes:', visual: 'Slides: conformidade fiscal, responsabilidade, NF, garantia de serviço. Tom consultivo.' },

  // Técnico
  { id: '05', pilar: 'tecnico',    formato: 'Reel',      hook: 'Esse equipamento custa R$15k. Autônomo não tem. Empresa tem. E você vê a diferença no resultado:', visual: 'Equipamento profissional em uso — antes/depois lado a lado — o detalhe que muda tudo' },
  { id: '06', pilar: 'tecnico',    formato: 'Reel',      hook: 'Poda de árvore industrial: não é só cortar. É calcular carga, direção de queda e segurança da área. Vê como faz:', visual: 'Gravação da poda técnica em área industrial ou grande espaço — processo completo em 30s' },
  { id: '07', pilar: 'tecnico',    formato: 'Carrossel', hook: '13 anos de jardinagem me ensinaram: o jardim que não tem manutenção regular custa 3x mais para recuperar:', visual: 'Casos reais de jardins abandonados vs mantidos. Custo de recuperação vs manutenção preventiva' },
  { id: '08', pilar: 'tecnico',    formato: 'Reel',      hook: 'Antes e depois em 30 segundos. Área industrial que estava abandonada. Dois dias de trabalho:', visual: 'Transformação antes/depois de área industrial — time-lapse ou corte direto' },

  // Local
  { id: '09', pilar: 'local',      formato: 'Reel',      hook: '13 anos cuidando das áreas verdes de Rio do Sul e região. Sou daqui. Conheço o clima, o solo, o que funciona aqui.', visual: 'André em ambiente local — cenas de Rio do Sul/SC — fala sobre conhecimento regional' },
  { id: '10', pilar: 'local',      formato: 'Carrossel', hook: 'O que muda na manutenção de jardins no Sul do Brasil — e por que isso importa para sua empresa:', visual: 'Especificidades do clima de Rio do Sul: geada, estações, espécies locais. Tom de especialista regional' },
  { id: '11', pilar: 'local',      formato: 'Reel',      hook: 'Empresas de Rio do Sul: esta é a área verde de vocês vista de perto. Veja o que um contrato de manutenção garante:', visual: 'Área verde de empresa local bem mantida — sem citar nome, mas reconhecível para quem conhece a cidade' },
  { id: '12', pilar: 'local',      formato: 'Story',     hook: 'Rio do Sul hoje: mais uma manutenção concluída. A cidade está mais verde.', visual: 'Story simples: foto do resultado + localização Rio do Sul/SC + sticker com arroba @akijardins' },

  // Bastidores
  { id: '13', pilar: 'bastidores', formato: 'Stories',   hook: '7h da manhã. Equipamento carregado. Mais um dia cuidando das áreas verdes de Rio do Sul. POV:', visual: '5 slides: carro com equipamento, chegada no cliente, equipamento sendo preparado, trabalho, resultado' },
  { id: '14', pilar: 'bastidores', formato: 'Reel',      hook: 'Como preparamos o equipamento antes de cada serviço corporativo — porque profissional não improvisa:', visual: 'Câmera mostra checklist do equipamento — organização, limpeza, preparação — sinal de seriedade' },
  { id: '15', pilar: 'bastidores', formato: 'Stories',   hook: 'Dia de visita técnica antes de fechar proposta. Isso é o que fazemos antes de qualquer orçamento:', visual: '4 slides: chegada no cliente, análise da área, medições, anotações — processo profissional' },
  { id: '16', pilar: 'bastidores', formato: 'Reel',      hook: 'Manutenção mensal na Fundisul. Área industrial com exigência de qualidade corporativa. Como entregamos:', visual: 'Work in progress na Fundisul (sem mostrar elementos confidenciais) — trabalho em área industrial' },

  // Educativo
  { id: '17', pilar: 'educativo',  formato: 'Carrossel', hook: '3 sinais de que sua empresa precisa de um contrato de manutenção de áreas verdes agora:', visual: 'Slide 1: grama alta demais; Slide 2: plantas mortas visíveis; Slide 3: sem cronograma de manutenção. Último: o que um contrato resolve' },
  { id: '18', pilar: 'educativo',  formato: 'Reel',      hook: 'Por que jardim de empresa mal cuidado afasta clientes e funcionários — o que a ciência diz:', visual: 'André explica: biofilia, imagem corporativa, bem-estar dos funcionários — fundamentado, não opinião' },
  { id: '19', pilar: 'educativo',  formato: 'Carrossel', hook: 'Guia: o que perguntar antes de contratar uma empresa de jardinagem para sua indústria ou condomínio:', visual: 'Lista de perguntas: CNPJ, seguro, contrato, NF, frequência, responsável técnico. Posiciona AKI Jardins como referência' },
  { id: '20', pilar: 'educativo',  formato: 'Reel',      hook: 'Qual é a frequência ideal de manutenção para área industrial no Sul do Brasil? Depende de 3 fatores:', visual: 'André explica os 3 fatores: área total, tipo de vegetação, estação do ano — conteúdo prático e útil' },
]

// ─── Roteiros de Vídeo ────────────────────────────────────────────────────────

const roteiros = [
  {
    id: 'r1',
    titulo: 'Roteiro 1 — Apresentação Corporativa (Reel 30s)',
    objetivo: 'Primeiro post do perfil — declaração de posicionamento',
    duracao: '25–30 segundos',
    gancho: '"Somos a AKI Jardins. Empresa LTDA de paisagismo corporativo de Rio do Sul/SC. 13 anos de mercado. Fundisul na carteira."',
    roteiro: `[CENA 1 — 0s a 5s]
Câmera fixa em área verde bem cuidada (Fundisul ou similar).
André fala direto: "Somos a AKI Jardins."

[CENA 2 — 5s a 12s]
Corte para equipamento profissional em uso.
Voz over: "Empresa LTDA. Simples Nacional. CNPJ ativo. 13 anos de mercado em Rio do Sul e região."

[CENA 3 — 12s a 20s]
Cenas rápidas: antes/depois, equipe, resultado visual.
Voz over: "Atendemos industriais, condomínios e espaços corporativos. Com contrato, NF e cronograma."

[CENA 4 — 20s a 28s]
André olha para câmera: "Se sua empresa quer área verde profissional em Rio do Sul — somos nós."

[LEGENDA]
🌿 AKI Jardins Soluções e Paisagismo — LTDA
📍 Rio do Sul / SC | 13 anos de mercado
🏭 Industriais | Condomínios | Corporativo
🔗 Link na bio

#akijardins #paisagismocorporativo #riodosulsc #jardinagem #paisagismo`,
  },
  {
    id: 'r2',
    titulo: 'Roteiro 2 — Fundisul: Live Case (Reel 45s)',
    objetivo: 'Usar Fundisul como prova social corporativa sem expor dados sigilosos',
    duracao: '40–45 segundos',
    gancho: '"Cliente industrial. Contrato ativo. 13 anos de confiança. Veja o resultado:"',
    roteiro: `[CENA 1 — 0s a 5s]
Texto na tela: "Cliente industrial. Rio do Sul/SC."
Música instrumental (sem letra).

[CENA 2 — 5s a 15s]
Imagens do jardim da Fundisul ANTES da manutenção.
Voz over: "Área industrial. Exige padrão corporativo. Frequência regular. Nada de improvisar."

[CENA 3 — 15s a 30s]
Work in progress: equipamento, equipe, processo de manutenção.
Voz over: "Equipamento profissional. Cronograma mensal. Relatório fotográfico. Isso é o que contrato de empresa entrega."

[CENA 4 — 30s a 40s]
DEPOIS: área completamente transformada.
Texto: "Resultado. Todo mês. Há 13 anos."

[CENA 5 — 40s a 45s]
André: "AKI Jardins. Se sua empresa precisa disso — link na bio."

[LEGENDA]
Manutenção industrial mensal concluída 🌿
13 anos cuidando das áreas verdes de quem leva sério.

AKI Jardins Soluções e Paisagismo — LTDA
📍 Rio do Sul / SC

#akijardins #paisagismoindustrial #riodosulsc #manutencaojardinagem`,
  },
  {
    id: 'r3',
    titulo: 'Roteiro 3 — Autoridade Local (Reel 20s)',
    objetivo: 'Posicionamento regional — Rio do Sul como território da AKI Jardins',
    duracao: '18–22 segundos',
    gancho: '"13 anos cuidando de Rio do Sul. Sou daqui. Conheço o que cresce aqui."',
    roteiro: `[CENA 1 — 0s a 4s]
Imagem aérea ou panorâmica de Rio do Sul/SC.
Texto animado: "Rio do Sul / SC"

[CENA 2 — 4s a 10s]
André: "13 anos cuidando das áreas verdes desta cidade."
Cenas de clientes conhecidos da região (sem revelar nomes se não autorizado).

[CENA 3 — 10s a 16s]
Voz over: "Conheço o clima, o solo, as espécies que funcionam aqui. Isso não se aprende em 1 ano."

[CENA 4 — 16s a 20s]
André: "AKI Jardins. A empresa de Rio do Sul."

[LEGENDA]
Rio do Sul tem empresa de paisagismo 🌿
13 anos de mercado. Empresa LTDA.

#akijardins #riodosul #paisagismoriodosul #jardinagemsc`,
  },
  {
    id: 'r4',
    titulo: 'Roteiro 4 — Antes e Depois (Reel 30s)',
    objetivo: 'Transformação visual — o conteúdo que mais viraliza no nicho',
    duracao: '28–32 segundos',
    gancho: '"Área verde abandonada. 2 dias de trabalho. Veja:"',
    roteiro: `[CENA 1 — 0s a 3s]
Texto: "Antes 👇" — tela preta ou fade in.

[CENA 2 — 3s a 8s]
Área verde em estado de abandono (grama alta, plantas mortas, entulho).
Música começa.

[CENA 3 — 8s a 12s]
Work in progress: equipamento em ação, velocidade 2x.

[CENA 4 — 12s a 17s]
Texto: "Depois 👇"

[CENA 5 — 17s a 25s]
Mesmos ângulos do antes — área completamente transformada.
Câmera lenta para valorizar o resultado.

[CENA 6 — 25s a 30s]
André: "AKI Jardins. Rio do Sul/SC. Orçamento no link da bio."

[LEGENDA]
Transformação completa 🌿✅
Área abandonada → jardim corporativo em 2 dias.

📍 Rio do Sul / SC
📋 Contrato mensal disponível

#antesedepois #paisagismo #akijardins #riodosulsc #jardinagem`,
  },
]

// ─── Bio ──────────────────────────────────────────────────────────────────────

const novaBio = `🌿 AKI Jardins Soluções e Paisagismo
📍 Rio do Sul / SC | 13 anos de mercado
🏭 Jardinagem para as maiores empresas da região
🌱 Industrial · Condomínios · Corporativo
🔗 aki-jardins-digital.lovable.app`

// ─── Destaques ────────────────────────────────────────────────────────────────

const destaques = [
  { emoji: '🌿', nome: 'Quem Somos', desc: 'Empresa LTDA, CNPJ, Fundisul, 13 anos. Credenciais corporativas em 5 slides.' },
  { emoji: '🏭', nome: 'Cases',      desc: 'Fundisul e outros clientes documentados. Fotos antes/depois. Prova real.' },
  { emoji: '🛠️', nome: 'Serviços',   desc: 'O que a AKI Jardins faz: manutenção, implantação, poda técnica, corporativo.' },
  { emoji: '📍', nome: 'Rio do Sul', desc: 'Presença local: cidades atendidas, referências da região.' },
  { emoji: '📋', nome: 'Orçamento',  desc: 'Como funciona: visita gratuita, proposta em 24h, contrato mensal.' },
]

// ─── Badge colors ─────────────────────────────────────────────────────────────

const pilarBadge: Record<string, string> = {
  corporativo: 'bg-forest-100 text-forest-800 border-forest-200',
  tecnico:     'bg-teal-100 text-teal-800 border-teal-200',
  local:       'bg-yellow-100 text-yellow-800 border-yellow-200',
  bastidores:  'bg-slate-100 text-slate-800 border-slate-200',
  educativo:   'bg-purple-100 text-purple-800 border-purple-200',
}
const pilarLabel: Record<string, string> = {
  corporativo: 'Corporativo',
  tecnico:     'Técnico',
  local:       'Local',
  bastidores:  'Bastidores',
  educativo:   'Educativo',
}

function loadUsed(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(IG_IDEAS_KEY) || '[]')) } catch { return new Set() }
}
function saveUsed(s: Set<string>) {
  try { localStorage.setItem(IG_IDEAS_KEY, JSON.stringify([...s])) } catch {}
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).catch(() => {
      const el = document.createElement('textarea'); el.value = text
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
    })
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${copied ? 'bg-green-500 text-white' : 'bg-forest-800 hover:bg-forest-700 text-white'}`}>
      {copied ? <><Check size={12} /> Copiado!</> : <><Copy size={12} /> Copiar</>}
    </button>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function InstagramBraun() {
  const [used, setUsed]               = useState<Set<string>>(loadUsed)
  const [activePilar, setActivePilar] = useState<string | null>(null)
  const [openPilar, setOpenPilar]     = useState<string | null>(null)
  const [openRoteiro, setOpenRoteiro] = useState<string | null>(null)

  const toggleUsed = (id: string) => {
    const next = new Set(used)
    if (next.has(id)) next.delete(id); else next.add(id)
    setUsed(next); saveUsed(next)
  }

  const filtered = activePilar ? ideias.filter(i => i.pilar === activePilar) : ideias
  const usedCount = used.size

  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Presença digital B2B</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Instagram @akijardins</h2>
          <p className="text-gray-500 mt-2">Bio, destaques, estratégia de conteúdo e roteiros prontos para gravar.</p>
        </div>

        {/* Urgência */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex gap-3 items-start">
          <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900">@akijardins precisa de presença agora</p>
            <p className="text-amber-800 text-sm mt-1">
              Gestores de indústrias e síndicos de condomínios pesquisam no Instagram antes de contratar. Um perfil sem posts é pior que não ter perfil — passa insegurança. Use a Fundisul como âncora: <strong>o primeiro Reel já posiciona você acima de 90% dos concorrentes locais.</strong>
            </p>
          </div>
        </div>

        {/* ── Nova Bio ── */}
        <div className="bg-forest-800 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Nova Bio @akijardins</p>
              <p className="text-white/70 text-sm">Copie e cole no Instagram → Editar Perfil → Biografia</p>
            </div>
            <CopyButton text={novaBio} />
          </div>
          <pre className="bg-forest-900/50 rounded-xl p-4 text-white text-sm whitespace-pre-wrap font-sans leading-relaxed border border-forest-700">{novaBio}</pre>
          <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
            {[
              { label: '13 anos de mercado', desc: 'Autoridade local que ninguém questiona' },
              { label: 'Maiores empresas',   desc: 'Prova social implícita — sem nomear cliente na bio' },
              { label: 'Link do site', desc: 'Conversão direta para orçamento' },
            ].map((item, i) => (
              <div key={i} className="bg-forest-700/50 rounded-xl p-3">
                <p className="text-gold-400 font-bold">{item.label}</p>
                <p className="text-white/60 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Destaques ── */}
        <div className="mb-10">
          <h3 className="font-bold text-forest-900 text-lg mb-1">Destaques (Highlights) — Estrutura</h3>
          <p className="text-gray-500 text-sm mb-5">Crie estes 5 destaques no perfil. Cada um é uma "vitrine" para um tipo de cliente diferente.</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {destaques.map((d, i) => (
              <div key={i} className="bg-[#F4F6F0] rounded-2xl p-4 text-center">
                <div className="text-3xl mb-2">{d.emoji}</div>
                <p className="font-bold text-forest-900 text-sm mb-1">{d.nome}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-800">
            Como criar: Instagram → perfil → toque no "+" abaixo da bio → "Destaques" → selecione Stories relevantes → nomeie com os títulos acima.
          </div>
        </div>

        {/* ── Narrativa Central ── */}
        <div className="bg-forest-800 rounded-2xl p-6 mb-10 text-white">
          <div className="flex items-center gap-2 mb-5">
            <Building2 size={18} className="text-gold-500" />
            <p className="font-bold text-lg">A narrativa que diferencia @akijardins de todos</p>
          </div>
          <p className="text-white/70 text-sm mb-6 max-w-2xl leading-relaxed">
            Nenhuma empresa de jardinagem em Rio do Sul conta uma história corporativa no Instagram. Você não é "mais um jardineiro" — você é a <strong className="text-white">empresa que já tem cliente industrial e vai dominar o digital da cidade antes que alguém perceba.</strong>
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { n: '01', titulo: 'Mostre a empresa', desc: 'LTDA, CNPJ, NF, contrato. Posicionamento corporativo que gestor reconhece e respeita.' },
              { n: '02', titulo: 'Use a Fundisul', desc: 'Primeiro case em todo post de credibilidade. "Trabalhamos com a Fundisul" vale mais que mil seguidos.' },
              { n: '03', titulo: 'Domine o local', desc: '13 anos de Rio do Sul é autoridade que nenhum concorrente novo tem. Use sempre como argumento.' },
            ].map(r => (
              <div key={r.n} className="bg-forest-700/50 rounded-xl p-4">
                <p className="text-gold-500 font-bold text-2xl mb-1 leading-none">{r.n}</p>
                <p className="text-white font-bold text-sm mb-1.5">{r.titulo}</p>
                <p className="text-white/60 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Roteiros ── */}
        <h3 className="font-bold text-forest-900 text-lg mb-2">Roteiros de Vídeo — Prontos para Gravar</h3>
        <p className="text-gray-500 text-sm mb-5">4 roteiros completos com gancho, cena a cena e legenda. Grave na próxima visita à Fundisul.</p>
        <div className="space-y-3 mb-10">
          {roteiros.map(r => {
            const isOpen = openRoteiro === r.id
            return (
              <div key={r.id} className={`bg-[#F4F6F0] rounded-2xl border-2 transition-all overflow-hidden ${isOpen ? 'border-forest-400' : 'border-transparent'}`}>
                <button onClick={() => setOpenRoteiro(isOpen ? null : r.id)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4">
                  <div className="bg-forest-800 rounded-xl p-2.5 shrink-0">
                    <Building2 size={16} className="text-gold-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-forest-900 text-sm">{r.titulo}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-forest-100 text-forest-700 px-2 py-0.5 rounded-full font-medium">{r.duracao}</span>
                      <span className="text-xs text-gray-500 truncate">{r.objetivo}</span>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-forest-600 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-gray-200">
                    <div className="mt-4 mb-3 bg-forest-800 rounded-xl px-4 py-3">
                      <p className="text-gold-400 text-xs font-bold uppercase tracking-wide mb-1">Gancho</p>
                      <p className="text-white text-sm font-semibold italic">"{r.gancho}"</p>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-forest-800 uppercase tracking-wide">Roteiro completo</p>
                      <CopyButton text={r.roteiro} />
                    </div>
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans bg-white border border-gray-100 rounded-xl p-4 leading-relaxed max-h-80 overflow-y-auto">{r.roteiro}</pre>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Pilares ── */}
        <h3 className="font-bold text-forest-900 text-lg mb-2">Os 5 Pilares de Conteúdo</h3>
        <p className="text-gray-500 text-sm mb-5">Clique para filtrar as ideias abaixo. Alterne entre todos para manter o perfil equilibrado.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {pilares.map(p => {
            const isActive = activePilar === p.id
            const isOpen   = openPilar === p.id
            return (
              <div key={p.id} className={`rounded-2xl border-2 bg-white transition-all overflow-hidden ${isActive ? 'border-forest-500 shadow-md' : 'border-transparent hover:border-forest-100'}`}>
                <button onClick={() => setActivePilar(prev => prev === p.id ? null : p.id)} className="w-full text-left p-4">
                  <div className={`w-9 h-9 rounded-xl ${p.bg} flex items-center justify-center mb-3`}>
                    <p.Icon size={16} className="text-white" />
                  </div>
                  <p className="font-bold text-forest-900 text-sm mb-0.5">{p.nome}</p>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{p.freq}</span>
                </button>
                <button onClick={() => setOpenPilar(prev => prev === p.id ? null : p.id)} className="w-full text-left px-4 pb-3">
                  <p className={`text-xs text-forest-600 font-semibold hover:text-forest-800 transition-colors ${isOpen ? 'text-forest-800' : ''}`}>
                    {isOpen ? '▲ ver menos' : '▼ ver detalhes'}
                  </p>
                  {isOpen && (
                    <div className="mt-2 space-y-1.5">
                      <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                      <p className="text-xs text-forest-700 italic">Gancho: {p.gancho}</p>
                      <span className="text-xs bg-forest-50 text-forest-700 px-2 py-0.5 rounded-full font-medium">{p.formato}</span>
                    </div>
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {/* Calendário semanal */}
        <div className="bg-[#F4F6F0] rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-forest-900 mb-1">Calendário Semanal Padrão</h3>
          <p className="text-gray-500 text-sm mb-5">Mínimo realista: 4 posts + Stories diários</p>
          <div className="grid grid-cols-7 gap-1.5">
            {[
              { dia: 'SEG', acao: 'Corporativo',      formato: 'Reel',      bg: 'bg-forest-100 text-forest-800' },
              { dia: 'TER', acao: 'Bastidores',       formato: 'Stories',   bg: 'bg-slate-100 text-slate-800' },
              { dia: 'QUA', acao: 'Técnico',          formato: 'Reel',      bg: 'bg-teal-100 text-teal-800' },
              { dia: 'QUI', acao: 'Bastidores',       formato: 'Stories',   bg: 'bg-slate-100 text-slate-800' },
              { dia: 'SEX', acao: 'Educativo ou Local', formato: 'Carrossel', bg: 'bg-purple-100 text-purple-800' },
              { dia: 'SAB', acao: 'Bastidores obra',  formato: 'Stories',   bg: 'bg-gray-100 text-gray-600' },
              { dia: 'DOM', acao: 'Off ou Repost',    formato: '—',         bg: 'bg-gray-50 text-gray-400' },
            ].map(item => (
              <div key={item.dia} className={`rounded-xl p-2.5 ${item.bg}`}>
                <p className="font-bold text-xs uppercase tracking-wider mb-2">{item.dia}</p>
                <p className="text-xs font-semibold leading-snug mb-1.5">{item.acao}</p>
                <span className="text-xs opacity-60 bg-black/10 px-1.5 py-0.5 rounded-full block w-fit">{item.formato}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banco de Ideias */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-forest-900 text-lg">Banco de Conteúdo — 20 Ideias Prontas</h3>
            <p className="text-gray-500 text-sm mt-0.5">Marque como "publicado" quando executar. {usedCount} / 20 publicados.</p>
          </div>
          {activePilar && (
            <button onClick={() => setActivePilar(null)}
              className="text-xs text-forest-700 border border-forest-300 px-3 py-1.5 rounded-lg hover:bg-forest-50 transition-colors">
              Mostrar todos ✕
            </button>
          )}
        </div>

        <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-forest-600 to-gold-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(usedCount / 20) * 100}%` }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-10">
          {filtered.map(ideia => {
            const isUsed = used.has(ideia.id)
            return (
              <div key={ideia.id}
                className={`bg-white rounded-2xl border p-4 shadow-sm transition-all ${isUsed ? 'opacity-50 border-gray-100' : 'border-gray-100 hover:border-forest-200 hover:shadow'}`}>
                <div className="flex items-start gap-3">
                  <button onClick={() => toggleUsed(ideia.id)} className="shrink-0 mt-0.5">
                    {isUsed
                      ? <CheckCircle size={22} className="text-green-500" />
                      : <Circle size={22} className="text-gray-200 hover:text-forest-400 transition-colors" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${pilarBadge[ideia.pilar]}`}>{pilarLabel[ideia.pilar]}</span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">{ideia.formato}</span>
                    </div>
                    <p className={`text-sm font-semibold leading-snug mb-2 ${isUsed ? 'line-through text-gray-400' : 'text-forest-900'}`}>
                      {ideia.hook}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">{ideia.visual}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA final */}
        <div className="bg-forest-800 rounded-2xl p-6 text-white text-center">
          <TrendingUp size={28} className="text-gold-500 mx-auto mb-3" />
          <p className="font-bold text-lg mb-2">Comece pelo Roteiro 1 — Apresentação Corporativa</p>
          <p className="text-white/70 text-sm max-w-lg mx-auto">
            Na próxima visita à Fundisul, grave o Roteiro 2 (Live Case). Dois vídeos e @akijardins já tem mais presença que 95% dos concorrentes de Rio do Sul.{' '}
            <span className="text-gold-500 font-semibold">Quem grava primeiro, domina primeiro.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
