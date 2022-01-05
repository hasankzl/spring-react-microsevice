import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import { makeStyles } from "@mui/styles";
import { getNextFiveDayWithoutWeekend } from "utils/constants";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(styles);
const nextFiveDayWithoutWeekend = getNextFiveDayWithoutWeekend();
const DoctorSchedule = ({ doctorAppointmentList }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{ marginBottom: 20 }}>
        Takviminiz
      </h2>
      <div style={{ display: "flex", gridGap: 20 }}>
        {nextFiveDayWithoutWeekend.map((date) => {
          const findDayAppointment = doctorAppointmentList.filter(
            (appointment) =>
              appointment.appointmentDay.substring(0, 10) == date.date
          );

          findDayAppointment.sort(
            (a, b) =>
              a.workHour +
              a.appointmentMinute -
              (b.workHour + b.appointmentMinute)
          );
          return (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 150 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {date.date} {date.weekday}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {findDayAppointment.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {`${row.workHour}: ${row.appointmentMinute} ${row.person.name} ${row.person.surname}`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        })}
      </div>
    </div>
  );
};

DoctorSchedule.propTypes = {
  props: PropTypes,
};

const mapStateToProps = ({ profileReducer }) => ({
  doctorAppointmentList: profileReducer.appointmentForDoctor,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
