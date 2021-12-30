import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DoctorFormModal from "./DoctorFormModal";
import { Button } from "@material-ui/core";
import DoctorTable from "./DoctorTable";
import { findAllDepartment } from "../Department/action";
import { findAllDoctor, findAllUser } from "./action";
const Doctor = ({
  findAllDepartment: _findAllDepartment,
  findAllDoctor: _findAllDoctor,
  findAllUser: _findAllUser,
}) => {
  useEffect(() => {
    _findAllDepartment();
    _findAllDoctor();
    _findAllUser();
  }, []);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <DoctorTable openModal={() => setModalShow(true)} />
      <DoctorFormModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { findAllDepartment, findAllDoctor, findAllUser };

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
