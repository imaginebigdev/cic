import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img }) => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      id="contacto"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Hablemos
                </h6>
                <h2 className="wow words chars splitting" data-splitting>
                  Sobre su <br /> <b className="back-color">próximo proyecto</b>
                  .
                </h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <a
              href="https://wa.me/543516668134"
              target="_blank"
              rel="noreferrer"
              className="butn bord curve wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>Contactanos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
