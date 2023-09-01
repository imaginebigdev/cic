import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import data from "../../data/blog2.json";
import BlogGrid from "../../components/Blog-grid/blog-even";
import IntroEven from "../../components/Intro-with-slider/intro-even";
import IntroConve from "../../components/Intro-with-slider/intro-conve";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import IntroCont from "../../components/Intro-with-slider/intro-cont";
import Contactos from "../../components/Services8/contacto";
import ContactForm from "../../components/Contact-form/contact-form";

const Contacto = () => {
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
      <IntroCont sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Contactos />
        <ContactForm />

        <Footer />
      </div>
    </LightTheme>
  );
};

export default Contacto;
