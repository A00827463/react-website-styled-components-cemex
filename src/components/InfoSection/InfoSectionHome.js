import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec, Img } from "./InfoSection.elements";
// import x from "../../pages/Admin"
// import Game from "/";

const InfoSection = ({ img, alt }) => {
  return (
    <>
      <InfoSec>
        <Container>
          {/* <Img src={img} alt={alt} /> */}
          <iframe
            src="/game/index.html"
            // src ="../../pages/Admin"
            height="600px"
            width="1080px"
            frameBorder="0"
          ></iframe>
          {/* <Game/> */}
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
