import React, { Component, useState, useEffect } from "react";

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


export const AuthContext = React.createContext({ loggedIn: false });

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    console.log('mount App')
  }

  setLoggedIn = value => {
    this.setState({ loggedIn: value })
    hist.push('/business/profil')
  }

  render() {
    const { loggedIn } = this.state

    return (
      <AuthContext.Provider value={{ loggedIn, setLoggedIn: this.setLoggedIn }}>
      <Router history={hist}>
        <Switch>
          <Route path="/customer" component={() => <Customer loggedIn={loggedIn} />} />
          <Route path="/business" render={() => <Business />} />
          <Redirect from="/" to="/customer/home" />
        </Switch>
      </Router>
    </AuthContext.Provider>
    )
  }
}

export default App;
