/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container" style={{ display: "flex" }}>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contactanos</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>DIRECCIÓN</h6>
                    <p>Urquiza 360, Cipolletti, Río Negro</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>DÍAS Y HORARIOS</h6>
                    <p>LUNES A VIERNES ( 9:00 A 13:00 )</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>TELÉFONO</h6>
                    <p>+54 299 477 4244</p>
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
                <a href="https://www.facebook.com/cicc.cipolletti.9">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/camaraicc/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=542994774244&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s&app_absent=0">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, NUTREN. Made with passion by{" "}
                  <Link href="https://www.imaginebig.dev/">
                    <a target="_blank">Imagine Big</a>
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
