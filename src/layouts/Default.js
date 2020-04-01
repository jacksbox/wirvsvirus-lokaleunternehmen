import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import MenuBar from "functionalComponents/MenuBar";
import Footer from "functionalComponents/Footer";

import routes from "routes";
import bgImage from "assets/img/sidebar-wirvsvirus.jpeg";

import { makeStyles } from "@material-ui/core/styles";

const footerHeigth = '48px'

const styles = theme => ({
  AppContainer: {
    position: "relative",
    minHeight: "100vH",
    "&:after": {
      content: '""',
      background: `url(${bgImage}) no-repeat center center fixed`,
      backgroundSize: "cover",
      opacity: 0.5,
      background: `url(${bgImage}) no-repeat center center fixed`,
      backgroundSize: "cover",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      zIndex: "-1"
    }
  },
  MainContainer: {
    position: 'relative',
    paddingBottom: footerHeigth
  },
  MapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: footerHeigth
  },
  ContentContainer: {
    padding: '40px'
  }
});
const useStyles = makeStyles(styles);

const Default = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.AppContainer}>
        <MenuBar />
        <Box className={classes.MainContainer}>
          <Switch>
            {routes.map(({ path, Component, fullWidth }) => {
              if (fullWidth) {
                return (
                  <Route path={path} key={path}>
                    <Box className={classes.MapContainer}>
                      <Component />
                    </Box>
                  </Route>
                );
              }

              return (
                <Route path={path} key={path}>
                  <Container  className={classes.ContentContainer} maxWidth="lg">
                    <Component />
                  </Container>
                </Route>
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Default;
