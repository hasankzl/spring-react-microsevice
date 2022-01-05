import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { connect } from "react-redux";
import {
  getUser,
  deleteAppointment,
  getWeeklyAppoinmentForDoctor,
} from "./action";
import AppointmentSection from "./AppointmentSection";
import { DOCTOR_ROLE } from "utils/constants";
import DoctorSchedule from "./DoctorSchedule";
const useStyles = makeStyles(styles);

const ProfilePage = ({
  getUser: _getUser,
  userWithAppointment,
  deleteAppointment: _deleteAppointment,
  role,
  getWeeklyAppoinmentForDoctor: _getWeeklyAppoinmentForDoctor,
}) => {
  const classes = useStyles();
  useEffect(async () => {
    await _getUser();
  }, []);

  useEffect(async () => {
    if (role == DOCTOR_ROLE && userWithAppointment.person.doctorId) {
      _getWeeklyAppoinmentForDoctor(userWithAppointment.person.doctorId);
    }
  }, [userWithAppointment]);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const { person } = userWithAppointment;
  return (
    <div>
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {role}
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3
                      className={classes.title}
                    >{`${person.name} ${person.surname}`}</h3>
                    <h6>{person.email}</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p></p>
            </div>
            {role == DOCTOR_ROLE && <DoctorSchedule />}
            <AppointmentSection
              appointmentList={userWithAppointment.appointmentList}
              deleteAppointment={_deleteAppointment}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ profileReducer, loginReducer }) => ({
  userWithAppointment: profileReducer.userWithAppointment,
  role: loginReducer.role,
});

const mapDispatchToProps = {
  getUser,
  deleteAppointment,
  getWeeklyAppoinmentForDoctor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
