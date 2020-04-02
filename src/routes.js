import LoginRegister from "container/LoginRegister";
import Maps from "container/Maps";
import SignUp from "container/SignUp";
import Profil from "container/Profil";
import Logout from "container/Logout";
import Home from "components/Home";
import MetaTexte from "components/MetaTexte";
import About from "components/About";

import { featureFlags } from 'consts'

const routes = [
  {
    active: true,
    path: "/home",
    title: "Home",
    Component: Home
  },
  {
    active: true,
    path: "/maps",
    title: "Karte",
    Component: Maps,
    fullWidth: true
  },
  {
    active: true,
    path: "/about",
    title: "Über Bleib Lokal!",
    Component: About
  },
  {
    active: featureFlags.authentication,
    loginState: "notLoggedIn",
    path: "/register",
    title: "Login/Registrieren",
    Component: LoginRegister
  },
  {
    active: featureFlags.authentication,
    loginState: "loggedIn",
    path: "/profil",
    title: "Mein Unternehmen",
    Component: Profil
  },
  {
    active: featureFlags.authentication,
    loginState: "loggedIn",
    path: "/logout",
    title: "Logout",
    Component: Logout
  },
  {
    active: featureFlags.signup,
    path: "/signup",
    title: "SignUp",
    Component: SignUp
  },
  {
    active: true,
    path: "/impressum",
    title: "Impressum",
    Component: MetaTexte
  },
  {
    active: true,
    path: "/datenschutz",
    title: "Datenschutz",
    Component: MetaTexte
  },
  {
    active: true,
    path: "/agb",
    title: "AGB",
    Component: MetaTexte
  }
];

export const getRoutes = () => {}

export default routes;
