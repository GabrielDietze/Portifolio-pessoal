import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Hero.css'

/**
 * Hero Section - Primeira impressão profissional
 * Foco em credibilidade e senioridade
 */
const Hero = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gabriel-dietze',
    github: 'https://github.com/GabrielDietze',
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>{t.hero.badge}</span>
          </div>
          
          <h1 className="hero-name">{t.hero.title}</h1>
          
          <div className="hero-role">
            <span className="role-prefix">{t.hero.rolePrefix}</span>
            <span className="role-main">{t.hero.role}</span>
          </div>
          
          <p className="hero-description">{t.hero.description}</p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              {t.hero.cta}
            </a>
            <a href="#projects" className="btn btn-secondary">
              {t.hero.viewWork}
            </a>
          </div>
          
          <div className="hero-social">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
