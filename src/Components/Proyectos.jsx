import React from "react";
import "../Styles/proyectos.css";
// 1. Importa el hook
import { useLanguage } from "../Context/LanguageContext";

export const Proyectos = () => {
  // 2. Obtén los textos
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="projects-section">
      {/* 3. Reemplaza el texto "quemado" */}
      <h2 className="projects-title">{t.projects.title}</h2>

      <div className="projects-grid">
        {/* --- TARJETA DE PROYECTO 1 --- */}
        <div className="project-card">
          <div className="card-image"></div>
          <div className="card-content">
            <h3 className="card-title">{t.projects.card1_title}</h3>
            <p className="card-description">
              {t.projects.card1_desc}
            </p>

            <div className="card-tech">
              <i className="devicon-java-plain" title="Java"></i>
              <i className="devicon-spring-plain" title="Spring"></i>
              <i className="devicon-mysql-plain" title="MySQL"></i>
              <i className="devicon-postman-plain" title="Postman"></i>
            </div>

            <div className="card-links">
              <a
                href="https://github.com/javidm9/ClubNautico"
                className="card-link"
                aria-label="Ver código del Proyecto 1"
              >
                <i className="fa fa-github"></i> {t.projects.link_code}
              </a>
            </div>
          </div>
        </div>

        {/* --- TARJETA DE PROYECTO 2 --- */}
        <div className="project-card">
          <div className="card-image"></div>
          <div className="card-content">
            <h3 className="card-title">{t.projects.card2_title}</h3>
            <p className="card-description">
              {t.projects.card2_desc}
            </p>

            <div className="card-tech">
              <i className="devicon-react-original" title="React"></i>
              <i className="devicon-javascript-plain" title="JavaScript"></i>
              <i className="devicon-html5-plain" title="HTML"></i>
              <i className="devicon-css3-plain" title="CSS"></i>
            </div>

            <div className="card-links">
              <a href="https://github.com/javidm9/PeluControl" className="card-link" aria-label="Ver código del Proyecto 2">
                <i className="fa fa-github"></i> {t.projects.link_code}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};