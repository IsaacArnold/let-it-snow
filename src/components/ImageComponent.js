import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
  .gatsby-image-wrapper {
    width: 40%;
  }
`;

const ImageComponent = () => {
  return (
    <ImageContainer>
      <StaticImage
        src="../images/Mobile-img.png"
        alt="A 3D illustration of a Christmas tree and present on a white blurred background"
      />
    </ImageContainer>
  );
};

export default ImageComponent;
