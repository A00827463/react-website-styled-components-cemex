import React from "react";
// import { Link } from "react-router-dom";
import { Container, Button } from "../globalStyles";
import {
  InfoSec,
  ContentLogin,
  ContentLoginSubheading,
  ContentLoginSubText,
  Form,
  FormInput,
} from "../components/Form/Form.elements";

const Admin = () => {
  return (
    <>
      <InfoSec dark l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading light>Admin</ContentLoginSubheading>
            <ContentLoginSubText light>Ingresa tu clave de administrador</ContentLoginSubText>
            <Form>
              <FormInput
                name="password"
                type="password"
                placeholder="Clave Administrador"
              />
            </Form>
            <br />
            <Button fontBig primary>Ingresar</Button>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default Admin;
