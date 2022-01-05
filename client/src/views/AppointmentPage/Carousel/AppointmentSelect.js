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
import {
  appoinmentTimes,
  appoinmentHours,
  getNextFiveDayWithoutWeekend,
} from "utils/constants";
const useStyles = makeStyles(styles);

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
      {getNextFiveDayWithoutWeekend().map((date, index) => (
        <GridContainer spacing={2} key={index}>
          <GridItem md={12}>
            <Card className={classes.root} style={{ display: "flex" }}>
              <CardHeader avatar={`${date.weekday} ${date.date}`} />
              <div style={{ display: "flex", marginLeft: "auto" }}>
                {appoinmentHours.map((hour) => {
                  const isSelected =
                    selectedDateHour.date.date == date.date &&
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
          {selectedDateHour.date.date == date.date ? (
            <GridItem md={12}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {appoinmentTimes.map((minute) => {
                  debugger;
                  const isSelectedBefore = appointmentList.some(
                    (app) =>
                      app.appointmentMinute == minute.name &&
                      app.workHour == selectedDateHour.hour.name &&
                      app.appointmentDay.substring(0, 10) ==
                        selectedDateHour.date.date
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
