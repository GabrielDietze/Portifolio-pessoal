import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

/**
 * Tipos de idioma suportados
 */
export type Language = 'pt' | 'en'

/**
 * Contexto para gerenciar o idioma da aplicação
 * Armazena o idioma atual e fornece funções para alterá-lo
 */
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Provider do contexto de idioma
 * Persiste a preferência do usuário no localStorage
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Detecta o idioma do navegador ou usa idioma salvo
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) return savedLanguage
    
    // Detecta o idioma do navegador
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'pt-BR'
    const languageCode = browserLanguage.split('-')[0].toLowerCase()
    
    // Retorna 'en' se for inglês, senão 'pt'
    return languageCode === 'en' ? 'en' : 'pt'
  })

  // Salva o idioma no localStorage quando alterado
  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  /**
   * Altera o idioma da aplicação
   * @param lang - Novo idioma ('pt' ou 'en')
   */
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook personalizado para acessar o contexto de idioma
 * @throws Error se usado fora do LanguageProvider
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider')
  }
  return context
}

