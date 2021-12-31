import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CustomInput from "components/CustomInput/CustomInput";

import { FormControl } from "@mui/material";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { findAllDoctor } from "../Doctor/action";
import { setUserAsDoctor } from "./action";
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
const emptyPayload = {
  doctorId: null,
  userId: null,
};
const UserFormModal = ({
  modalShow,
  setModalShow,
  editingUser,
  doctorList,
  findAllDoctor: _findAllDoctor,
  setUserAsDoctor: _setUserAsDoctor,
}) => {
  const [user, setUser] = useState({ ...emptyPayload });

  const { t } = useTranslation();

  // if this is a edit then set the editting value to form
  useEffect(() => {
    if (editingUser.userId != null) {
      setUser({ ...editingUser });
    } else {
      setUser({ ...emptyPayload });
    }
  }, [editingUser]);

  useEffect(async () => {
    await _findAllDoctor();
  }, []);

  const handleInput = (e) => {
    const newUser = { ...user };
    const inputName = e.target.name;
    newUser[inputName] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await _setUserAsDoctor(user);
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
          <Typography>{t("dashboard.user.modal.enterName")}</Typography>

          <FormControl fullWidth style={{ margin: "10px 0px 10px 0px" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user.doctorId}
              label={t("dashboard.user.table.doctor")}
              name="doctorId"
              onChange={handleInput}
            >
              {doctorList.map((doctor) => (
                <MenuItem key={doctor.id} value={doctor.id}>
                  {doctor.name} {doctor.surname} - {doctor.department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            simple
            color="primary"
            variant="outline"
            size="lg"
            type="submit"
          >
            {t("general.save")}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const mapStateToProps = ({ userReducer, doctorReducer }) => ({
  editingUser: userReducer.editingUser,
  doctorList: doctorReducer.doctorList,
});

const mapDispatchToProps = { findAllDoctor, setUserAsDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(UserFormModal);
