import React from "react";
import ReactDOM from "react-dom";

import * as Sentry from '@sentry/browser';

import App from './App.js'

Sentry.init({ dsn: 'https://bf1f239fbacb4e38a352eb2bc1f49828@sentry.io/5187973' });

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
