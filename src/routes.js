/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Home from "@material-ui/icons/Home";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import LoginRegister from "container/LoginRegister";
import Maps from "container/Maps";
import Profil from "container/Profil";
import Logout from "container/Logout";
import HomeComponent from "functionalComponents/Home";
import MetaTexte from "functionalComponents/MetaTexte";
import About from "functionalComponents/About";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "قائمة الجدول",
    icon: Home,
    component: HomeComponent,
    layout: "/default"
  },
  {
    path: "/maps",
    name: "Karte",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/customer"
  },  {
    path: "/about",
    name: "Über Bleib Lokal!",
    rtlName: "قائمة الجدول",
    icon: Info,
    component: About,
    layout: "/customer"
  }, {
    loginState: 'notLoggedIn',
    path: "/register",
    name: "Login/Registrieren",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BusinessCenter,
    component: LoginRegister,
    layout: "/business"
  }, {
    loginState: 'loggedIn',
    path: "/profil",
    name: "Mein Unternehmen",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BusinessCenter,
    component: Profil,
    layout: "/business"
  }, , {
    loginState: 'loggedIn',
    path: "/logout",
    name: "Logout",
    rtlName: "ملف تعريفي للمستخدم",
    icon: '',
    component: Logout,
    layout: "/business"
  },  {
    path: "/impressum",
    name: "Impressum",
    rtlName: "خرائط",
    icon: '',
    component: MetaTexte,
    layout: "/customer"
  },  {
    path: "/datenschutz",
    name: "Datenschutz",
    rtlName: "خرائط",
    icon: '',
    component: MetaTexte,
    layout: "/customer"
  },  {
    path: "/agb",
    name: "AGB",
    component: MetaTexte,
    layout: "/customer"
  },
];

export const getRoutes = ({ loggedIn = false } = { loggedIn: false }) => {
  if (loggedIn) {
    return dashboardRoutes.filter(({ loginState }) => loginState !== 'notLoggedIn')
  }
  return dashboardRoutes.filter(({ loginState }) => loginState !== 'loggedIn')
}

export default dashboardRoutes;
