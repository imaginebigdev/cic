import React from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "react-tsparticles";
import particlesConfig from "../../config/particle-config";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center">
                          <img src={"/img/c.png"} />
                          <h4 className="color-font mt-40">{slide.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </header>
  );
};

export default IntroWithSlider;
