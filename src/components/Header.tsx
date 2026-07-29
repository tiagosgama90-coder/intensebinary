import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'mission', href: '#mission' },
  { key: 'contact', href: '#contact' },
]

export function Header() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-lg border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
              <span className="text-sky-400 font-bold text-lg">IB</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              intense<span className="text-sky-400">binary</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
              <button
                onClick={() => switchLang('pt')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  i18n.language === 'pt'
                    ? 'bg-sky-400 text-navy-950'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => switchLang('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  i18n.language === 'en'
                    ? 'bg-sky-400 text-navy-950'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-sky-400 text-navy-950 text-sm font-semibold rounded-full hover:bg-sky-300 transition-colors"
            >
              {t('nav.contact')}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-lg border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white py-3 text-base border-b border-white/5"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4">
              <Globe size={16} className="text-white/50" />
              <button
                onClick={() => switchLang('pt')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  i18n.language === 'pt' ? 'bg-sky-400 text-navy-950' : 'text-white/60'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => switchLang('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  i18n.language === 'en' ? 'bg-sky-400 text-navy-950' : 'text-white/60'
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
