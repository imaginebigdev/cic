/* import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import data from "../../data/blog2.json";
import BlogGrid from "../../components/Blog-grid/blog-even";
import IntroEven from "../../components/Intro-with-slider/intro-even";

const Eventos = () => {
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
      <IntroEven sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <BlogGrid blogs={data} />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Eventos; */

import React from "react";
import Navbar from "../../components/Navbar/navbar";
import LightTheme from "../../layouts/Light";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import WorksStyle2 from "../../components/Works-style2/works-style2";
import IntroEven from "../../components/Intro-with-slider/intro-even";

const Eventos = () => {
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
      <IntroEven sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <WorksStyle2 grid={3} filterPosition="left" hideFilter />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Eventos;
