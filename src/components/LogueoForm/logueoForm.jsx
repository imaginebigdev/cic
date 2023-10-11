import React from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

import blogApp from "../../fb";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(blogApp);

const LogueoForm = () => {
  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    console.log(correo, contra);

    signInWithEmailAndPassword(auth, correo, contra);
  }
  return (
    <Container className="pt-100">
      <h1 className="fw-800 color-font mb-50" style={{ textAlign: "center" }}>
        Inicio de Sesión
      </h1>
      <Stack gap={3}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresá tu contraseña" />
          </Form.Group>

          <Button variant="warning" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Stack>
    </Container>
  );
};

export default LogueoForm;
