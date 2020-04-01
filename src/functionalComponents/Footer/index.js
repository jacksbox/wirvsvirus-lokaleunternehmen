import React from "react";

import { NavLink as NavLinkBase } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const NavLink = ({ to, children }) => (
  <NavLinkBase to={to} style={{ color: "inherit", textDecoration: "none" }}>
    {children}
  </NavLinkBase>
);

const Footer = () => {
  return (
    <Box
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        zIndex: 1000
      }}
    >
      <Container maxWidth="lg">
        <Toolbar variant="dense" style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          <NavLink to="/impressum">
            <Button size="small" color="inherit">
              Impressum
            </Button>
          </NavLink>
          <NavLink to="/datenschutz">
            <Button size="small" color="inherit">
              Datenschutz
            </Button>
          </NavLink>
          <NavLink to="/agb">
            <Button size="small" color="inherit">
              AGBs
            </Button>
          </NavLink>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;
