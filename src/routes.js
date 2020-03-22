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
import Search from "@material-ui/icons/Search";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";

import Request from "container/Request";

const dashboardRoutes = [
  // {
  //   path: "/list",
  //   name: "Unternehmen (Liste)",
  //   rtlName: "قائمة الجدول",
  //   icon: Search,
  //   component: TableList,
  //   layout: "/customer"
  // },
  {
    path: "/maps",
    name: "Karte",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
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
  // {
  //   path: "/business",
  //   name: "Unternehmen",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: BusinessCenter,
  //   component: UserProfile,
  //   layout: "/business"
  // },
];

export default dashboardRoutes;
