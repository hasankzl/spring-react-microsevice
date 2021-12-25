import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CustomInput from "components/CustomInput/CustomInput";

import { saveDoctor } from "./action";
import { FormControl } from "@mui/material";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const emptyDoctor = {
  name: "",
  surname: "",
  department: {
    id: "",
  },
  specialty: "",
  email: "",
};
const DoctorFormModal = ({
  modalShow,
  setModalShow,
  editingDoctor,
  saveDoctor: _saveDoctor,
  departmentList,
}) => {
  const [doctor, setDoctor] = useState({ ...emptyDoctor });

  // if this is a edit then set the editting value to form
  useEffect(() => {
    if (editingDoctor.id != null) {
      setDoctor({ ...editingDoctor });
    } else {
      setDoctor({ ...emptyDoctor });
    }
  }, [editingDoctor]);

  const handleInput = (e) => {
    const newDoctor = { ...doctor };
    const inputName = e.target.name;
    if (inputName == "department") {
      newDoctor[inputName] = {
        id: e.target.value,
      };
    } else {
      newDoctor[inputName] = e.target.value;
    }
    setDoctor(newDoctor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sav = { ...doctor };
    sav.department.name = null;
    _saveDoctor(sav).then((status) => {
      if (status == 200) {
        setModalShow(false);
      }
    });
  };

  return (
    <Modal
      open={modalShow}
      onClose={() => setModalShow(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Typography>Bir isim giriniz</Typography>
          <CustomInput
            labelText="Adı"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "text",
              name: "name",
              value: doctor.name,
              onChange: handleInput,
            }}
          />
          <Typography>Soyad Giriniz</Typography>
          <CustomInput
            labelText="soyadı"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "text",
              name: "surname",
              value: doctor.surname,
              onChange: handleInput,
            }}
          />
          <Typography>Bölüm Seçiniz</Typography>
          <FormControl fullWidth style={{ margin: "10px 0px 10px 0px" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={doctor.department.id}
              label="bölüm"
              name="department"
              onChange={handleInput}
            >
              {departmentList.map((dep) => (
                <MenuItem value={dep.id}>{dep.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography>Uzmanlık Alanı Giriniz</Typography>
          <CustomInput
            labelText="uzmanlık"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "text",
              name: "specialty",
              value: doctor.specialty,
              onChange: handleInput,
            }}
          />

          <Typography>Email Adresi Giriniz</Typography>
          <CustomInput
            labelText="email adresi"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "text",
              name: "email",
              value: doctor.email,
              onChange: handleInput,
            }}
          />
          <Button
            simple
            color="primary"
            variant="outline"
            size="lg"
            type="submit"
          >
            Kaydet
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

DoctorFormModal.propTypes = {
  props: PropTypes,
};

const mapStateToProps = ({ doctorReducer }) => ({
  editingDoctor: doctorReducer.editingDoctor,
  departmentList: doctorReducer.departmentList,
});

const mapDispatchToProps = { saveDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(DoctorFormModal);
