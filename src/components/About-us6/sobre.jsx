import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const Sobre = () => {
  return (
    <section
      className="about-us section-padding p-0"
      id="about"
      style={{
        backgroundImage: "url(/img/nos.jpg)",
        width: "auto",
        height: "1080px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative", // Añade esta propiedad para posicionar elementos hijos de manera relativa
      }}
    >
      <div
        className="blue-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 52, 145, 0.3)", // Color azul con transparencia
        }}
      ></div>

      <div
        className="container"
        style={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        <div className="row">
          <div className="col-lg-12 text-center mb-30">
            <h1
              className="fw-600 text-u ls1 mb-30 color-font"
              style={{ color: "#fff" }}
            >
              SOBRE NOSOTROS
            </h1>
            <h4 style={{ color: "#fff" }}>
              Somos una organización civil sin fines de lucro, con personalidad
              jurídica y patrimonio propio que tiene como objetivo principal la
              defensa, promoción y protección de los intereses de sus
              agremiados.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
