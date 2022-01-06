import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { ButtonUnstyled } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function TeamSection({ doctorList }) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Doktorlarımız</h2>
      <div>
        <GridContainer>
          {doctorList.map((doctor, index) => (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src={
                      require("../../images/doctor-image-" + doctor.id + ".png")
                        .default
                    }
                    alt="..."
                    style={{ maxHeight: 160 }}
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {doctor.name} {doctor.surname}
                  <br />
                  <small className={classes.smallTitle}>
                    {doctor.specialty}
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    {doctor.department.name}
                  </p>
                  <Button component={Link} to={"/doctor-profile/" + doctor.id}>
                    Profile Git
                  </Button>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
