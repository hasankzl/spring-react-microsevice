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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
      <h2 className={classes.title}>Günlük randevu ekranı Randevular</h2>
      <GridContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Adı</TableCell>
                <TableCell align="right">Soyadı</TableCell>
                <TableCell align="right">randevu saati</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointmentList.map((appointment, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {appointment.person.name}
                  </TableCell>
                  <TableCell align="right">
                    {appointment.person.surname}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {` ${appointment.workHour}:${appointment.appointmentMinute} `}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GridContainer>
    </div>
  );
}
