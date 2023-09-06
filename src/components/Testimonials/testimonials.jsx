import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends React.Component {
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
        id="testimonials-arch"
        className="testimonials section-padding position-re"
        style={{ backgroundColor: "#fff", paddingTop: "-1000px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h4
                  className="wow fadeIn"
                  data-wow-delay=".3s"
                  style={{ color: "#003491ff" }}
                >
                  COMENTARIOS DE NUESTROS SOCIOS
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  arrows: true,
                  centerMode: false, // Cambio a false
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1, // Cambio a 1
                  slidesToShow: 1, // Cambio a 1
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
                <div className="item valing">
                  <div className="cont ml-5 mr-1">
                    <div className="author">
                      <h6
                        className="author-name color-font"
                        style={{ textAlign: "center", marginBottom: "10px" }}
                      >
                        Pablo Espinoza.
                      </h6>
                      <span
                        className="author-details"
                        style={{ textAlign: "center", marginBottom: "10px" }}
                      >
                        (Emprendedor)
                      </span>
                    </div>
                  </div>

                  <div className="valign" style={{ textAlign: "center" }}>
                    <p
                      className="fz-20 fw-200 ml-1 mr-5"
                      style={{ fontSize: "14px" }}
                    >
                      &quot;Estimado Jesús, quiero agradecerte el tiempo que me
                      has dedicado para informarme y asesorarme, como
                      emprendedor es muy grato saber que hay un lugar (CIC)
                      donde puedo presentar mi proyecto y que alguien con tu
                      conocimiento y experiencia está dispuesto a
                      acompañarme.&quot;
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/*  {this.renderArrows()} */}
      </section>
    );
  }
}

export default Testimonials;
