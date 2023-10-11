import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import DarkTheme from "../../layouts/Dark";
import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import blogApp from "../../fb";
import VerNoticias from "../../components/VerNoticias/verNoticias";
import AgregarNoticia from "../../components/Agregar-noticia/agregarNoticia";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import Footer from "../../components/Footer/footer";

const firestore = getFirestore(blogApp);

const HomeAdmin = ({ correoUsuario }) => {
  /*   console.log(correoUsuario); */
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [arrayNoticias, setArrayNoticias] = useState(null);
  async function buscarDocOrCrearDoc(idDocumento) {
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);

    const consulta = await getDoc(docuRef);

    if (consulta.exists()) {
      const infoNoticia = consulta.data();

      return infoNoticia.noti;
    } else {
      await setDoc(docuRef, { noti: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoNoticia = consulta.data();

      return infoNoticia.noti;
    }
  }
  React.useEffect(() => {
    async function fetchNoticias() {
      const noticiasfetch = await buscarDocOrCrearDoc(correoUsuario);
      console.log("ad", [noticiasfetch]);
      setArrayNoticias([noticiasfetch].reverse());
    }

    fetchNoticias();
  }, []);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
    /* fetchNoticias(); */
    /*    async function fetchNoticias() {
      const noticiasfetch = await buscarDocOrCrearDoc(correoUsuario);
      setArrayNoticias(noticiasfetch);
    } */
  }, [navbarRef]);
  return (
    <DarkTheme>
      <NavbarAdmin nr={navbarRef} lr={logoRef} />
      <div className="main-content">
        <Container className="pt-100">
          <hr />
          <AgregarNoticia
            arrayNoticias={arrayNoticias}
            setArrayNoticias={setArrayNoticias}
            correoUsuario={correoUsuario}
          />
          {arrayNoticias ? (
            <VerNoticias
              arrayNoticias={arrayNoticias}
              setArrayNoticias={setArrayNoticias}
              correoUsuario={correoUsuario}
            />
          ) : null}
        </Container>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default HomeAdmin;
