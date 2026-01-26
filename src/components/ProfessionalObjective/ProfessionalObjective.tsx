import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import './ProfessionalObjective.css'

/**
 * Função helper para destacar palavras-chave no texto
 */
const highlightKeywords = (text: string, keywords: string[]) => {
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
      <span key={index} className="objective-highlight">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  }).filter(Boolean)
}

/**
 * Seção Objetivo Profissional
 * Apresenta o objetivo profissional de forma clara e direta
 */
const ProfessionalObjective = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const keywords = language === 'pt'
    ? [
        'Desenvolvedor SAP ABAP',
        'ambientes produtivos',
        'análise técnica',
        'entendimento das regras de negócio',
        'soluções robustas',
        'escaláveis',
        'alta performance',
        'evolução técnica contínua',
        'responsabilidades mais complexas',
        'estratégica',
        'estabilidade dos sistemas',
        'resultados do negócio',
      ]
    : [
        'SAP ABAP Developer',
        'productive environments',
        'technical analysis',
        'understanding of business rules',
        'robust',
        'scalable',
        'high performance',
        'continuous technical evolution',
        'more complex responsibilities',
        'strategically',
        'system stability',
        'business results',
      ]

  return (
    <section id="professional-objective" className="professional-objective">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.professionalObjective.label}</span>
          <h2 className="section-title">{t.professionalObjective.title}</h2>
        </div>

        <div className="objective-content">
          {t.professionalObjective.paragraphs.map((paragraph, index) => (
            <p key={index}>{highlightKeywords(paragraph, keywords)}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalObjective
