import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  Img
} from "./InfoSection.elements";

const InfoSection = ({
  img,
  alt,

}) => {
  return (
    <>
      <InfoSec>
        <Container>
              <Img src={img} alt={alt} />
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
