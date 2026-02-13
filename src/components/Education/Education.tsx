import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import './Education.css'

/**
 * Componente Education
 * Destaca formação acadêmica
 */
const Education = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.education.label}</span>
          <h2 className="section-title">{t.education.title}</h2>
          <p className="section-description">{t.education.description}</p>
        </div>

        <div className="education-timeline">
          {t.education.items.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3 className="education-course">{item.course}</h3>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                  <span className="education-period">{item.status}</span>
                </div>
                <p className="education-location">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

