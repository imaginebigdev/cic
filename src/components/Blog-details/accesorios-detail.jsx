/* eslint-disable @next/next/no-img-element */
import React from "react";
import Works3 from "../Works3/works3";

const AccesoriosDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4
                        className="extra-title"
                        style={{ textAlign: "center" }}
                      >
                        Algunos Artículos
                      </h4>
                      <div className="spacial pt-20">
                        <ul className="pb-20 ls2">
                          <li>. CREMALLERA DE NYLON</li>
                          <li>. CREMALLERA DE ACERO</li>
                          <li>. MÁSCARA DE SOLDADOR</li>
                          <li>. DISCO DE CORTE</li>
                          <li>. PORTA TORCHA</li>
                          <li>. MAZA ELECTROMAGNÉTICA</li>
                          <li>. KIT DE BROCAS ESCALONADAS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Works3 />
    </section>
  );
};

export default AccesoriosDetails;
