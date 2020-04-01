import LoginRegister from "container/LoginRegister";
import Maps from "container/Maps";
import Profil from "container/Profil";
import Logout from "container/Logout";
import Home from "functionalComponents/Home";
import MetaTexte from "functionalComponents/MetaTexte";
import About from "functionalComponents/About";

const routes = [
  {
    path: "/home",
    title: "Home",
    Component: Home
  },
  {
    path: "/maps",
    title: "Karte",
    Component: Maps,
    fullWidth: true
  },
  {
    path: "/about",
    title: "Über Bleib Lokal!",
    Component: About
  },
  {
    loginState: "notLoggedIn",
    path: "/register",
    title: "Login/Registrieren",
    Component: LoginRegister
  },
  {
    loginState: "loggedIn",
    path: "/profil",
    title: "Mein Unternehmen",
    Component: Profil
  },
  ,
  {
    loginState: "loggedIn",
    path: "/logout",
    title: "Logout",
    Component: Logout
  },
  {
    path: "/impressum",
    title: "Impressum",
    Component: MetaTexte
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    Component: MetaTexte
  },
  {
    path: "/agb",
    title: "AGB",
    Component: MetaTexte
  }
];

export const getRoutes = () => {}

export default routes;
