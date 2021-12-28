import React, { useEffect } from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { setSelectedDoctor, findDoctorByDepartment } from "../action";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EventNoteIcon from "@mui/icons-material/EventNote";
const useStyles = makeStyles(styles);
const DoctorSelect = ({
  setSelectedDoctor: _setSelectedDoctor,
  selectedDepartment,
  doctorList,
  findDoctorByDepartment: _findDoctorByDepartment,
}) => {
  useEffect(() => {
    if (selectedDepartment.id != null) {
      _findDoctorByDepartment(selectedDepartment.id);
    }
  }, [selectedDepartment]);
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        {doctorList.map((doctor) => (
          <GridItem md={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    :)
                  </Avatar>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    onClick={() => _setSelectedDoctor(doctor)}
                  >
                    <EventNoteIcon />
                  </IconButton>
                }
                title={`${doctor.name} ${doctor.surname}`}
                subheader={doctor.specialty}
              />
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

const mapStateToProps = ({ generalReducer, appointmentReducer }) => ({
  departmentList: generalReducer.departmentList,
  selectedDepartment: appointmentReducer.selectedDepartment,
  doctorList: appointmentReducer.doctorList,
});

const mapDispatchToProps = { setSelectedDoctor, findDoctorByDepartment };

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSelect);
