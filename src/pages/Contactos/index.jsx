import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import IntroCont from "../../components/Intro-with-slider/intro-cont";
import Contactos from "../../components/Services8/contacto";
import ContactForm from "../../components/Contact-form/contact-form";

const Contacto = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const c = true;

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
      <Navbar c />
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
