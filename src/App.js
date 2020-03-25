import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Business from "layouts/Business.js";
import Customer from "layouts/Customer.js";

import apiClient from "utils/apiClient";
import { API_URL } from "consts";

import "assets/css/material-dashboard-react.css?v=1.8.0";

apiClient.init(API_URL);

const hist = createBrowserHistory();
const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/customer" component={Customer} />
      <Route path="/business" component={Business} />
      <Redirect from="/" to="/customer/home" />
    </Switch>
  </Router>
);

export default App;
