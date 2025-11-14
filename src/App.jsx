import React from 'react'
import './Styles/App.css'

import { NavBar } from './Components/NavBar'
import { Hero } from './Components/Hero'
import { SobreMi } from './Components/SobreMi'
import { Proyectos } from './Components/Proyectos'
import { Contacto } from './Components/Contacto'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="app">
      <NavBar />
      
      <main className="main-container">
        <Hero />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>
      
      <Footer />
    </div>
  )
}

export default App