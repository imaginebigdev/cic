/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FullTest = () => {
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="row"
                  style={{
                    border: "3px solid #003491ff",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.4)",
                    padding: "20px",
                  }}
                >
                  <div className="col-lg-6 valign">
                    <div className="img md-mb50">
                      <img src={"/img/ut.png"} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="cont">
                      <div>
                        <h5 style={{ color: "#003491ff" }}>
                          <a>CONVENIO MEDICUS</a>
                        </h5>
                        <p className="mt-10">
                          CONVENIO PARA LOS AFILIADOS, QUE OFRECER POLIZAS A UN
                          COSTO INFERIOR AL MERCADO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullTest;
