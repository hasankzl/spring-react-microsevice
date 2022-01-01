import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, NativeSelect } from "@mui/material";

import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { InputLabel } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection({ message }) {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ padding: 10 }}>
      <h2 className={classes.title}>{message}</h2>
    </div>
  );
}
