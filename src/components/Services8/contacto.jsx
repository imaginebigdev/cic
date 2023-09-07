import React from "react";

const Contactos = () => {
  return (
    <section className="app-services section-padding bg-gray" id="servicio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center" style={{ height: "100%" }}>
              <div className="item-tit mb-4 d-flex flex-column align-items-center justify-content-center">
                <div className="icon">
                  <i
                    className="fas fa-envelope text-20xl"
                    style={{ fontSize: "70px", marginLeft: "14px" }}
                  ></i>
                </div>
                <div className="text-tit">
                  <h5 className="mb-4">E-MAIL</h5>
                </div>
              </div>
              <p style={{ textAlign: "center", color: "#fff" }}>
                contacto@camaraicc.com
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center" style={{ height: "100%" }}>
              <div className="item-tit mb-4 d-flex flex-column align-items-center">
                <div className="icon">
                  <i
                    className="fas fa-phone text-20xl"
                    style={{ fontSize: "70px", marginLeft: "14px" }}
                  ></i>
                </div>
                <div className="text-tit">
                  <h5 className="mb-4">TELÉFONO</h5>
                </div>
              </div>
              <p style={{ textAlign: "center", color: "#fff" }}>
                +54 299 477 4244
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item mb-30 text-center" style={{ height: "100%" }}>
              <div className="item-tit mb-4 d-flex flex-column align-items-center">
                <div className="icon">
                  <i
                    className="far fa-calendar-alt text-20xl"
                    style={{ fontSize: "70px", marginLeft: "14px" }}
                  ></i>
                </div>
                <div className="text-tit">
                  <h5 className="mb-4">HORARIOS DE ATENCIÓN</h5>
                </div>
              </div>
              <p style={{ textAlign: "center", color: "#fff" }}>
                LUNES A VIERNES (9:00 A 13:00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
