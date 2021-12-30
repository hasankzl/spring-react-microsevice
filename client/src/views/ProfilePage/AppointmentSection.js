import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { Button } from "@mui/material";

const useStyles = makeStyles(styles);

export default function TeamSection({ appointmentList, deleteAppointment }) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Randevularınız</h2>
      <div>
        <GridContainer>
          {appointmentList.map((appointment) => (
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {`${appointment.doctor.name} ${appointment.doctor.surname}`}
                  <br />
                  <small className={classes.smallTitle}>
                    {appointment.doctor.department.name}
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    {`randevu saatiniz : ${appointment.workHour}:${
                      appointment.appointmentMinute
                    } , ${appointment.appointmentDay.substring(0, 10)}`}
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}></CardFooter>
              </Card>
              <Button
                onClick={() => {
                  deleteAppointment(appointment.id);
                }}
                variant="primary"
              >
                İptal
              </Button>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
