import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import AboutUs6 from "../../components/About-us6/about-us6";
import Services8 from "../../components/Services8/services8";
import Puestos from "../../components/Services8/puestos";
import Sobre from "../../components/About-us6/sobre";

const Cic = () => {
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
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Sobre />
        <Services8 />
        <AboutUs6 />
        <Puestos />
        {/* <Services style="4item" />
        <Portfolio grid={3} filterPosition="center" />
        <Blogs4 />
        <FullTestimonials noPadding />
        <CallToAction /> */}

        <Footer />
      </div>
    </LightTheme>
  );
};

export default Cic;
