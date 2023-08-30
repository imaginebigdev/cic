import React from "react";
import LightTheme from "../../layouts/Light";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import appData from "../../data/app.json";
import WhatsAppButton from "../../components/WhatsappButton/whatsapp-button";
import Works3 from "../../components/Works3/works3";
import AccesoriosDetails from "../../components/Blog-details/accesorios-detail";
import CallToAction from "../../components/Call-to-action/call-to-action";

const PotroPlusSpeed = () => {
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
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <NavbarArch nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="ACCESORIOS"
        paragraph="Variedad en Herramientas y Accesorios"
      />
      <AccesoriosDetails theme="light" blog={"blog"} />
      {/* 
      <Works3 /> */}
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </LightTheme>
  );
};

export default PotroPlusSpeed;
