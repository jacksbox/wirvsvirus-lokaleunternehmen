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
import Home from "@material-ui/icons/Home";
import ContactMail from "@material-ui/icons/ContactMail";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import HomeComponent from "functionalComponents/Home";
import Impressum from "functionalComponents/Impressum";

import Request from "container/Request";

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
  }, {
    path: "/register",
    name: "Registrieren",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BusinessCenter,
    component: UserProfile,
    layout: "/business"
  },  {
    path: "/impressum",
    name: "Impressum",
    rtlName: "خرائط",
    icon: ContactMail,
    component: Impressum,
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
