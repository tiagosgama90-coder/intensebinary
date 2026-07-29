import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const serviceOptions = [
  'engineering',
  'lighting',
  'consulting',
  'business',
  'realestate',
  'aviation',
] as const

export function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">
              {t('contact.label')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy-900 mt-3 mb-8">
              {t('contact.title')}
            </h2>

            <div className="space-y-6">
              <a
                href={`mailto:${t('contact.email')}`}
                className="flex items-center gap-4 text-navy-700 hover:text-sky-600 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                  <Mail className="text-sky-600" size={20} />
                </div>
                <span>{t('contact.email')}</span>
              </a>
              <a
                href={`tel:${t('contact.phone').replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-navy-700 hover:text-sky-600 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                  <Phone className="text-sky-600" size={20} />
                </div>
                <span>{t('contact.phone')}</span>
              </a>
              <div className="flex items-center gap-4 text-navy-700">
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center">
                  <MapPin className="text-sky-600" size={20} />
                </div>
                <span>{t('contact.location')}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Send className="text-emerald-600" size={28} />
                </div>
                <p className="text-navy-900 font-semibold text-lg">Mensagem enviada!</p>
                <p className="text-navy-700/60 text-sm mt-2">Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t('contact.form.service')}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t('contact.form.selectService')}
                    </option>
                    {serviceOptions.map((key) => (
                      <option key={key} value={key}>
                        {t(`services.packages.${key}.title`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-navy-950 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
                >
                  {t('contact.form.send')}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
