import React from 'react'
import '../Styles/footer.css'
// 1. Importa el hook
import { useLanguage } from '../Context/LanguageContext'

export const Footer = () => {
  // 2. Obtén los textos
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/francisco-javier-díaz-martínez-5485b72b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/javidm9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa fa-github"></i>
          </a> 
        </div>
        {/* 3. Reemplaza el texto "quemado" */}
        <p className="footer-text">
          {t.footer.text}
        </p>
      </div>
    </footer>
  )
}