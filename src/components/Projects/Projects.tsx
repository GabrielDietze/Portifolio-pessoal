import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import alprImg from '../../assets/projects/alpr.png'
import sapZohoImg from '../../assets/projects/zoho-crm.png'
import sapMapsImg from '../../assets/projects/google-maps-api.png'
import sapPasswordImg from '../../assets/projects/password-reset.png'
import netflixImg from '../../assets/projects/verzelflix-login.png'
import compilerImg from '../../assets/projects/compiler.svg'
import './Projects.css'

/**
 * Componente Projects
 * Exibe projetos com foco em resultados e impacto
 */
const Projects = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const imageMap: Record<string, string> = {
    alpr: alprImg,
    'sap-zoho': sapZohoImg,
    'sap-maps': sapMapsImg,
    'sap-password': sapPasswordImg,
    netflix: netflixImg,
    compiler: compilerImg,
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-description">{t.projects.description}</p>
        </div>

        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                {project.image && imageMap[project.image] ? (
                  <img
                    src={imageMap[project.image]}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-fallback">
                    <span className="project-image-text">{project.title}</span>
                  </div>
                )}
              </div>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <span className="technologies-label">Tecnologias:</span>
                <div className="technologies-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-impact">
                <span className="impact-label">Impacto:</span>
                <ul className="impact-list">
                  {project.impact.map((impact, idx) => (
                    <li key={idx}>
                      <span className="impact-icon">✓</span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>

              {project.githubUrl && (
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
