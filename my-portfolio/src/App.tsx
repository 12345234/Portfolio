// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'


function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} onThemeToggle={toggle} />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}