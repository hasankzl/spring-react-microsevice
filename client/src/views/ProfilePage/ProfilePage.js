import React, { useEffect, useState } from "react";
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
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";
import EventNoteIcon from "@mui/icons-material/EventNote";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { connect } from "react-redux";
import {
  getUser,
  deleteAppointment,
  getWeeklyAppoinmentForDoctor,
} from "./action";
import AppointmentSection from "./AppointmentSection";
import { DOCTOR_ROLE } from "utils/constants";
const useStyles = makeStyles(styles);

const ProfilePage = ({
  getUser: _getUser,
  userWithAppointment,
  deleteAppointment: _deleteAppointment,
  role,
}) => {
  const classes = useStyles();
  const [DoctorAppointmentList, setDoctorAppointmentList] = useState([]);
  useEffect(async () => {
    await _getUser();
  }, []);

  useEffect(async () => {
    if (role == DOCTOR_ROLE && DoctorAppointmentList.length < 1) {
      const data = getWeeklyAppoinmentForDoctor(
        userWithAppointment.person.doctorId
      );
      setDoctorAppointmentList(data);
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

const mapDispatchToProps = { getUser, deleteAppointment };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
