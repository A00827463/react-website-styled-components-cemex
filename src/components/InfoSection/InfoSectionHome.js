import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec, Img } from "./InfoSection.elements";
// import game from "../../../game/index.html";

const InfoSection = ({ img, alt }) => {
  return (
    <>
      <InfoSec>
        <Container>
          {/* <Img src={img} alt={alt} /> */}
          <iframe
            src="../../../game/index.html"
            height="600px"
            width="960px"
            frameBorder="0"
          ></iframe>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
