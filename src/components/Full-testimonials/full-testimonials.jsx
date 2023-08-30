/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding
            ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
        id="clientes"
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Comentarios
                  </h6>
                  <h3 className="wow color-font">
                    Qué dicen de nosotros nuestros clientes?
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re pt-80">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/cliente01.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Javier Marosi
                        </h6>
                        <span className="author-details">
                          Compró motor TORO 1000
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    ¡Muy recomendable! Gear Automatismos brinda un excelente
                    servicio al cliente y su motor para portón industrial es de
                    alta calidad. ¡Estoy muy satisfecho con mi compra!
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/cliente02.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Axel Regelman
                        </h6>
                        <span className="author-details">
                          Compro motor LIEBRE 450
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    ¡El motor Liebre 450 de Gear Automatismos es impresionante!
                    La velocidad de cerrado y seguridad que brinda son de
                    primera clase. ¡Muy recomendado!
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/cliente03.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Héctor Espinoza
                        </h6>
                        <span className="author-details">
                          Compro motor levadizo
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    ¡Excelente servicio al cliente de Gear Automatismos! Desde
                    el primer contacto, me sentí bienvenido y bien atendido.
                    ¡Gracias por hacer que el proceso de compra sea tan fácil!
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/cliente04.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Sofía Gimenez
                        </h6>
                        <span className="author-details">
                          Compro repuestos.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    ¡Gear Automatismos tiene una gran variedad de repuestos para
                    motores de portones! Estoy muy satisfecho con mi compra y el
                    servicio recibido.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
