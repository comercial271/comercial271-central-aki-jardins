import { MapPin, TrendingUp, CheckCircle, Clock, ExternalLink, Building2, Factory, Star } from 'lucide-react'

const condominios = [
  { name: 'Condomínio Alto Padrão 1',  desc: 'Rio do Sul — área verde extensa',      status: 'Prioridade' },
  { name: 'Condomínio Alto Padrão 2',  desc: 'Rio do Sul — condomínio fechado',      status: 'Prioridade' },
  { name: 'Residencial Premium',       desc: 'Rio do Sul / Laurentino — manutenção', status: 'Abordagem'  },
  { name: 'Condomínio Ituporanga',     desc: 'Ituporanga — ampla área verde',        status: 'Abordagem'  },
  { name: 'Residencial Lontras',       desc: 'Lontras — alto padrão regional',       status: 'Mapeado'    },
  { name: 'Empreendimento Lançamento', desc: 'Rio do Sul — implantação nova',        status: 'Mapeado'    },
]

const industriais = [
  { name: 'Hospital Regional Alto Vale', desc: 'Hospital de referência — área verde permanente'     },
  { name: 'UNIDAVI',                     desc: 'Universidade — campus com amplas áreas verdes'      },
  { name: 'Shopping Rio Sul',            desc: 'Shopping — paisagismo de alto padrão'               },
  { name: 'Polo Industrial Rio do Sul',  desc: 'Indústrias diversas — manutenção recorrente'        },
  { name: 'Empresa Têxtil Regional',     desc: 'Têxtil — área verde e imagem corporativa'           },
  { name: 'Agroindústria Regional',      desc: 'Setor agro — jardim e área externa corporativa'     },
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

        {/* Fundisul — alvo ativo principal */}
        <div className="bg-forest-800 rounded-2xl overflow-hidden mb-6">
          <div className="p-6 text-white">
            <span className="inline-block bg-gold-500 text-forest-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              CLIENTE ATIVO — ÂNCORA DE CREDIBILIDADE
            </span>
            <h3 className="text-2xl font-bold mb-1">Fundisul</h3>
            <div className="flex items-center gap-1.5 text-white/50 text-sm mb-5">
              <MapPin size={12} /> Rio do Sul / SC — contrato de manutenção ativo
            </div>

            <div className="grid grid-cols-3 gap-3 text-center bg-forest-900/40 rounded-xl p-4 mb-5">
              {[
                { v: 'Ativo',      l: 'Contrato vigente'       },
                { v: 'B2B',        l: 'Referência corporativa'  },
                { v: '13+ anos',   l: 'Parceria consolidada'    },
              ].map(item => (
                <div key={item.l}>
                  <div className="text-gold-500 text-lg font-bold">{item.v}</div>
                  <div className="text-white/40 text-xs mt-0.5">{item.l}</div>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              <TrendingUp size={10} /> USE EM TODA ABORDAGEM COMERCIAL
            </span>

            <ul className="flex flex-col gap-1.5 mb-5">
              {[
                { text: 'Contrato ativo — entrega mensal de manutenção', ok: true  },
                { text: 'Empresa LTDA consolidada — credibilidade para industriais', ok: true },
                { text: 'Solicitar depoimento formal do gestor responsável', gold: true },
                { text: 'Documentar com fotos antes/depois da próxima manutenção', gold: true },
                { text: 'Emitir NF mensal referente ao serviço prestado', gold: true },
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
              Gerar Proposta para Novo Alvo <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Oportunidade local */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <Star size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-900 text-sm font-bold mb-0.5">Vantagem competitiva: digital zero em Rio do Sul/SC</p>
            <p className="text-amber-800 text-sm">
              Nenhuma empresa de jardinagem local domina a busca "jardinagem Rio do Sul SC" ou "paisagismo Rio do Sul". Com GMB otimizado, você ocupa a primeira posição antes que qualquer concorrente perceba.
            </p>
          </div>
        </div>

        {/* Condomínios */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={18} className="text-forest-700" />
            <p className="font-bold text-forest-900">Condomínios e Residenciais — Rio do Sul e Região</p>
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

        {/* Industriais e Institucionais */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Factory size={18} className="text-forest-700" />
            <p className="font-bold text-forest-900">Industriais e Institucionais — Rio do Sul e Região</p>
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
