import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import { HiMail, HiDocumentText } from 'react-icons/hi'
import './Contact.css'

/**
 * Componente Contact
 * Seção de contato profissional
 */
const Contact = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      const textArea = document.createElement('textarea')
      textArea.value = t.contact.email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

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
              <button
                onClick={copyEmail}
                className="contact-copy-button"
                aria-label="Copiar e-mail"
              >
                {copied ? (
                  <span className="copied-text">{t.contact.copied}</span>
                ) : (
                  <>
                    <HiDocumentText className="copy-icon" />
                    <span>{t.contact.copyButton}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
