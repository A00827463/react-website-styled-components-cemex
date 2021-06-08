import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec, Img } from "./InfoSection.elements";
// import x from "../../pages/Admin"
// import Game from "/";
const InfoSection = ({ img, alt }) => {
  const id = sessionStorage.ID;

  return (
    <>
      <InfoSec>
        <Container>
          {/* <Img src={img} alt={alt} /> */}
          <iframe
            src={"/game/index.html?ID=" + id}
            // src ="../../pages/Admin"
            height="1080px"
            width="1920px"
            frameBorder="0"
          ></iframe>
          {/* <Game/> */}
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
