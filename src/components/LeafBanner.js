import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const LeafContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    width: 30%;
  }
`;

const LeafBanner = () => {
  return (
    <LeafContainer>
      <StaticImage src="../images/leaf.png" alt="3D image of a misletoe" />
    </LeafContainer>
  );
};

export default LeafBanner;
