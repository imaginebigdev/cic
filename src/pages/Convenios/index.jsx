import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import data from "../../data/blog2.json";
import BlogGrid from "../../components/Blog-grid/blog-even";
import IntroEven from "../../components/Intro-with-slider/intro-even";
import IntroConve from "../../components/Intro-with-slider/intro-conve";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";

const Convenios = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar />
      <IntroConve sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <FullTestimonials />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Convenios;