import React from 'react'
import '../Styles/navbar.css'
// 1. Importa el hook que creamos
import { useLanguage } from '../Context/LanguageContext'

export const NavBar = () => {
  // 2. Usa el hook para obtener el idioma y la función de cambiar
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="nav-menu">
          <li><a href="#sobremi">{t.nav.about}</a></li>
          <li><a href="#proyectos">{t.nav.projects}</a></li>
        </ul>
        
        <div className="nav-actions">
          <a href="#contacto" className="nav-button">
            {t.nav.contact}
          </a>

          <button onClick={toggleLanguage} className="lang-toggle">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  )
}