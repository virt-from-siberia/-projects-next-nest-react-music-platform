import { Container } from "@mui/material";
import React from "react";
import NavBar from "../compoentns/NavBar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
