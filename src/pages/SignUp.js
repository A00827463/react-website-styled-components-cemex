import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Button } from "../globalStyles";
import {
  InfoSec,
  ContentLogin,
  ContentLoginSubheading,
  ContentLoginSubText,
  Form,
  FormInput,
  CustomLink,
} from "../components/Form/Form.elements";
import { Alert } from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <InfoSec light s>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading dark>Sign Up</ContentLoginSubheading>
            <ContentLoginSubText dark>
              Ingresa tus datos de usuario
            </ContentLoginSubText>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form>
                <FormInput name="name" type="name" placeholder="Nombre" />
              </Form>
              <Form>
                <FormInput
                  name="last-name"
                  type="name"
                  placeholder="Apellido"
                />
              </Form>
              <Form>
                <FormInput
                  name="user-name"
                  type="name"
                  placeholder="Username"
                />
              </Form>
              <Form>
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </Form>
              <Form>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form>
              <Form>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Repetir Password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form>
              <Button disabled={loading} type="submit" fontBig>
                Registrarse
              </Button>
            </Form>
            <br />
            <CustomLink to="/login" blue>
              {" "}
              ¿Ya tienes cuenta?{" "}
            </CustomLink>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default SignUp;
