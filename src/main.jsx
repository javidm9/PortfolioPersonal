import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'

// 1. Importa el Proveedor
import { LanguageProvider } from './Context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envuelve tu <App /> con él */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)