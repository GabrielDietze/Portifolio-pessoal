import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

/**
 * Contexto para gerenciar o tema (claro/escuro) da aplicação
 * Armazena o tema atual e fornece funções para alterná-lo
 */
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Provider do contexto de tema
 * Persiste a preferência do usuário no localStorage
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Verifica se há preferência salva ou usa o tema do sistema
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      return savedTheme
    }
    // Verifica preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  // Aplica o tema ao documento
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  /**
   * Alterna entre tema claro e escuro
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Hook personalizado para acessar o contexto de tema
 * @throws Error se usado fora do ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}

