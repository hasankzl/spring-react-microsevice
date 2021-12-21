import React from "react";
import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import Dashboard from "./views/dashboard/Dashboard";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GeneralHeader from "views/Components/Header/GeneralHeader";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import { NotificationContainer } from "react-notifications";
import { ACCESS_TOKEN } from "utils/constants.js";
import { ROLE } from "utils/constants.js";
import { ADMIN } from "utils/constants.js";

var hist = createBrowserHistory();

const App = ({ isLogin, role }) => {
  return (
    <Router history={hist}>
      <GeneralHeader />
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/" element={<Components />} />
        <Route
          path="/dashboard/*"
          element={(() => {
            return isLogin && role == ADMIN ? (
              <Dashboard />
            ) : (
              <Navigate to={"/"} />
            );
          })()}
        />
      </Routes>
      <NotificationContainer />
    </Router>
  );
};
const mapStateToProps = ({ loginReducer }) => ({
  isLogin: loginReducer.isLogin,
  role: loginReducer.role,
});
export default connect(mapStateToProps, {})(App);
