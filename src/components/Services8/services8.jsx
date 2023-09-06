import React from "react";
import Testimonials from "../Testimonials/testimonials";

const Services8 = () => {
  return (
    <section className="app-services section-padding bg-gray" id="servicio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center">
              <br></br>
              <div className="item-tit mb-15">
                <div className="icon mb-3">
                  <i
                    className="fas fa-chart-bar"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="text-tit">
                  <h5 style={{ fontSize: "24px" }}>Mision</h5>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "#fff" }}>
                Ser una organización que promociona el desarrollo y apoyo a
                nuestros miembros y a la comunidad; unificando, innovación,
                esfuerzo, compromiso, talento y profesionalismo, para así,
                contribuir con el crecimiento nacional.
              </p>
              <br></br>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center">
              <br></br>
              <div className="item-tit mb-15">
                <div className="icon mb-3">
                  <i className="fas fa-list" style={{ fontSize: "48px" }}></i>
                </div>
                <div className="text-tit">
                  <h5 style={{ fontSize: "24px" }}>Valores</h5>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "#fff" }}>
                Experiencia / Seguridad / Excelencia / Apoyo / Profesionalismo /
                Compromiso / Respeto / Confianza / Motivación / Mejoramiento
                Continuo / Calidad / Conocimiento / Garantía / Resultados
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center">
              <div className="item-tit mb-15">
                <div className="icon mb-3">
                  <i
                    className="fas fa-eye text-7xl"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="text-tit">
                  <h5 style={{ fontSize: "24px" }}>Vision</h5>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "#fff" }}>
                Bajo el desafío de brindar apoyo institucional y empresarial a
                nuestros miembros, la Cámara de Industria y Comercio de
                Cipolletti apuesta al crecimiento de nuestra institución para
                posicionarse entre las organizaciones gremiales empresariales
                destacadas en el país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services8;
