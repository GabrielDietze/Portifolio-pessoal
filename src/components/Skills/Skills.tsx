import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import './Skills.css'

/**
 * Componente Skills
 * Exibe habilidades técnicas de forma profissional e organizada
 */
const Skills = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.skills.label}</span>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="skills-grid">
          {t.skills.categories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <span className="skill-category-count">{category.items.length}</span>
              </div>
              {category.title === 'SAP ABAP' || category.title === 'SAP ABAP' ? (
                <div className="skill-items sap-abap-items">
                  <div className="skill-subgroup">
                    <h4 className="skill-subgroup-title">
                      {language === 'pt' ? 'Competências Essenciais' : 'Core Competencies'}
                    </h4>
                    <div className="skill-items">
                      {category.items
                        .filter(item =>
                          [
                            'ALV',
                            'BAPIs',
                            'Funções',
                            'Functions',
                            'RFC',
                            'Enhancements',
                            'User Exits',
                            'Interfaces',
                            'Dicionário de Dados',
                            'Data Dictionary',
                            'Debug',
                            'debug',
                            'Dump',
                            'dump',
                          ].some(keyword => item.includes(keyword)),
                        )
                        .map((item, itemIndex) => (
                          <span key={itemIndex} className="skill-tag">
                            {item}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="skill-subgroup">
                    <h4 className="skill-subgroup-title">
                      {language === 'pt' ? 'Competências Complementares' : 'Supporting Competencies'}
                    </h4>
                    <div className="skill-items">
                      {category.items
                        .filter(
                          item =>
                            ![
                              'ALV',
                              'BAPIs',
                              'Funções',
                              'Functions',
                              'RFC',
                              'Enhancements',
                              'User Exits',
                              'Interfaces',
                              'Dicionário de Dados',
                              'Data Dictionary',
                              'Debug',
                              'debug',
                              'Dump',
                              'dump',
                            ].some(keyword => item.includes(keyword)),
                        )
                        .map((item, itemIndex) => (
                          <span key={itemIndex} className="skill-tag">
                            {item}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ) : (
              <div className="skill-items">
                {category.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
