import React, { useState } from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  const [hovered, setHovered] = useState(false);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    telefono: "",
  });

  const validador = (inputs) => {
    let validations = {};

    if (!inputs.name) {
      errors.name = "Requerido";
    } else if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s'.-]{1,64}$/.test(inputs.name)) {
      validations.name = "Ingrese un nombre válido";
    }

    if (!inputs.email) {
      validations.email = "Debe ingresar su email";
    } else if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        inputs.email
      )
    ) {
      validations.email = "Ingrese un email válido";
    }
    if (!inputs.telefono) {
      errors.telefono = "Requerido";
    } else if (!/^[0-9]*$/.test(inputs.telefono)) {
      validations.telefono = "ingrese un número válido";
    }

    return validations;
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: hovered ? "#003491ff" : "initial", // Cambia el color de fondo cuando el mouse está sobre el botón
    borderColor: hovered ? "#1a3f95ff" : "initial",
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    const errores = validador({ ...input, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_he4oys8",
        "template_vc19e8y",
        e.target,
        "RneNOjsa8HDHRzQXd"
      )
      .then((res) => {
        console.log(res),
          (error) => {
            console.log(error);
          };
      });

    messageRef.current.innerText =
      "Su mensaje fue enviado correctamente. Nos estaremos contactando con usted a la brevedad.";

    setTimeout(() => {
      messageRef.current.innerText = "";
    }, 3000);

    setInput({
      name: "",
      email: "",
      message: "",
      telefono: "",
    });
  };
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
              marginBottom: "50px",
            }}
          >
            <i
              className="fas fa-map-marker-alt text-20xl"
              style={{ color: "#003491ff", fontSize: "30px", margin: "3px" }}
            ></i>
            <h2
              style={{
                color: "#003491ff",
              }}
            >
              UBICACIÓN
            </h2>
          </div>
          <br></br>
          <div className="map" id="ieatmaps" style={{ marginBottom: "60px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.58080258656!2d-67.99782612401116!3d-38.93355789886299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a3146fff5d88b%3A0x811a850ec0c879d1!2sCAMARA%20DE%20INDUSTRIA%20Y%20COMERCIO%20DE%20CIPOLLETTI!5e0!3m2!1ses!2sar!4v1694007489899!5m2!1ses!2sar"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br></br>
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h2
                className="fw-700 color-font mb-50"
                style={{ color: "#003491ff", margin: "20px" }}
              >
                CONTACTANOS DIRECTAMENTE
              </h2>
              <Formik>
                <Form onSubmit={sendEmail} autoComplete="off" id="contact-form">
                  <div className="messages" ref={messageRef}></div>
                  <div className="controls">
                    <div className="form-group">
                      <Field
                        id="form_name"
                        type="text"
                        name="name"
                        value={input.name}
                        placeholder="Nombre Completo"
                        style={{ color: "#000" }}
                        required="required"
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                    {errors.name ? <div>{errors.name}</div> : null}
                    <div className="form-group">
                      <Field
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleOnChange(e)}
                        style={{ color: "#000" }}
                        value={input.email}
                      />
                      {errors.email ? <div>{errors.email}</div> : null}
                    </div>
                    <div className="form-group">
                      <Field
                        id="form_telefono"
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        required="required"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        style={{ color: "#000" }}
                        onChange={(e) => handleOnChange(e)}
                        value={input.telefono}
                      />
                    </div>
                    {errors.telefono ? <div>{errors.telefono}</div> : null}
                  </div>
                  <div className="form-group">
                    <Field
                      as="textarea"
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required="required"
                      style={{ color: "#000" }}
                      onChange={(e) => handleOnChange(e)}
                      value={input.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="butn bord"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>Enviar mensaje</span>
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1"
            style={{
              textAlign: "center",
            }}
          >
            <div className="cont-info pt-40">
              <h2
                className="fw-700 color-font mb-50"
                style={{ color: "#003491ff", margin: "20px" }}
              >
                O Escribinos a...
              </h2>
              <br></br>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visitanos!.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a
                  href="https://api.whatsapp.com/send/?phone=542994774244&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/camaraicc/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/cicc.cipolletti.9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                >
                  <i
                    className="fab fa-facebook-f"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
