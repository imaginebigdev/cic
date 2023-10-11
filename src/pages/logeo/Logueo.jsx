/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import LogueoForm from "../../components/LogueoForm/logueoForm";

const Logueo = () => {
  /*  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null); */

  React.useEffect(
    () => {
      document.querySelector("body").classList.add("contact-page");

      /*  var navbar = navbarRef.current,
      logo = logoRef.current; */
      /* if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    } */
      /*     window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    }); */
      return () => {
        document.querySelector("body").classList.remove("contact-page");
      };
    },
    [
      /* navbarRef */
    ]
  );

  return (
    <DarkTheme>
      {/*  <NavbarMobileApp nr={navbarRef} lr={logoRef} />
      <ContactHeader /> */}
      <div className="main-content">
        <LogueoForm />
        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Logueo;
