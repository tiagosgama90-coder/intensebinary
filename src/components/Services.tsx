import { useTranslation } from 'react-i18next'
import {
  Zap,
  Lightbulb,
  ClipboardCheck,
  TrendingUp,
  Building2,
  Plane,
  ArrowRight,
  Search,
  FileText,
  HeadphonesIcon,
} from 'lucide-react'

const packageConfig = [
  { key: 'engineering', icon: Zap, color: 'sky' },
  { key: 'lighting', icon: Lightbulb, color: 'amber' },
  { key: 'consulting', icon: ClipboardCheck, color: 'emerald' },
  { key: 'business', icon: TrendingUp, color: 'violet' },
  { key: 'realestate', icon: Building2, color: 'rose' },
  { key: 'aviation', icon: Plane, color: 'cyan' },
] as const

const modelConfig = [
  { key: 'diagnostic', icon: Search },
  { key: 'project', icon: FileText },
  { key: 'support', icon: HeadphonesIcon },
] as const

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  sky: { bg: 'bg-sky-50', icon: 'text-sky-600', border: 'border-sky-100', badge: 'bg-sky-400/10 text-sky-700' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-100', badge: 'bg-amber-400/10 text-amber-700' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100', badge: 'bg-emerald-400/10 text-emerald-700' },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-600', border: 'border-violet-100', badge: 'bg-violet-400/10 text-violet-700' },
  rose: { bg: 'bg-rose-50', icon: 'text-rose-600', border: 'border-rose-100', badge: 'bg-rose-400/10 text-rose-700' },
  cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-100', badge: 'bg-cyan-400/10 text-cyan-700' },
}

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-24 lg:py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-wider">
            {t('services.label')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-5">
            {t('services.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-white/40 text-sm font-semibold uppercase tracking-wider text-center mb-8">
            {t('services.modelsLabel')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {modelConfig.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-400/10 flex items-center justify-center mb-5 group-hover:bg-sky-400/20 transition-colors">
                  <Icon className="text-sky-400" size={22} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {t(`services.models.${key}.name`)}
                </h4>
                <span className="text-sky-400 text-xs font-medium uppercase tracking-wider">
                  {t(`services.models.${key}.tagline`)}
                </span>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">
                  {t(`services.models.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packageConfig.map(({ key, icon: Icon, color }) => {
            const colors = colorMap[color]
            const items = t(`services.packages.${key}.items`, { returnObjects: true }) as string[]

            return (
              <div
                key={key}
                className="bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-sky-400/5 transition-all duration-300 group"
              >
                <div className={`${colors.bg} p-6 border-b ${colors.border}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                      <Icon className={colors.icon} size={22} />
                    </div>
                  </div>
                  <h3 className="text-navy-900 font-bold text-lg">
                    {t(`services.packages.${key}.title`)}
                  </h3>
                  <p className="text-navy-700/60 text-sm mt-1">
                    {t(`services.packages.${key}.subtitle`)}
                  </p>
                  <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                    {t(`services.packages.${key}.for`)}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-navy-700/40 uppercase tracking-wider mb-4">
                    {t('services.includes')}
                  </p>
                  <ul className="space-y-2.5 flex-1">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-navy-700/70">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} shrink-0 mt-1.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500 transition-colors group-hover:gap-3"
                  >
                    {t('services.cta')}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
