import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
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
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <i className="fas fa-map-marker-alt text-7xl">
              <h2 style={{ color: "#003491ff" }}>UBICACIÓN</h2>
            </i>
            <div className="col-lg-6 valign">
              <div className="img md-mb50">
                <img src={"/img/map.png"} alt="" />
              </div>
            </div>
            <div className="form md-mb50">
              <h2
                className="fw-700 color-font mb-50"
                style={{ color: "#003491ff" }}
              >
                CONTACTANOS DIRECTAMENTE
              </h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
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
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
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
