import { useTranslation } from 'react-i18next'
import {
  Target,
  Eye,
  Shield,
  Heart,
  Handshake,
  Award,
  Sparkles,
} from 'lucide-react'

const valueIcons = {
  consistency: Shield,
  wellness: Heart,
  loyalty: Handshake,
  honor: Award,
  beauty: Sparkles,
}

const valueKeys = Object.keys(valueIcons) as (keyof typeof valueIcons)[]

export function Mission() {
  const { t } = useTranslation()

  return (
    <section id="mission" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">
            {t('mission.label')}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center mb-6">
              <Target className="text-sky-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              {t('mission.missionTitle')}
            </h3>
            <p className="text-navy-700/70 leading-relaxed">{t('mission.missionText')}</p>
          </div>

          <div className="bg-navy-950 rounded-2xl p-8 lg:p-10 text-white">
            <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center mb-6">
              <Eye className="text-sky-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('mission.visionTitle')}</h3>
            <p className="text-white/70 leading-relaxed">{t('mission.visionText')}</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-12">
            {t('mission.valuesTitle')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key]
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-sky-400/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center mb-4 group-hover:bg-sky-400/20 transition-colors">
                    <Icon className="text-sky-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">
                    {t(`mission.values.${key}.title`)}
                  </h4>
                  <p className="text-sm text-navy-700/60 leading-relaxed">
                    {t(`mission.values.${key}.desc`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
