import React, { useState, useEffect } from "react";
import { Button, Container, Stack, Row, Col } from "react-bootstrap";
import DarkTheme from "../../layouts/Dark";
import blogApp from "../../fb";
import blog from "../../data/blog3.json";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const firestore = getFirestore(blogApp);

const VerNoticias = ({ arrayNoticias, correoUsuario, setArrayNoticias }) => {
  // Configuración de la paginación
  const noticiasPorPagina = 5;
  const [currentPage, setCurrentPage] = useState(1);
  console.log("array", arrayNoticias.flat());
  // Obtener el índice de la última y primera noticia de la página actual
  const indexOfLastNoticia = currentPage * noticiasPorPagina;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPorPagina;
  const noticiasPaginadas = arrayNoticias.slice(
    indexOfFirstNoticia,
    indexOfLastNoticia
  );

  // Función para eliminar una noticia

  async function eliminarNoticia(idNoticiaEliminar) {
    const confirmacion = await Swal.fire({
      title: "Confirmar eliminación",
      text: "¿Estás seguro de que deseas eliminar la noticia?",
      icon: "warning",
      background: "#23252E",
      showCancelButton: true,
      confirmButtonColor: "#ddab0b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      iconColor: "#ddab0b",
      color: "#fff",
    });

    if (confirmacion.isConfirmed) {
      const nvoArrayNoticias = arrayNoticias.filter(
        (objetoNoticia) => objetoNoticia.id !== idNoticiaEliminar
      );
      const arrayLocal = blog.filter(
        (noticias) => noticias.id !== idNoticiaEliminar
      );
      const newArray = nvoArrayNoticias.concat(arrayLocal);
      const docuRef = doc(firestore, `usuarios/${correoUsuario}`);

      await updateDoc(docuRef, { noti: [...newArray] });

      setArrayNoticias(nvoArrayNoticias);
    }
  }

  // Agregar clase al body para estilos específicos de la página
  useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, []);

  // Cálculo del total de páginas
  const totalPages = Math.ceil(arrayNoticias.length / noticiasPorPagina);

  // Cambiar a una página específica
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generar la paginación
  const renderPagination = () => {
    const pagination = [];

    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <Button
          key={i}
          variant={i === currentPage ? "warning" : "secondary"}
          onClick={() => goToPage(i)}
          className="btn-pagination"
        >
          {i}
        </Button>
      );
    }

    return pagination;
  };

  return (
    <DarkTheme>
      <div className="main-content pt-50">
        <h1 className="fw-800 color-font mb-50" style={{ textAlign: "center" }}>
          Ver Noticias
        </h1>
        <Container>
          <Stack>
            {noticiasPaginadas.map((objetoNoticia) => {
              return (
                <React.Fragment key={objetoNoticia.id}>
                  <Row>
                    <Col>
                      <img src={objetoNoticia.image} alt="foto" />
                    </Col>
                    <Col>{objetoNoticia.title}</Col>
                    <Col>{objetoNoticia.date}</Col>
                    <Col>{objetoNoticia.shortText}</Col>
                    <Col>
                      <Button
                        variant="warning"
                        onClick={() => eliminarNoticia(objetoNoticia.id)}
                      >
                        Eliminar Noticia
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                </React.Fragment>
              );
            })}
          </Stack>
        </Container>
        <div className="pagination pb-50">{renderPagination()}</div>
      </div>
    </DarkTheme>
  );
};

export default VerNoticias;
