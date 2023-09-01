import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";
import Testimonials from "../Testimonials/testimonials";

const AboutUs6 = () => {
  return (
    <section
      className="about-us section-padding p-0"
      id="about"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-30">
            <h6
              className="fw-600 text-u ls1 mb-30 color-font"
              style={{ color: "#003491ff" }}
            >
              {AboutUs1Date.title}
            </h6>
          </div>
          <div className="col-lg-7 img">
            <img src={AboutUs1Date.image} alt="" />
          </div>
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <ul
                style={{
                  backgroundImage:
                    "-webkit-gradient(linear, right top, left top, from(rgba(0, 53, 145, 0.649)), color-stop(#3f4cfe90), to(#326ffffe))",
                  backgroundImage:
                    "-webkit-linear-gradient(right, #003491ff, #3f4cfe, #326ffffe)",
                  backgroundImage:
                    "-o-linear-gradient(right, #003491ff, #3f4cfe, #326ffffe)",
                  backgroundImage:
                    "linear-gradient(to left, #003491ff, #3f4cfe, #326ffffe)",
                  padding: "10px",
                  color: "#fff",
                }}
              >
                <li>
                  &#8226; Promover y desarrollar la producción, la industria, el
                  comercio y los servicios en la Ciudad de Cipolletti y sus
                  adyacencias.
                </li>
                <li>
                  &#8226; Apoyar el desarrollo y mejorar la competitividad de
                  las empresas, emprendedores.
                </li>
                <li>
                  &#8226; Recabar ideas y proyectos de sus agremiados para
                  adecuar las estructuras de acuerdo a los requerimientos de las
                  nuevas realidades, adaptarse mejor a la dotación de recursos
                  usando menos capital y divisas, ser eficientes para abastecer
                  mercados pequeños, mediante la flexibilización de la
                  utilización de los recursos naturales locales y la demanda de
                  poca infraestructura.
                </li>
                <li>
                  &#8226; Promover el apoyo de organismos nacionales e
                  internacionales en cuanto a políticas de fomento en materia
                  financiera, actividades educativas, capacitación del personal,
                  dotación de bienes de capital, mejoramiento de infraestructura
                  física y transferencias tecnológicas que permitan aumentar la
                  producción y mejorar la calidad y el grado de elaboración de
                  los productos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br style={{ margin: "30px" }}></br>
        <div className="row">
          <div className="col-lg-12 text-center mb-30">
            <h6
              className="fw-600 text-u ls1 mb-30 color-font"
              style={{ color: "#003491ff" }}
            >
              {AboutUs1Date.titles}
            </h6>
          </div>
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <div className="col-lg-7 img">
                <img src={AboutUs1Date.images} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign md-mb50">
            <div className="mb-50">
              <ul
                style={{
                  backgroundImage:
                    "-webkit-gradient(linear, right top, left top, from(rgba(0, 53, 145, 0.649)), color-stop(#3f4cfe90), to(#326ffffe))",
                  backgroundImage:
                    "-webkit-linear-gradient(right, #003491ff, #3f4cfe, #326ffffe)",
                  backgroundImage:
                    "-o-linear-gradient(right, #003491ff, #3f4cfe, #326ffffe)",
                  backgroundImage:
                    "linear-gradient(to left, #003491ff, #3f4cfe, #326ffffe)",
                  padding: "10px",
                  color: "#fff",
                }}
              >
                <li>
                  &#8226; Apoyar el emprendimiento de nuevos negocios y/o el
                  crecimiento de existentes, generando planes de negocios y
                  estratégicos que permitan alcanzar los objetivos establecidos
                  por la razón social.
                </li>
                <li>
                  &#8226; Colaborar con la transición de la informalidad a la
                  formalidad empresarial.
                </li>
                <li>
                  &#8226; Contribuir con la educación financiera, tributaria y
                  legal de los participantes.
                </li>
                <li>
                  &#8226; Informar cuál es la importancia que tienen las
                  organizaciones gremiales empresariales en el sector productivo
                  municipal, provincial y nacional.
                </li>
                <li>
                  &#8226; Brindar información sobre la variedad de opciones de
                  financiamiento para la Pymes.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};

export default AboutUs6;
