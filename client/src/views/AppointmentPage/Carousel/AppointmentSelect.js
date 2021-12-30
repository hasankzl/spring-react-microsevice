import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import { Button, FormControl, InputLabel, NativeSelect } from "@mui/material";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { findAppointmentByDoctor, saveAppointment } from "../action";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(styles);

var dateObj = new Date();
const nextFiveDayWithoutWeekend = [];
for (let i = 0; nextFiveDayWithoutWeekend.length <= 4; i++) {
  var weekday = dateObj.toLocaleString("default", { weekday: "long" });

  if (weekday != "Saturday" || weekday != "Sunday") {
    nextFiveDayWithoutWeekend.push({
      date: dateObj.toISOString().split("T")[0],
      weekday,
    });
  }
  dateObj.setDate(dateObj.getDate() + 1);
}

const appoinmentTimes = [
  { name: "ZERO", value: "00" },
  { name: "TEN", value: "10" },
  { name: "TWENTY", value: "20" },
  { name: "THIRTY", value: "30" },
  { name: "FOURTY", value: "40" },
  { name: "FIVETY", value: "50" },
];
const appoinmentHours = [
  { name: "NINE", value: "09" },
  { name: "TEN", value: "10" },
  { name: "ELEVEN", value: "11" },
  { name: "TWELVE", value: "12" },
  { name: "FOURTEEN", value: "13" },
  { name: "FIFTEEN", value: "14" },
  { name: "SIXTEEN", value: "15" },
  { name: "SEVENTEEN", value: "16" },
  { name: "EIGHTEEN", value: "17" },
];

const emptySelectedDateHour = {
  date: "",
  hour: {
    name: "",
    value: "",
  },
};
const emptySelectedMinute = {
  name: "",
  value: "",
};
console.log(nextFiveDayWithoutWeekend);
const AppointmentSelect = ({
  selectedDoctor,
  selectedDepartment,
  appointmentList,
  findAppointmentByDoctor: _findAppointmentByDoctor,
  saveAppointment: _saveAppointment,
}) => {
  useEffect(() => {
    if (selectedDoctor.id != null) {
      _findAppointmentByDoctor(selectedDoctor.id);
      setSelectedMinute(emptySelectedMinute);
      setSelectedDateHour(emptySelectedDateHour);
    }
  }, [selectedDoctor]);

  const [selectedDateHour, setSelectedDateHour] = useState(
    emptySelectedDateHour
  );

  const [selectedMinute, setSelectedMinute] = useState(emptySelectedMinute);

  const setDateHour = (d) => {
    setSelectedDateHour(d);
    setSelectedMinute(emptySelectedMinute);
  };
  const classes = useStyles();

  const save = async () => {
    const data = {
      doctorId: selectedDoctor.id,
      workHour: selectedDateHour.hour.name,
      appointmentDay: selectedDateHour.date.date,
      appointmentMinute: selectedMinute.name,
    };
    await _saveAppointment(data).then((d) => {
      _findAppointmentByDoctor(selectedDoctor.id);
    });
  };
  return (
    <div>
      <GridContainer justify="center" style={{ margin: 20 }}>
        <GridItem>
          <Card className={classes.root} style={{ display: "flex" }}>
            <CardHeader
              avatar={
                <Button>{`${selectedDoctor.specialty} ${selectedDoctor.name} ${selectedDoctor.surname} `}</Button>
              }
            />
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Button>{selectedDepartment.name}</Button>
            </div>
          </Card>
        </GridItem>
      </GridContainer>
      {nextFiveDayWithoutWeekend.map((date, index) => (
        <GridContainer spacing={2} key={index}>
          <GridItem md={12}>
            <Card className={classes.root} style={{ display: "flex" }}>
              <CardHeader avatar={date.weekday} />
              <div style={{ display: "flex", marginLeft: "auto" }}>
                {appoinmentHours.map((hour) => {
                  const isSelected =
                    selectedDateHour.date == date &&
                    selectedDateHour.hour.name == hour.name;
                  return (
                    <Button
                      variant={isSelected ? "contained" : "text"}
                      color={isSelected ? "success" : "secondary"}
                      key={hour.value}
                      onClick={() =>
                        setDateHour(!isSelected ? { date, hour } : {})
                      }
                    >
                      {hour.value}:00
                    </Button>
                  );
                })}
              </div>
            </Card>
          </GridItem>
          {selectedDateHour.date == date ? (
            <GridItem md={12}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {appoinmentTimes.map((minute) => {
                  const isSelectedBefore = appointmentList.some(
                    (app) =>
                      app.appointmentMinute == minute.name &&
                      app.workHour == selectedDateHour.hour.name
                  );
                  return (
                    <Button
                      key={minute.name}
                      disabled={isSelectedBefore}
                      variant={
                        selectedMinute.name == minute.name
                          ? "contained"
                          : "text"
                      }
                      color={
                        selectedMinute.name == minute.name
                          ? "success"
                          : "secondary"
                      }
                      onClick={() => setSelectedMinute(minute)}
                    >
                      {selectedDateHour.hour.value}:{minute.value}
                    </Button>
                  );
                })}
              </div>
            </GridItem>
          ) : null}
        </GridContainer>
      ))}

      <GridContainer justify="center" style={{ padding: 30, marginTop: 20 }}>
        <GridItem md={12}>
          <Button fullWidth onClick={() => save()}>
            Randevu oluştur
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = ({ appointmentReducer }) => ({
  selectedDoctor: appointmentReducer.selectedDoctor,
  appointmentList: appointmentReducer.appointmentList,
  selectedDepartment: appointmentReducer.selectedDepartment,
});

const mapDispatchToProps = { findAppointmentByDoctor, saveAppointment };

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentSelect);
