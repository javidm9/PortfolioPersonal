import React from "react";
import "../Styles/sobremi.css";
// 1. Importa el hook de lenguaje
import { useLanguage } from "../Context/LanguageContext";

export const SobreMi = () => {
  // 2. Obtén los textos
  const { t } = useLanguage();

  return (
    <section id="sobremi" className="about-section">
      <div className="about-content">
        {/* --- COLUMNA IZQUIERDA: TEXTO --- */}
        <div className="about-text">
          {/* 3. Reemplaza el texto "quemado" por las variables 't' */}
          <h2>{t.about.title}</h2>
          <p>
            {t.about.p1_1}
            <strong>{t.about.p1_2}</strong>
            {t.about.p1_3}
          </p>
          <p>
            {t.about.p2_1}
            <strong>{t.about.p2_2}</strong>
            {t.about.p2_3}
          </p>
          <p>
            {t.about.p3_1}
            <strong>{t.about.p3_2}</strong>
            {t.about.p3_3}
            <strong>{t.about.p3_4}</strong>
            {t.about.p3_5}
          </p>
        </div>

        {/* --- COLUMNA DERECHA: TIMELINE + IDIOMAS --- */}
        <div className="about-timeline">
          {/* Bloque de Formación */}
          <h3 className="timeline-title">{t.about.timeline_title_1}</h3>
          <div className="timeline-item">
            <h4>{t.about.item_1_title}</h4>
            <p>{t.about.item_1_desc}</p>
          </div>
          <div className="timeline-item">
            <h4>{t.about.item_2_title}</h4>
            <p>{t.about.item_2_desc}</p>
          </div>

          <div className="about-extras">
            <div className="extras-column">
              <h3 className="extras-title">
                <i className="fa fa-language"></i> {t.about.extras_title_1}
              </h3>
              <ul className="extras-list">
                <li>
                  <strong>{t.about.lang_1_key}</strong> {t.about.lang_1_val}
                </li>
                <li>
                  <strong>{t.about.lang_2_key}</strong> {t.about.lang_2_val}
                </li>
              </ul>
            </div>
          </div>

          {/* Bloque de Experiencia */}
          <h3 className="timeline-title">{t.about.timeline_title_2}</h3>
          <div className="timeline-item">
            <h4>{t.about.item_3_title}</h4>
            <p>{t.about.item_3_desc}</p>
          </div>
          <div className="timeline-item">
            <h4>{t.about.item_4_title}</h4>
            <p>{t.about.item_4_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};