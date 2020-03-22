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
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import apiClient from 'utils/apiClient'
import { API_URL } from 'consts'

// core components
import Business from "layouts/Business.js";
import Customer from "layouts/Customer.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

apiClient.init(API_URL)

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/customer" component={Customer} />
      <Route path="/business" component={Business} />
      <Redirect from="/" to="/customer/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
