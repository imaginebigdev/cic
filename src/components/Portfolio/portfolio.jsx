/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70" id="productos">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                LA MAS ALTA CALIDAD
              </h6>
              <h3 className="wow color-font">Nuestros Productos.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                TODOS
              </span>
              <span data-filter=".brand">MOTORES</span>
              <span data-filter=".web">ACCESORIOS</span>
              <span data-filter=".graphic">REPUESTOS ORIGINALES</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/levadizo`}>
                  <a>
                    <img src="/img/productos/levadizo.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>MALVINAS</h6>
                <span>LEVADIZO A TORSIÓN</span>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/dogo`}>
                  <a>
                    <img src="/img/productos/dogo.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>DOGO 250</h6>
                <span>CORREDIZO ESTÁNDAR</span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/liebre`}>
                  <a>
                    <img src="/img/productos/libre450.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>LIEBRE 450</h6>
                <span>CORREDIZO RÁPIDO</span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/potro`}>
                  <a>
                    <img src="/img/productos/potro.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>POTRO 600</h6>
                <span>CORREDIZO ESTÁNDAR</span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/potroPlus`}>
                  <a>
                    <img src="/img/productos/potro-plus.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>POTRO PLUS</h6>
                <span>CORREDIZO ESTÁNDAR</span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/potroPlusSpeed`}>
                  <a>
                    <img src="/img/productos/potroplus.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>POTRO PLUS SPEED</h6>
                <span>CORREDIZO RÁPIDO</span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand `}
            >
              <div className="item-img">
                <Link href={`/productos/toro`}>
                  <a>
                    <img src="/img/productos/toro.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>TORO 1000</h6>
                <span>CORREDIZO INDUSTRIAL</span>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web `}
            >
              <div className="item-img">
                <Link href={`/productos/accesorios`}>
                  <a>
                    <img src="/img/productos/accesorios.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>ACCESORIOS</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic `}
            >
              <div className="item-img">
                <Link href={`/productos/repuestos`}>
                  <a>
                    <img src="/img/productos/repuestos.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>REPUESTOS ORIGINALES</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
