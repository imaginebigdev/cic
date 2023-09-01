import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Blog from "../../components/Blog-list/blog-list";
import data from "../../data/blog1.json";
import IntroCurso from "../../components/Intro-with-slider/intro-curso";

const Cursos = () => {
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
      <IntroCurso sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Blog blogs={data} />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Cursos;
