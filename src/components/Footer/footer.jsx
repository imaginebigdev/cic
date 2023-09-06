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
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div
                className="social"
                style={{ color: "#003491ff", borderColor: "#003491ff" }}
              >
                <a
                  href="https://www.facebook.com/cicc.cipolletti.9"
                  style={{
                    color: "#003491ff",
                    borderColor: "#003491ff",
                    backgroundColor: "#ffffff", // Color de fondo predeterminado
                    transition: "background-color 0.3s ease", // Transición suave al cambiar el color de fondo
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#1a3f95ff"; // Color de fondo al hacer hover
                    e.target.style.color = "#fff"; // Color de texto al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#ffffff"; // Restaurar el color de fondo predeterminado al quitar el hover
                    e.target.style.color = "#003491ff"; // Restaurar el color de texto predeterminado al quitar el hover
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/camaraicc/"
                  style={{
                    color: "#003491ff",
                    borderColor: "#003491ff",
                    backgroundColor: "#ffffff", // Color de fondo predeterminado
                    transition: "background-color 0.3s ease", // Transición suave al cambiar el color de fondo
                  }}
                  onMouseEnter={(e) => {
                    (e.target.style.background = "#f09433"),
                      (e.target.style.background =
                        "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"),
                      (e.target.style.background =
                        "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"),
                      (e.target.style.background =
                        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"),
                      (e.target.style.filter =
                        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )"); // Color de fondo al hacer hover
                    e.target.style.color = "#fff"; // Color de texto al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#ffffff"; // Restaurar el color de fondo predeterminado al quitar el hover
                    e.target.style.backgroundColor = "#ffffff";
                    e.target.style.color = "#003491ff"; // Restaurar el color de texto predeterminado al quitar el hover
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=542994774244&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s&app_absent=0"
                  style={{
                    color: "#003491ff",
                    borderColor: "#003491ff",
                    backgroundColor: "#ffffff", // Color de fondo predeterminado
                    transition: "background-color 0.3s ease", // Transición suave al cambiar el color de fondo
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#25D366"; // Color de fondo al hacer hover
                    e.target.style.color = "#fff"; // Color de texto al hacer hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#ffffff"; // Restaurar el color de fondo predeterminado al quitar el hover
                    e.target.style.color = "#003491ff"; // Restaurar el color de texto predeterminado al quitar el hover
                  }}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, CIC. Made with passion by{" "}
                  <Link href="https://www.imaginebig.dev/">
                    <a target="_blank" style={{ color: "#003491ff" }}>
                      Imagine Big
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-50">
              <ul>
                <li>
                  <span
                    className="icon pe-7s-map-marker"
                    style={{ color: "#003491ff" }}
                  ></span>
                  <div className="cont">
                    <h6 style={{ color: "#003491ff" }}>DIRECCIÓN</h6>
                    <p>Urquiza 360, Cipolletti, Río Negro</p>
                  </div>
                </li>
                <br></br>
                <li>
                  <span
                    className="icon pe-7s-mail"
                    style={{ color: "#003491ff" }}
                  ></span>
                  <div className="cont">
                    <h6 style={{ color: "#003491ff" }}>DÍAS Y HORARIOS</h6>
                    <p>LUNES A VIERNES ( 9:00 A 13:00 )</p>
                  </div>
                </li>
                <br></br>
                <li>
                  <span
                    className="icon pe-7s-call"
                    style={{ color: "#003491ff" }}
                  ></span>
                  <div className="cont">
                    <h6 style={{ color: "#003491ff" }}>TELÉFONO</h6>
                    <p>+54 299 477 4244</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
