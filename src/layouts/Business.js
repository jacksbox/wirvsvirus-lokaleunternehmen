import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Hidden from "@material-ui/core/Hidden";
import Sidebar from "components/Sidebar/Sidebar.js";

import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Banner from "functionalComponents/Banner.js";

import routes, { getRoutes } from "routes.js";

import { AuthContext } from 'App.js'

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-wirvsvirus.jpeg";
import logo from "assets/img/logo-web.jpg";

let ps;

const SwitchRoutes = ({ routes, setLoggedIn }) => (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/business") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={() => <prop.component />}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Business({ ...rest }) {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/customer/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  const sidebarRoutes = getRoutes({ loggedIn })

  return (
    <>
      <div className={classes.wrapper}>
        <Hidden mdUp>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              zIndex: 9999,
              padding: "3px",
              background: "#fff"
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </div>
        </Hidden>
        <Sidebar
          routes={sidebarRoutes}
          logoText={"Bleib Lokal!"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        <img
          src={bgImage}
          style={{
            minHeight: "100vH",
            minWidth: "100vH",
            opacity: 0.25,
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          <Banner />
          <div className={classes.content} style={{ minHeight: "100vH" }}>
            <div className={classes.container}><SwitchRoutes routes={routes} setLoggedIn={setLoggedIn}/></div>
          </div>
        </div>
      </div>
    </>
  );
}
