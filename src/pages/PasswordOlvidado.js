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
  // CustomLink
} from "../components/Form/Form.elements";

const PasswordOlvidadoSection = () => {
  return (
    <>
      <InfoSec dark l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading light>Recuperar Contraseña</ContentLoginSubheading>
            <ContentLoginSubText light>Ingresa tu correo para instrucciones en como restablecer tu contraseña</ContentLoginSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Email" />
            </Form>
            <br/>
            <Link to="password-olvidado-espera">
              <Button fontBig primary>Recuperar</Button>
            </Link>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default PasswordOlvidadoSection;
