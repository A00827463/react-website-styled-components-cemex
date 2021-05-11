// import React, { useState }from "react";
import { Link } from "react-router-dom";
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

const SignUp = () => {
  return (
    <>
      <InfoSec light s>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading dark>Sign Up</ContentLoginSubheading>
            <ContentLoginSubText dark>
              Ingresa tus datos de usuario
            </ContentLoginSubText>
            <Form>
              <FormInput name="name" type="name" placeholder="Nombre" />
            </Form>
            <Form>
              <FormInput name="last-name" type="name" placeholder="Apellido" />
            </Form>
            <Form>
              <FormInput name="user-name" type="name" placeholder="Username" />
            </Form>
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
            <Form>
              <FormInput
                name="password"
                type="password"
                placeholder="Repetir Password"
              />
            </Form>

            <CustomLink to="/login" blue> ¿Ya tienes cuenta? </CustomLink>
            <br />
            <Link to="/">
              <Button fontBig>Registrarse</Button>
            </Link>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default SignUp;
