import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import blogApp from "../../fb";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Formik, Form, Field } from "formik";
import blogss from "../../data/blog3.json";

const AgregarNoticia = ({ correoUsuario, setArrayNoticias, arrayNoticias }) => {
  const imagenRef = useRef(null);
  const firestore = getFirestore(blogApp);
  const storage = getStorage(blogApp);

  // State para los campos del formulario
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [shortText, setShortText] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");

  let urlDescarga;

  async function publicarNoticia(e) {
    e.preventDefault();

    // Restablecer el valor del campo de imagen a una cadena vacía
    if (imagenRef.current) {
      imagenRef.current.value = "";
    }

    // Obtener los valores de los campos del formulario
    const title = e.target.formTitulo.value;
    const shortText = e.target.formshortText.value;
    const date = e.target.formDate.value;
    const url = e.target.formurl.value;
    const tags = e.target.formtags.value;

    // Verificar si hay campos vacíos
    if (
      !title.trim() ||
      !shortText.trim() ||
      !date.trim() ||
      !tags.trim() ||
      !image.trim()
    ) {
      Swal.fire({
        title: "Existen Campos Vacios",
        icon: "error",
        iconColor: "#d4034f",
        confirmButtonColor: "#d4034f",
        background: "#23252E",
        color: "#fff",
        confirmButtonText: "volver a intentar",
      });
      return;
    }

    // Crear una nueva noticia con los valores ingresados
    const nuevaNoticia = {
      id: +new Date(),
      title: title,
      shortText: shortText,
      image: image,
      date: {
        day: date[0] === "0" ? date.slice(0, 2) : date.slice(0),
        month: date[3] === "0" ? date.slice(3, 5) : date.slice(3),
        año: date.slice(6, 8),
      },
      url: url,
      tags: tags,
    };

    // Actualizar la base de datos con la nueva noticia
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    const blogsss = arrayNoticias.concat(blogss);
    await updateDoc(docuRef, { noti: [...blogsss, nuevaNoticia] });

    // Restablecer los campos del formulario y mostrar una notificación de éxito
    const currentImageInput = document.getElementById("formImagen");
    currentImageInput.value = "";

    setArrayNoticias([...blogsss, nuevaNoticia]);
    setTitle("");
    setShortText("");
    setImage("");
    setDate("");
    setUrl("");
    setTags("");

    Swal.fire({
      title: "Noticia agregada correctamente",
      icon: "success",
      iconColor: "#ddab0b",
      confirmButtonColor: "#ddab0b",
      background: "#23252E",
      color: "#fff",
      confirmButtonText: "OK",
    });
  }

  async function fileHandler(e) {
    e.preventDefault();

    // Subir el archivo al almacenamiento
    const archivoLocal = e.target.files[0];
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    await uploadBytes(archivoRef, archivoLocal);

    // Obtener la URL de descarga del archivo
    urlDescarga = await getDownloadURL(archivoRef);

    // Actualizar el estado con la URL de descarga de la imagen
    setImage(urlDescarga);
  }

  return (
    <section className="contact section-padding pt-60">
      <div className="container">
        <div className="">
          <div className="form md-mb50">
            <h1
              className="fw-800 color-font mb-50"
              style={{ textAlign: "center" }}
            >
              Publicar Noticia
            </h1>
            <Formik className="pt-100 pb-100">
              <Form onSubmit={publicarNoticia} id="contact-form">
                <div className="controls">
                  <div className="form-group">
                    Título (<span style={{ color: "#ddab0b" }}>*</span>)
                    <Field
                      type="text"
                      placeholder="Colocar el título de la noticia"
                      id="formTitulo"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    Imagen (<span style={{ color: "#ddab0b" }}>*</span>)
                    <Field
                      type="file"
                      id="formImagen"
                      onChange={fileHandler}
                      ref={imagenRef}
                    />
                  </div>

                  <div className="form-group">
                    Fecha (<span style={{ color: "#ddab0b" }}>*</span>)
                    <Field
                      type="text"
                      placeholder="Coloca una fecha. (Ejemplo: 05/06/23)"
                      id="formDate"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    url
                    <Field
                      type="text"
                      placeholder="Colocar la url donde se encuentra la noticia completa"
                      id="formurl"
                      className="pt-20 pb-20"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="formtags">
                      Categoría (<span style={{ color: "#ddab0b" }}>*</span>)
                    </label>
                    <div className="select-wrapper">
                      <Field
                        as="select"
                        id="formtags"
                        className="custom-select"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        autoComplete="off"
                      >
                        <option value="" disabled>
                          Elige una categoría
                        </option>
                        <option value="atletismo">Atletismo</option>
                        <option value="baloncesto">Baloncesto</option>
                        <option value="beisbol">Béisbol</option>
                        <option value="boxeo">Boxeo</option>
                        <option value="ciclismo">Ciclismo</option>
                        <option value="formula1">Fórmula 1</option>
                        <option value="futbol">Fútbol</option>
                        <option value="futbolamericano">
                          Fútbol Americano
                        </option>
                        <option value="golf">Golf</option>
                        <option value="natacion">Natación</option>
                        <option value="tenis">Tenis</option>
                        <option value="voley">Vóley</option>
                        <option value="otrosdeportes">Otros deportes</option>
                        <option value="salud">Salud</option>
                      </Field>
                    </div>
                  </div>

                  {error && <p className="text-danger">{error}</p>}
                </div>

                <div className="form-group">
                  Contenido (<span style={{ color: "#ddab0b" }}>*</span>)
                  <Field
                    as="textarea"
                    placeholder="Escribe la noticia"
                    id="formshortText"
                    rows="4"
                    value={shortText}
                    onChange={(e) => setShortText(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div
                  className="form-group pt-20 pb-20"
                  style={{ textAlign: "center" }}
                >
                  <Button
                    variant="warning"
                    type="submit"
                    style={{ width: "80%", fontSize: "20px" }}
                  >
                    Publicar Noticia
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgregarNoticia;
