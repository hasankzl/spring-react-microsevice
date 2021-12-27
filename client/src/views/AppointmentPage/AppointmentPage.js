import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import { connect } from "react-redux";
import { clearReducer } from "./action.js";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import DepartmentSelect from "./Carousel/DepartmentSelect.js";
import DoctorSelect from "./Carousel/DoctorSelect.js";
import AppointmentSelect from "./Carousel/AppointmentSelect.js";
const useStyles = makeStyles(styles);

const AppointmentPage = ({ carouselPage, clearReducer: _clearReducer }) => {
  useEffect(() => {
    _clearReducer();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <GridItem>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <ProductSection />
              <Carousel
                index={carouselPage}
                swipe={false}
                indicators={false}
                cycleNavigation={false}
                autoPlay={false}
                NextIcon={<></>}
                prevIcon={<></>}
              >
                <Paper>
                  <DepartmentSelect />
                </Paper>

                <Paper>
                  <DoctorSelect />
                </Paper>
                <Paper>
                  <AppointmentSelect />
                </Paper>
              </Carousel>
            </div>
          </div>
        </GridItem>
      </Parallax>
    </div>
  );
};

const mapStateToProps = ({ generalReducer, appointmentReducer }) => ({
  departmentList: generalReducer.departmetList,
  carouselPage: appointmentReducer.carouselPage,
});
const mapDispatchToProps = { clearReducer };
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
