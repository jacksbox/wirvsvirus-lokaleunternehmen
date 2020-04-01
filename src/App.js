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
      alt: '#7DABA2',
      main: '#498F89',
      contrastText: '#fff'
    },
    secondary: {
      main: '#33507C',
      constrastText: '#fff'
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    },
    h4: {
      fontWeight: 300
    },
    h5: {
      fontWeight: 300
    },
    h6: {
      fontWeight: 300
    },
  }
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
