import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "../Components/TeamSection.js";
import { connect } from "react-redux";
import { findAllDoctor } from "./action.js";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import DepartmentSelect from "./Carousel/DepartmentSelect.js";
import DoctorSelect from "./Carousel/DoctorSelect.js";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const AppointmentPage = ({ departmentList, carouselPage }) => {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(async () => {
    const list = await findAllDoctor();
    setDoctorList(list);
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
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
