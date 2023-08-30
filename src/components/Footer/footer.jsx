/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contactanos</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p className="p-footer">Av circunvalacion 4076, Córdoba</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p className="p-footer">support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Teléfono</h6>
                    <p className="p-footer">+543516668134</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Novedades</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/productos/potroPlusSpeed">
                      <a>
                        <img src="/img/productos/potroplus.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <a>
                      <p className="p-footer">
                        POTRO PLUS SPEED: Modelo rápido recomendado para
                        portones de porte medio
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/productos/potro">
                      <a>
                        <img src="/img/productos/potro.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <a>
                      <p className="p-footer">
                        POTRO 600: Modelo recomendado para portones
                        domiciliarios.
                      </p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p className="p-footer">
                  © 2023, GEARS AUTOMATISMOS. MADE WITH PASSION BY{" "}
                  <Link href="https://imaginebig.dev">
                    <a target="_blank"> Imagine Big</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
