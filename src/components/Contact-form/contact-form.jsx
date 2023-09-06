import React, { useState } from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  const [hovered, setHovered] = useState(false);

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
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section
      className="contact section-padding"
      style={{ textAlign: "center" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <i
                className="fas fa-map-marker-alt text-20xl"
                style={{ color: "#003491ff", fontSize: "30px", margin: "3px" }}
              ></i>
              <h2 style={{ color: "#003491ff" }}>UBICACIÓN</h2>
            </div>
            <br></br>
            <div className="map" id="ieatmaps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.58080258656!2d-67.99782612401116!3d-38.93355789886299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a3146fff5d88b%3A0x811a850ec0c879d1!2sCAMARA%20DE%20INDUSTRIA%20Y%20COMERCIO%20DE%20CIPOLLETTI!5e0!3m2!1ses!2sar!4v1694007489899!5m2!1ses!2sar"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <br></br>
            <div className="form md-mb50">
              <h2
                className="fw-700 color-font mb-50"
                style={{ color: "#003491ff", margin: "20px" }}
              >
                CONTACTANOS DIRECTAMENTE
              </h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                  telefono: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.name) {
                    errors.name = "Requerido";
                  }

                  if (!values.telefono) {
                    errors.telefono = "Requerido";
                  } else if (!/^[0-9]*$/.test(values.telefono)) {
                    errors.telefono = "ingrese un numero valido";
                  }

                  if (!values.email) {
                    errors.email = "Requerido";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "ingrese un mail valido";
                  }

                  return errors;
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  values.telefono = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Nombre"
                          required="required"
                          style={{ color: "#000" }}
                        />
                      </div>
                      {errors.name && touched.name && <div>{errors.name}</div>}
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          style={{ color: "#000" }}
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="telefono"
                            placeholder="Teléfono"
                            required="required"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            style={{ color: "#000" }}
                          />
                        </div>
                        {errors.telefono && touched.telefono && (
                          <div>{errors.telefono}</div>
                        )}
                      </div>
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
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
