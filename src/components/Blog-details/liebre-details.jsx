/* eslint-disable @next/next/no-img-element */
import React from "react";

const LiebreDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/slid/slid-liebre2.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">Descripción</h4>
                      <div className="spacial">
                        <p>
                          El motor Liebre 450 es un modelo rápido recomendado
                          para uso domiciliario. La velocidad de apertura del
                          Liebre 450 es de 20 metros en 60 segundos, lo que lo
                          convierte en uno de los motores más rápidos del
                          mercado. Además, cuenta con una instalación sencilla y
                          su funcionamiento es silencioso, lo que hace que su
                          uso sea muy práctico y cómodo. Su uso puede mejorar
                          significativamente la seguridad y la comodidad al
                          entrar y salir del garaje, lo que agrega un valor
                          significativo al hogar.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/productos/libre450.png" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/productos/dogo350.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <h6> El kit esta compuesto por:</h6>
                      <ul className="mb-80 mt-30">
                        <li>3 metros de cremallera de nylon. </li>
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
          <a href="/pdf/manual-liebre.pdf" download className="btn-leermas">
            Descargar Manual de Instrucciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiebreDetails;
