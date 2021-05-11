import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../globalStyles";
import {
  InfoSec,
  ContentLogin,
  ContentLoginSubheading,
  ContentLoginSubText,
  Form,
  FormInput,
  CustomLink
} from "../components/Form/Form.elements";

const Login = () => {
  return (
    <>
      <InfoSec light l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading dark>Login</ContentLoginSubheading>
            <ContentLoginSubText dark>Ingresa tus datos de usuario</ContentLoginSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Email" />
            </Form>
            <Form>
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form>
            <CustomLink to="/password-olvidado" blue>¿Olvidaste tu constraseña?</CustomLink>
            <br/>
            <CustomLink to="/sign-up" blue>¿Ya tienes cuenta?</CustomLink>
            <br/>
            <Link to="/" >
              <Button fontBig>Ingresar</Button>
            </Link>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default Login;
