import React, { createContext, useState, useContext } from 'react';
import { translations } from '../i18n';

// 1. Crear el Contexto
const LanguageContext = createContext();

// 2. Crear el Proveedor (el componente que "envuelve" la app)
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma por defecto: español

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  // Los textos que usará la app (o 'es' o 'en')
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Crear el Hook (para usarlo fácil en los componentes)
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};