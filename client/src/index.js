import "./index.css";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import "react-notifications/lib/notifications.css";

import React from "react";
import ReactDOM from "react-dom";

// pages for this product
import { Provider } from "react-redux";
import store from "utils/store";

// axios config
import "./utils/axiosConfig";
import App from "App";
import i18n from "i18n";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
