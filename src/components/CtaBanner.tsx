import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-sky-400">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-navy-900/60 mb-8 max-w-xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-950 text-white font-semibold rounded-full hover:bg-navy-800 transition-all hover:gap-3"
        >
          {t('cta.button')}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
