import React from "react";

import Box from "@material-ui/core/Box";
import { Container } from '@material-ui/core';

const Footer = () => {
  return (
    <Box
      style={{
        position: "absolute",
        padding: "10px",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        zIndex: 1000
      }}
    >
    <Container maxWidth="lg">
      Ladida
    </Container>
    </Box>
  );
};

export default Footer;
