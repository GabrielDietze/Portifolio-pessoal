import { HiCheckCircle, HiLightBulb, HiCode, HiChartBar, HiChat } from 'react-icons/hi'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import './ProfessionalHighlights.css'

/**
 * Seção Diferenciais Profissionais
 * Exibe os diferenciais que destacam o perfil profissional
 */
const ProfessionalHighlights = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const icons = [<HiCheckCircle />, <HiLightBulb />, <HiCode />, <HiChartBar />, <HiChat />]

  return (
    <section id="professional-highlights" className="professional-highlights">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.professionalHighlights.label}</span>
          <h2 className="section-title">{t.professionalHighlights.title}</h2>
        </div>

        <div className="highlights-grid">
          {t.professionalHighlights.items.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{icons[index]}</div>
              <p className="highlight-text">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalHighlights
