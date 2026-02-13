import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import ProfessionalHighlights from './components/ProfessionalHighlights/ProfessionalHighlights'
import Projects from './components/Projects/Projects'
import ProfessionalObjective from './components/ProfessionalObjective/ProfessionalObjective'
import Contact from './components/Contact/Contact'
import './App.css'

/**
 * Componente principal da aplicação
 * Organiza todos os componentes e contextos
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <ProfessionalHighlights />
            <Projects />
            <ProfessionalObjective />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

