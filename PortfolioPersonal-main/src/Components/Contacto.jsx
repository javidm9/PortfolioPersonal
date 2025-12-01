import React from 'react'
import '../Styles/contacto.css'
// 1. Importa el hook
import { useLanguage } from '../Context/LanguageContext'

export const Contacto = () => {
  // 2. Obtén los textos
  const { t } = useLanguage();

  return (
    <section id="contacto" className="contact-section">
      {/* 3. Reemplaza el texto "quemado" */}
      <h2 className="contact-title">{t.contact.title}</h2>
      <p className="contact-description">
        {t.contact.description}
      </p>
      
      <a href="mailto:fjavierdm9@gmail.com" className="btn-primary contact-button">
        {t.contact.button}
      </a>
    </section>
  )
}