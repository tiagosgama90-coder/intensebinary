import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const stats = [
  { key: 'projects', value: 150, suffix: '+' },
  { key: 'markets', value: 12, suffix: '+' },
  { key: 'years', value: 35, suffix: '+' },
  { key: 'clients', value: 80, suffix: '+' },
]

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatItem({ statKey, value, suffix, active }: { statKey: string; value: number; suffix: string; active: boolean }) {
  const { t } = useTranslation()
  const count = useCountUp(value, 2000, active)

  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/50 text-sm uppercase tracking-wider">
        {t(`stats.${statKey}`)}
      </div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-navy-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <StatItem
              key={stat.key}
              statKey={stat.key}
              value={stat.value}
              suffix={stat.suffix}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
