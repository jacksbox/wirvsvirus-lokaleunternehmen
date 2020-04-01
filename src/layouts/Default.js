import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Box from "@material-ui/core/Box";

import MenuBar from "layouts/MenuBar.js";

import routes from "routes";
import bgImage from "assets/img/sidebar-wirvsvirus.jpeg";

const Default = () => {
  return (
    <>
      <Box component="div" style={{ position: "relative", zIndex: 1000 }}>
        <MenuBar />
        <Box
          component="div"
          style={{ padding: "40px", maxWidth: "1024px", margin: "0 auto" }}
        >
          <Switch>
            {routes.map(({ path, component, fullWidth }) => (
              <Route path={path} component={component} key={path} />
            ))}
          </Switch>
        </Box>
      </Box>
      <img
        src={bgImage}
        style={{
          minHeight: "100vH",
          minWidth: "100vH",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 999
        }}
      />
    </>
  );
};

export default Default;
