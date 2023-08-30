import React from "react";
import LightTheme from "../../layouts/Light";
import BlogDetails from "../../components/Blog-details/dogo-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import appData from "../../data/app.json";
import DogoDetails from "../../components/Blog-details/dogo-details";
import CallToAction from "../../components/Call-to-action/call-to-action";
import WhatsAppButton from "../../components/WhatsappButton/whatsapp-button";

const Dogo = () => {
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
        title="DOGO 250"
        paragraph="Modelo recomendado para uso domiciliario o portones de bajo porte"
      />
      <DogoDetails theme="light" blog={"blog"} />
      <CallToAction />
      <WhatsAppButton />
      <Footer />
    </LightTheme>
  );
};

export default Dogo;
