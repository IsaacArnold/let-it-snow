import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import Typography from "../styles/Typography";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default Layout;
