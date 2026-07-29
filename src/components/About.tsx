import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const { t } = useTranslation()

  const highlights = ['highlight1', 'highlight2', 'highlight3'] as const

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">
              {t('about.label')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-900 mt-3 mb-8 leading-tight">
              {t('about.title')}
            </h2>

            <div className="space-y-5 text-navy-700/80 leading-relaxed">
              <p>{t('about.intro')}</p>
              <p>{t('about.history')}</p>
              <p>{t('about.specialization')}</p>
              <p>{t('about.consulting')}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-navy-950 rounded-2xl p-8 lg:p-10 text-white">
              <div className="grid gap-4">
                {highlights.map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <CheckCircle2 className="text-sky-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-white/90">{t(`about.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '35+', label: 'Anos' },
                { value: '2019', label: 'Fundada' },
                { value: 'PT', label: 'Base' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100"
                >
                  <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-xs text-navy-700/50 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
