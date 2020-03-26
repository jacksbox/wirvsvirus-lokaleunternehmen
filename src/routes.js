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
import Register from "container/Register";
import Maps from "container/Maps";
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
    layout: "/customer"
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
    path: "/register",
    name: "Registrieren",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BusinessCenter,
    component: Register,
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
    rtlName: "خرائط",
    icon: '',
    component: MetaTexte,
    layout: "/customer"
  },
  // {
  //   path: "/request",
  //   name: "Anfrage",
  //   rtlName: "خرائط",
  //   icon: '',
  //   component: Request,
  //   layout: "/customer"
  // },
];

export default dashboardRoutes;
