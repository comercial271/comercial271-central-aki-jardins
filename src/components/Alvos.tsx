import { MapPin, TrendingUp, CheckCircle, Clock, AlertTriangle, ExternalLink, Building2, Factory } from 'lucide-react'

const condominios = [
  { name: 'Ville Chamonix',       desc: 'Lotes 1.500+ m² — alto padrão',     status: 'Prioridade' },
  { name: 'Itatiba Country Club', desc: 'Campo + casas — área verde extensa', status: 'Prioridade' },
  { name: 'Terras de Santa Cruz', desc: '154 terrenos — em implantação',      status: 'Abordagem' },
  { name: 'Reserva Santa Rosa',   desc: 'Condomínio fechado — manutenção',    status: 'Abordagem' },
  { name: 'Villa Ravenna',        desc: 'Perfil premium — Itatiba',           status: 'Mapeado' },
  { name: 'Ville de France',      desc: 'Perfil premium — Itatiba',           status: 'Mapeado' },
]

const industriais = [
  { name: 'Mavalério',            desc: 'Indústria de tintas — grande porte' },
  { name: 'FortLev',              desc: 'Caixas d\'água — área industrial'    },
  { name: 'Valeo',                desc: 'Autopeças — multinacional'           },
  { name: 'Bosch Rexroth',        desc: 'Hidráulica — multinacional'          },
  { name: 'Covabra Supermercados',desc: 'Rede regional — áreas externas'      },
  { name: 'Endress+Hauser',       desc: 'Instrumentação — multinacional'      },
]

const statusColor: Record<string, string> = {
  'Prioridade': 'bg-gold-100 text-gold-700',
  'Abordagem':  'bg-green-100 text-green-700',
  'Mapeado':    'bg-blue-100 text-blue-700',
}

export default function Alvos() {
  return (
    <section id="alvos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-forest-700 text-xs font-bold uppercase tracking-widest">Oportunidades abertas</span>
          <h2 className="text-3xl font-bold text-forest-900 mt-1">Alvos Estratégicos</h2>
        </div>

        {/* Belvedere — alvo imediato */}
        <div className="bg-forest-800 rounded-2xl overflow-hidden mb-6">
          <div className="p-6 text-white">
            <span className="inline-block bg-gold-500 text-forest-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              PROCESSO ABERTO — RETOMADA IMEDIATA
            </span>
            <h3 className="text-2xl font-bold mb-1">Condomínio Belvedere</h3>
            <div className="flex items-center gap-1.5 text-white/50 text-sm mb-5">
              <MapPin size={12} /> Itatiba / SP — sem deslocamento
            </div>

            <div className="grid grid-cols-3 gap-3 text-center bg-forest-900/40 rounded-xl p-4 mb-5">
              {[
                { v: 'R$ 8.500', l: 'Com 25% margem' },
                { v: '25%',      l: 'Margem correta' },
                { v: 'R$ 6.929', l: 'Cobrado hoje' },
              ].map(item => (
                <div key={item.l}>
                  <div className="text-gold-500 text-lg font-bold">{item.v}</div>
                  <div className="text-white/40 text-xs mt-0.5">{item.l}</div>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              <TrendingUp size={10} /> LOCAL — Sem custo de deslocamento
            </span>

            <ul className="flex flex-col gap-1.5 mb-5">
              {[
                { text: 'Orçamento já entregue — síndico conhece você', ok: true },
                { text: 'Custo calculado corretamente', ok: true },
                { text: 'Contatar síndico para feedback do orçamento', gold: true },
                { text: 'Reenviar com margem de 25%', gold: true },
              ].map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-white/80">
                  {s.gold
                    ? <Clock size={12} className="text-gold-400 shrink-0" />
                    : <CheckCircle size={12} className="text-green-400 shrink-0" />}
                  {s.text}
                </li>
              ))}
            </ul>

            <a href="https://geradordepropostaselva.lovable.app" target="_blank" rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-900 font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
              Gerar Proposta <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Parceria Bosque Di Fiori */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-900 text-sm font-bold mb-0.5">Parceria estratégica: Bosque Di Fiori</p>
            <p className="text-amber-800 text-sm">
              Garden center + cafeteria + cursos em Itatiba. Vende plantas mas <strong>não mantém jardins</strong>. Canal de indicação natural — clientes que compram plantas precisam de quem mantenha.
            </p>
          </div>
        </div>

        {/* Condomínios */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={18} className="text-forest-700" />
            <p className="font-bold text-forest-900">Condomínios de Alto Padrão — Itatiba</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {condominios.map((c, i) => (
              <div key={i} className="bg-[#F4F6F0] rounded-2xl p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-bold text-forest-900 text-sm">{c.name}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${statusColor[c.status]}`}>{c.status}</span>
                </div>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Distrito Industrial */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Factory size={18} className="text-forest-700" />
            <p className="font-bold text-forest-900">Distrito Industrial Alfredo Rela — 38 empresas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industriais.map((e, i) => (
              <div key={i} className="bg-[#F4F6F0] rounded-2xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {e.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-forest-900 text-sm truncate">{e.name}</p>
                  <p className="text-gray-500 text-xs">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
