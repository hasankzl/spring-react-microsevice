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
    <div className={classes.section}>
      <GridContainer justify="center">
        {selectedDoctor.name}
        {appointmentList.map((appointment) => (
          <GridItem md={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    :)
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <EventNoteIcon />
                  </IconButton>
                }
                title={`${appointment.name} ${appointment.surname}`}
                subheader={appointment.specialty}
              />
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

const mapStateToProps = ({ appointmentReducer }) => ({
  selectedDoctor: appointmentReducer.selectedDoctor,
  appointmentList: appointmentReducer.appointmentList,
});

const mapDispatchToProps = { findAppointmentByDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentSelect);
