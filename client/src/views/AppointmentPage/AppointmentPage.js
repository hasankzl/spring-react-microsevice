import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import { connect } from "react-redux";
import { clearReducer, nextPage, prevPage, setPage } from "./action.js";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import DepartmentSelect from "./Carousel/DepartmentSelect.js";
import DoctorSelect from "./Carousel/DoctorSelect.js";
import AppointmentSelect from "./Carousel/AppointmentSelect.js";
import Footer from "components/Footer/Footer.js";
const useStyles = makeStyles(styles);

const AppointmentPage = ({
  carouselPage,
  clearReducer: _clearReducer,
  nextPage: _nextPage,
  prevPage: _prevPage,
  setPage: _setPage,
}) => {
  useEffect(() => {
    _clearReducer();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Parallax
        filter
        image={require("assets/img/landing-bg.jpg").default}
        style={{ overflow: "unset" }}
      >
        <div className={classes.container}>
          <div
            style={{ marginTop: 100, marginBottom: 20 }}
            className={classNames(classes.main, classes.mainRaised)}
            id="paper"
          >
            <ProductSection />

            <GridItem xs={12} sm={12} md={12}>
              <Carousel
                index={carouselPage}
                swipe={false}
                indicators={false}
                cycleNavigation={false}
                autoPlay={false}
                onChange={(row) => {
                  _setPage(row);
                }}
                className={classes.carousel}
              >
                <DepartmentSelect />

                <DoctorSelect />
                <AppointmentSelect />
              </Carousel>
            </GridItem>
          </div>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ generalReducer, appointmentReducer }) => ({
  departmentList: generalReducer.departmetList,
  carouselPage: appointmentReducer.carouselPage,
});

const mapDispatchToProps = { clearReducer, nextPage, prevPage, setPage };
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
