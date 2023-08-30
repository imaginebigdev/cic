/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/about.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-50">
              <h4 className="wow color-font">Sobre Nosotros.</h4>
              <p className="wow txt" data-splitting>
                Nos enfocamos en ofrecer un servicio personalizado y de alta
                calidad, con el compromiso de superar las expectativas de
                nuestros clientes en cada transacción.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Nuestra Misión
                  </h6>
                  <p>
                    Es ofrecer soluciones de alta calidad y tecnología de punta
                    en la automatización de portones, a través de una atención
                    personalizada y un equipo de profesionales altamente
                    capacitados.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> ¿Que Nos Distinge?
                  </h6>
                  <ul>
                    <li>
                      <p>
                        . Mayor seguridad para el acceso a tu hogar sin tener
                        que bajar del auto.
                      </p>
                    </li>
                    <li>
                      <p>
                        . Productos de alta calidad y tecnología moderna con
                        Garantía de 2 años que lo respalda.
                      </p>
                    </li>
                    <li>
                      <p>
                        . Asesoramiento personalizado a nuestros clientes para
                        desarrollar sus proyectos.
                      </p>
                    </li>
                    <li>
                      <p>
                        . Alcance Nacional, envíos en tiempo y forma a todo el
                        país.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> ¿Por Qué Elegirnos?
                  </h6>
                  <p>
                    Porque ofrecemos soluciones de alta calidad y tecnología de
                    punta en la automatización de portones, con productos de las
                    mejores marcas del mercado.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
