/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, useNavigate } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { connect } from "react-redux";
import { logoutAction } from "views/LoginPage/action";
import { ADMIN } from "utils/constants";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
import { LANG_TR, LANG_EN } from "utils/constants";
const useStyles = makeStyles(styles);
const HeaderLinks = ({ isLogin, user, logoutAction: _logoutAction, role }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  let navigate = useNavigate();
  const logout = () => {
    _logoutAction();
    navigate("/");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <List className={classes.list} style={{ display: "flex" }}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          {t("header.homepage")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          {t("header.doctors")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={t("header.departments")}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Genel Cerrahi
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          {t("header.appointment")}
        </Link>
      </ListItem>
      {isLogin == true ? (
        <React.Fragment>
          <ListItem className={classes.listItem}>
            <Link to="/" className={classes.navLink}>
              {user.email}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div
              style={{ cursor: "pointer" }}
              className={classes.navLink}
              onClick={logout}
            >
              {t("header.logout")}
            </div>
          </ListItem>
          {role == ADMIN && (
            <ListItem className={classes.listItem}>
              <Link to="/dashboard" className={classes.navLink}>
                dashboard
              </Link>
            </ListItem>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ListItem className={classes.listItem}>
            <Link to="/register-page" className={classes.navLink}>
              {t("header.register")}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/login-page" className={classes.navLink}>
              {t("header.login")}
            </Link>
          </ListItem>
        </React.Fragment>
      )}
      <React.Fragment>
        <ListItem className={classes.listItem}>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => changeLanguage(LANG_TR)}
            className={classes.navLink}
          >
            tr
          </a>
        </ListItem>
        <ListItem className={classes.listItem}>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => changeLanguage(LANG_EN)}
            className={classes.navLink}
          >
            en
          </a>
        </ListItem>
      </React.Fragment>
    </List>
  );
};
const mapStateToProps = ({ loginReducer }) => ({
  isLogin: loginReducer.isLogin,
  user: loginReducer.user,
  role: loginReducer.role,
});

const mapDispatchToProps = {
  logoutAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
