import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import './Experience.css'

/**
 * Componente Experience
 * Destaca experiência profissional de forma impactante
 */
const highlightKeywords = (text: string) => {
  const keywords = [
    'Desenvolvimento',
    'manutenção',
    'melhoria',
    'SAP ABAP',
    'APIs REST',
    'integrações',
    'integração',
    'relatórios ALV',
    'funções',
    'serviços',
    'user exits',
    'enhancements',
    'interfaces',
    'debugging de código',
    'SmartForms',
    'Business Partner',
    'módulos',
    'SD',
    'MM',
    'WM',
    'LE',
    'QM',
    'FI',
    'PP',
    'PM',
    'BP',
    'Node.js',
    'React',
    'Zoho',
    'Google Maps',
  ]

  // Ordena por tamanho (maior primeiro) para evitar matches parciais
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length)

  // Escapa caracteres especiais e cria regex com word boundaries
  const escapedKeywords = sortedKeywords.map(keyword => {
    // Escapa caracteres especiais de regex
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Usa word boundaries para garantir match completo
    return `\\b${escaped}\\b`
  })

  const pattern = new RegExp(`(${escapedKeywords.join('|')})`, 'gi')
  const parts = text.split(pattern)

  return parts.map((part, index) => {
    if (!part) return null
    const isKeyword = sortedKeywords.some(k => k.toLowerCase() === part.toLowerCase())
    return isKeyword ? (
      <span key={index} className="experience-highlight">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  }).filter(Boolean)
}

const Experience = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-description">{t.experience.description}</p>
        </div>

        <div className="experience-timeline">
          {t.experience.items.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{item.company}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>
                  <span className="experience-period">{item.period}</span>
                </div>
                <ul className="experience-achievements">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{highlightKeywords(achievement)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience



