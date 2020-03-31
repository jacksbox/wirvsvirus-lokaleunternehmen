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
    component: Home
  },
  {
    path: "/maps",
    title: "Karte",
    component: Maps,
    fullWidth: true
  },
  {
    path: "/about",
    title: "Über Bleib Lokal!",
    component: About
  },
  {
    loginState: "notLoggedIn",
    path: "/register",
    title: "Login/Registrieren",
    component: LoginRegister
  },
  {
    loginState: "loggedIn",
    path: "/profil",
    title: "Mein Unternehmen",
    component: Profil
  },
  ,
  {
    loginState: "loggedIn",
    path: "/logout",
    title: "Logout",
    component: Logout
  },
  {
    path: "/impressum",
    title: "Impressum",
    component: MetaTexte
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    component: MetaTexte
  },
  {
    path: "/agb",
    title: "AGB",
    component: MetaTexte
  }
];

export const getRoutes = () => {}

export default routes;
