import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";


import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = value => () => {
    setOpen(value);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Hidden smDown>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Karte</Button>
            <Button color="inherit">Registrieren</Button>
            <Button color="inherit">Über Bleib Lokal!</Button>
          </Hidden>
          <div style={{ flexGrow: 1 }} />
          <Hidden smDown>
            <Button size="small" color="inherit">
              Impressum
            </Button>
            <Button size="small" color="inherit">
              Datenschutz
            </Button>
            <Button size="small" color="inherit">
              AGBs
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Mobile Drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Karte" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Über Bleib Lokal!" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Registrieren" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Impressum" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Datenschutz" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="AGBs" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MenuBar
