import React, { Component } from "react";

import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

// core components
import Default from "layouts/Default.js";

import apiClient from "utils/apiClient";
import { API_URL } from "consts";

import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

import '@material-ui/core/styles'

apiClient.init(API_URL);

const hist = createBrowserHistory();

export const AuthContext = React.createContext({});

const theme = createMuiTheme({
  shape: {
    borderRadius: 6
  },
  palette: {
    primary: {
      main: '#7DABA2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#33507C',
      constrastText: '#fff'
    }
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  setLoggedIn = value => {
    this.setState({ loggedIn: value });
  };

  render() {
    const { loggedIn } = this.state;

    return (
      <AuthContext.Provider value={{ loggedIn, setLoggedIn: this.setLoggedIn }}>
        <MuiThemeProvider theme={theme}>
          <Router history={hist}>
            <Default />
          </Router>
        </MuiThemeProvider>
      </AuthContext.Provider>
    );
  }
}

export default App;
