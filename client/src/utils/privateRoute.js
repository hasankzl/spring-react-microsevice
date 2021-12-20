import React from "react";
import { Navigate, Route } from "react-router-dom";
import { ACCESS_TOKEN, ADMIN, ROLE } from "./constants";

const PrivateRoute = ({ element: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const hasToken = !!localStorage[ACCESS_TOKEN];
      const role = localStorage.getItem(ROLE);
      debugger;
      return hasToken && role == ADMIN ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/", state: { from: props.location } }} />
      );
    }}
  />
);

PrivateRoute.defaultProps = {
  component: null,
  location: "/",
};

export default PrivateRoute;
