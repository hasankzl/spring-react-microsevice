import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { connect } from "react-redux";
import { getDoctor, deleteAppointment } from "./action";
import AppointmentSection from "./AppointmentSection";
import { useParams } from "react-router-dom";
const useStyles = makeStyles(styles);

const DoctorProfile = ({
  getDoctor: _getDoctor,
  doctorWithAppointment,
  deleteAppointment: _deleteAppointment,
}) => {
  const classes = useStyles();
  let { doctorId } = useParams();
  useEffect(async () => {
    await _getDoctor(doctorId);
  }, [doctorId]);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const { doctor } = doctorWithAppointment;
  return (
    <div>
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
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
                    >{`${doctor.name} ${doctor.surname}`}</h3>
                    <h6>{doctor.email}</h6>
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

            <AppointmentSection
              appointmentList={doctorWithAppointment.appointmentList}
              deleteAppointment={_deleteAppointment}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ doctorProfileReducer }) => ({
  doctorWithAppointment: doctorProfileReducer.doctorWithAppointment,
});

const mapDispatchToProps = { getDoctor, deleteAppointment };

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile);
