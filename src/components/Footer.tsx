import { useTranslation } from 'react-i18next'

const navItems = ['home', 'about', 'services', 'mission', 'contact'] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                <span className="text-sky-400 font-bold text-sm">IB</span>
              </div>
              <span className="text-white font-semibold">
                intense<span className="text-sky-400">binary</span>
              </span>
            </div>
            <p className="text-white/40 text-sm">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">
              {t('footer.links')}
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">
              {t('contact.label')}
            </h4>
            <div className="space-y-2 text-sm text-white/40">
              <p>{t('contact.email')}</p>
              <p>{t('contact.phone')}</p>
              <p>{t('contact.location')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-white/30 text-sm">
          &copy; {year} Intensebinary. {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
