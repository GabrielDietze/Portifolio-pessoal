import { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../i18n/translations'
import { HiMenu, HiX, HiHome, HiLightBulb, HiMail, HiGlobeAlt, HiBriefcase } from 'react-icons/hi'
import { BsMoon, BsSun } from 'react-icons/bs'
import './Header.css'

/**
 * Header profissional e minimalista
 */
const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = useTranslations(language)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageToggle = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      handleNavClick()
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <HiMenu />
        </button>

        {isMenuOpen && (
          <>
            <div className="header-overlay" onClick={handleNavClick}></div>
            <nav className="sidebar-menu open">
              <button className="menu-close" onClick={handleNavClick} aria-label="Fechar menu">
                <HiX />
              </button>
              <ul className="nav-list">
                <li>
                  <button onClick={() => scrollToSection('home')} className="nav-link">
                    <HiHome className="nav-icon" />
                    <span>{t.nav.home}</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('experience')} className="nav-link">
                    <HiBriefcase className="nav-icon" />
                    <span>{t.nav.experience}</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('skills')} className="nav-link">
                    <HiLightBulb className="nav-icon" />
                    <span>{t.nav.skills}</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('projects')} className="nav-link">
                    <HiLightBulb className="nav-icon" />
                    <span>{t.nav.projects}</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="nav-link">
                    <HiMail className="nav-icon" />
                    <span>{t.nav.contact}</span>
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <button onClick={() => scrollToSection('home')} className="nav-link">
                {t.nav.home}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                {t.nav.experience}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                {t.nav.skills}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                {t.nav.projects}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-controls">
          <button
            className="control-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
          >
            {theme === 'dark' ? <BsSun /> : <BsMoon />}
          </button>
          <button
            className="control-button"
            onClick={handleLanguageToggle}
            aria-label="Alternar idioma"
          >
            <HiGlobeAlt />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
