import React from "react";
import "../Styles/hero.css";
// 1. Importa el hook
import { useLanguage } from "../Context/LanguageContext";

export const Hero = () => {
  // 2. Obtén los textos
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-text-content">
        <p className="hero-intro">{t.hero.intro}</p>

        <h1 className="hero-name">Francisco Javier Díaz</h1>

        <h2 className="hero-title">{t.hero.title}</h2>

        <p className="hero-description">{t.hero.description}</p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            {t.hero.btn_projects}
          </a>
          <a
            href="/CV_FranciscoJavier_Díaz_Martínez.pdf"
            download
            type="application/pdf" 
            className="btn btn-secondary"
          >
            <i className="fa fa-download"></i> {t.hero.btn_cv}
          </a>
        </div>

        <h4 className="socials-title">{t.hero.socials}</h4>
        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/francisco-javier-díaz-martínez-5485b72b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/javidm9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa fa-github"></i>
          </a>
          <a href="mailto:fjavierdm9@gmail.com" aria-label="Email">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* --- COLUMNA 2: HABILIDADES (Lo nuevo) --- */}
      <div className="hero-skills-container">
        <h3 className="skills-title">{t.hero.skills_title}</h3>

        {/* El grid de habilidades no se traduce, son nombres técnicos */}
        <div className="skills-grid">
          <div className="skill-item">
            <i className="devicon-java-plain"></i>
            <span>Java</span>
          </div>
          <div className="skill-item">
            <i className="devicon-spring-plain"></i>
            <span>Spring</span>
          </div>
          <div className="skill-item">
            <i className="devicon-mysql-plain"></i>
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <i className="devicon-mongodb-plain"></i>
            <span>MongoDB</span>
          </div>
          <div className="skill-item">
            <i className="devicon-react-original"></i>
            <span>React</span>
          </div>
          <div className="skill-item">
            <i className="devicon-javascript-plain"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <i className="devicon-html5-plain"></i>
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <i className="devicon-css3-plain"></i>
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <i className="devicon-postman-plain"></i>
            <span>Postman</span>
          </div>
          <div className="skill-item">
            <i className="devicon-swagger-plain"></i>
            <span>Swagger</span>
          </div>
        </div>
      </div>
    </section>
  );
};
