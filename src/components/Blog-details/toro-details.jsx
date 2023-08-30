/* eslint-disable @next/next/no-img-element */
import React from "react";

const ToroDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/slid/slid-toro.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">Descripción</h4>
                      <div className="spacial">
                        <p>
                          El motor corredizo Toro 1000 es un modelo recomendado
                          portones de medio a alto porte. El toro 1000 es un
                          motor resistente y confiable, diseñado para brindar
                          seguridad y comodidad en la automatización de
                          portones. Además, cuenta con un funcionamiento
                          silencioso y una instalación sencilla, lo que lo
                          convierte en una excelente opción para aquellos que
                          buscan un motor de alta calidad y eficiencia.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/productos/toro.png" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/productos/toro2.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <h6> El kit esta compuesto por:</h6>
                      <ul className="mb-80 mt-30">
                        <li>3 metros de cremallera de acero. </li>
                        <li>2 controles. </li>
                        <li>Accesorios de instalación. </li>
                        <li>Electrónica lista para instalar. </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <a href="/pdf/manual-toro.pdf" download className="btn-leermas">
            Descargar Manual de Instrucciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToroDetails;
