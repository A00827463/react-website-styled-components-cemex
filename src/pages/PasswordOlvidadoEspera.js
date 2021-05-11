import React from "react";
import { Link } from "react-router-dom";
import { Container, Button} from "../globalStyles";
import {
  InfoSec,
  ContentLogin,
  ContentLoginSubheading,
  ContentLoginSubText,
} from "../components/Form/Form.elements";

const PasswordOlvidadoEspera = () => {
  return (
    <>
      <InfoSec dark l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading light>En proceso</ContentLoginSubheading>
            <ContentLoginSubText light>Se ha enviando un mensaje a este correo, sigue las instrucciones para restablecer tu contraseña :)</ContentLoginSubText>
            <Link to="/login">
              <Button primary fontBig>Regresar</Button>
            </Link>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default PasswordOlvidadoEspera;
