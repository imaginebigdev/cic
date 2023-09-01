import React from "react";

const Contactos = () => {
  return (
    <section className="app-services section-padding bg-gray" id="servicio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center">
              <div className="item-tit mb-15">
                <div className="icon mb-3">
                  <i className="fas fa-envelope text-7xl"></i>
                </div>
                <div className="text-tit">
                  <h5>E-MAIL</h5>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "#fff" }}>
                contacto@camaraicc.com
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center">
              <div className="item-tit mb-15">
                <div className="icon mb-3">
                  <i className="fas fa-phone text-7xl"></i>
                </div>
                <div className="text-tit">
                  <h5>TELÉFONO</h5>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "#fff" }}>
                +54 299 477 4244
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center">
              <div className="item-tit mb-15">
                <div
                  className="icon mb-3"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <i className="far fa-calendar-alt text-7xl"></i>
                  <i className="far fa-clock text-7xl"></i>
                </div>
                <div className="text-tit">
                  <h5>DIAS Y HS DE ATENCIÓN</h5>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "#fff" }}>
                LUNES A VIERNES ( 9:00 A 13:00 )
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
