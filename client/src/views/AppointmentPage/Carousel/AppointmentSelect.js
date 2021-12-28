import React, { useEffect } from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { findAppointmentByDoctor } from "../action";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EventNoteIcon from "@mui/icons-material/EventNote";
const useStyles = makeStyles(styles);

var dateObj = new Date();
const nextFiveDayWithoutWeekend = [];
for (let i = 0; nextFiveDayWithoutWeekend.length <= 4; i++) {
  var weekday = dateObj.toLocaleString("default", { weekday: "long" });

  if (weekday != "Saturday" || weekday != "Sunday") {
    nextFiveDayWithoutWeekend.push({
      date:
        dateObj.getFullYear() +
        "-" +
        dateObj.getMonth() +
        "-" +
        dateObj.getDay(),
      weekday,
    });
  }
  dateObj.setDate(dateObj.getDate() + 1);
}

console.log(nextFiveDayWithoutWeekend);
const AppointmentSelect = ({
  selectedDoctor,
  appointmentList,
  findAppointmentByDoctor: _findAppointmentByDoctor,
}) => {
  useEffect(() => {
    if (selectedDoctor.id != null) {
      _findAppointmentByDoctor(selectedDoctor.id);
    }
  }, [selectedDoctor]);

  const classes = useStyles();

  return (
    <div>
      <GridContainer justify="center">
        <GridItem>
          {`${selectedDoctor.specialty} ${selectedDoctor.name} ${selectedDoctor.surname} `}
        </GridItem>
      </GridContainer>
      {nextFiveDayWithoutWeekend.map((date) => (
        <GridContainer>
          <GridItem md={12}>
            <Card className={classes.root}>
              <CardHeader
                avatar={date.weekday}
                action={
                  <IconButton aria-label="settings">
                    <EventNoteIcon />
                  </IconButton>
                }
              />
            </Card>
          </GridItem>
        </GridContainer>
      ))}
    </div>
  );
};

const mapStateToProps = ({ appointmentReducer }) => ({
  selectedDoctor: appointmentReducer.selectedDoctor,
  appointmentList: appointmentReducer.appointmentList,
});

const mapDispatchToProps = { findAppointmentByDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentSelect);
