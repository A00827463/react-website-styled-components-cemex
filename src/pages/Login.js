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

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const refreshPage = () => {
    window.location.reload();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
      refreshPage();
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <InfoSec light l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading dark>Login</ContentLoginSubheading>
            <ContentLoginSubText dark>
              Enter your user credentials to enter.
            </ContentLoginSubText>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
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
              <Button fontBig disabled={loading} type="submit">
                Login
              </Button>
            </Form>
            <br />
            <CustomLink to="/password-olvidado" blue>
              Forgot your password?
            </CustomLink>
            <CustomLink to="/sign-up" blue>
              Already have an account? Sign Up
            </CustomLink>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default Login;
