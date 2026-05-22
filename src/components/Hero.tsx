import { TrendingUp, Target, DollarSign, Clock, Award, Building2 } from 'lucide-react'

const metrics = [
  { value: 'LTDA Ativa',  label: 'Empresa formalizada',  sub: 'Simples Nacional — CNPJ 53.108.649/0001-97', icon: Building2 },
  { value: 'Fundisul',    label: 'Cliente corporativo',  sub: 'Contrato ativo — referência B2B real',        icon: Award },
  { value: 'R$ 30.000',  label: 'Meta 12 meses',        sub: 'Crescimento: +900% no faturamento',           icon: TrendingUp },
  { value: '2 Sessões',  label: 'Concluídas',           sub: 'Individual 13/05 + Coletiva 14/05/2026',      icon: Clock },
  { value: '13+ anos',   label: 'No mercado',            sub: 'Experiência técnica consolidada',             icon: Clock },
  { value: 'Rio do Sul/SC', label: 'Posicionamento',    sub: 'Industrial + condomínios alto padrão',         icon: Target },
]

export default function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-forest-800 to-forest-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-gold-500 text-forest-900 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            SELVA PREMIUM — MEMBRO ATIVO
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Central AKI Jardins
          </h1>
          <p className="text-white/70 text-lg mb-2">André Krieger — Rio do Sul / SC</p>
          <p className="text-gold-500 text-xl italic font-medium mb-6">
            "Empresa registrada, Fundisul na carteira, 13 anos de mercado.<br />Agora é posicionamento digital e prospecção ativa."
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-lg">
            Aqui está tudo que foi construído na sua mentoria — diagnóstico, plano de ação,
            documentos, estratégias e o arsenal que mostra quem você já é. Use como referência diária.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <Award size={16} className="text-gold-500" />
            <span className="text-white/50 text-xs">Mentoria: Jean Francis | Sessão 1: 13/05/2026 | Sessão 2: 14/05/2026 | Check-in: 11/06/2026</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {metrics.map((m, i) => (
            <div key={i} className="bg-forest-700/50 border border-forest-600/40 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-gold-500 text-2xl font-bold mb-1">{m.value}</div>
              <div className="text-white text-sm font-semibold mb-1">{m.label}</div>
              <div className="text-white/50 text-xs">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
