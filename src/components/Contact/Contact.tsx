import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import { HiMail, HiPaperAirplane } from 'react-icons/hi'
import './Contact.css'

/**
 * Componente Contact
 * Seção de contato profissional
 */
const Contact = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  // Cria o link mailto com assunto e corpo pré-preenchidos
  const mailtoLink = `mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${encodeURIComponent(t.contact.emailBody)}`

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="section-header">
            <span className="section-label">{t.contact.label}</span>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-description">{t.contact.description}</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <HiMail className="contact-icon" />
            </div>
            
            <div className="contact-email-section">
              <input
                type="text"
                value={t.contact.email}
                readOnly
                className="contact-email-input"
                aria-label="E-mail de contato"
              />
              <a
                href={mailtoLink}
                className="contact-copy-button"
                aria-label="Enviar e-mail"
              >
                <HiPaperAirplane className="copy-icon" />
                <span>{t.contact.sendEmailButton}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
