import React from "react";
import Navbar from "../../components/Navbar/navbar";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import LightTheme from "../../layouts/Light";

import appData from "../../data/app.json";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import WhatsAppButton from "../../components/WhatsappButton/whatsapp-button";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <NavbarArch nr={navbarRef} lr={logoRef} />
      <PagesHeader />
      <AboutIntro />
      <MinimalArea />
      <CallToAction />
      <WhatsAppButton />
      <Footer />
    </LightTheme>
  );
};

export default About;
