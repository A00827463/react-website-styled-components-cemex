import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec, Img } from "./InfoSection.elements";

const InfoSection = ({ img, alt }) => {
  const id = sessionStorage.ID;
  return (
    <>
      <InfoSec>
        <Container>
          <iframe
            src={"/game/index.html?ID=" + id}
            height="650vh"
            width="100%"
            frameBorder="0"
          ></iframe>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
