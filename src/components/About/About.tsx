import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import profileImg from '../../assets/projects/profile-about.jpeg'
import './About.css'

/**
 * Função helper para destacar palavras-chave no texto
 */
const highlightKeywords = (text: string, keywords: string[], className: string = 'about-highlight') => {
  // Ordena por tamanho (maior primeiro) para evitar matches parciais
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length)

  // Escapa caracteres especiais e cria regex
  const escapedKeywords = sortedKeywords.map(keyword => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return escaped
  })

  const pattern = new RegExp(`(${escapedKeywords.join('|')})`, 'gi')
  const parts = text.split(pattern)

  return parts.map((part, index) => {
    if (!part) return null
    const isKeyword = sortedKeywords.some(k => k.toLowerCase() === part.toLowerCase())
    return isKeyword ? (
      <span key={index} className={className}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  }).filter(Boolean)
}

/**
 * Seção Sobre mim
 * Vem logo após o Hero, reforçando quem é o profissional
 */
const About = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)
  
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gabriel-dietze',
    github: 'https://github.com/GabrielDietze',
    resume: '/gabriel-dietze-curriculo.pdf',
  }

  const keywords = language === 'pt' 
    ? [
        'Desenvolvedor SAP ABAP',
        'ALV',
        'SmartForms',
        'integrações entre sistemas SAP e não-SAP',
        'programação orientada a objetos (OO ABAP)',
        'manipulação de banco de dados',
        'performance',
        'organização do código',
        'aderência às boas práticas SAP',
        'projetos de melhoria e sustentação',
        'análise técnica',
        'desenvolvimento',
        'testes',
        'transporte de requests',
        'suporte pós-implantação',
        'ambientes produtivos',
        'correções emergenciais',
        'melhorias contínuas',
        'demandas críticas de negócio',
        'estabilidade',
        'rastreabilidade',
        'qualidade das entregas',
      ]
    : [
        'SAP ABAP Developer',
        'ALV',
        'SmartForms',
        'integrations between SAP and non-SAP systems',
        'object-oriented programming (OO ABAP)',
        'database manipulation',
        'performance',
        'code organization',
        'adherence to SAP best practices',
        'improvement and maintenance projects',
        'technical analysis',
        'development',
        'testing',
        'request transportation',
        'post-implementation support',
        'productive environments',
        'emergency corrections',
        'continuous improvements',
        'critical business demands',
        'stability',
        'traceability',
        'delivery quality',
      ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-wrapper">
            <img src={profileImg} alt="Foto de Gabriel Dietze" className="about-photo" loading="lazy" />
          </div>

          <div className="about-content">
            <span className="section-label">{t.about.label}</span>
            <h2 className="section-title">{t.about.title}</h2>

            <div className="about-text">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{highlightKeywords(paragraph, keywords)}</p>
              ))}
            </div>

            <div className="about-actions">
              <a href={socialLinks.resume} download className="btn btn-primary">
                <HiDocumentText style={{ marginRight: 8 }} />
                {t.about.resumeButton}
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaLinkedin style={{ marginRight: 8 }} />
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub style={{ marginRight: 8 }} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


