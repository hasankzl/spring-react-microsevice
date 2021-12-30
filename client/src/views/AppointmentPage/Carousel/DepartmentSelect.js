import React from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { setSelectedDepartment, findDoctorByDepartment } from "../action";

const useStyles = makeStyles(styles);
const DepartmentSelect = ({
  departmentList,
  setSelectedDepartment: _setSelectedDepartment,
  selectedDepartment,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const data = JSON.parse(e.target.value);
    _setSelectedDepartment(data);
  };
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Bölüm Seçiniz
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
                value: JSON.stringify(selectedDepartment),
              }}
              onChange={handleChange}
            >
              <option>Lütfen bir seçim yapınız</option>
              {departmentList.map((department, index) => (
                <option key={index} value={JSON.stringify(department)}>
                  {department.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = ({ generalReducer, appointmentReducer }) => ({
  departmentList: generalReducer.departmentList,
  selectedDepartment: appointmentReducer.selectedDepartment,
});

const mapDispatchToProps = { setSelectedDepartment, findDoctorByDepartment };

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentSelect);
