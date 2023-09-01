import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import data from "../../data/blog3.json";
import IntroNoti from "../../components/Intro-with-slider/intro-noti";
import BlogGrid from "../../components/Blog-grid/blog-grid";
import LightTheme from "../../layouts/Light";

const Noticias = () => {
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
      <IntroNoti sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <BlogGrid blogs={data} />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Noticias;
