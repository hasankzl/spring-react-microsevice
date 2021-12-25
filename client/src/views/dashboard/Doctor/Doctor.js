import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DoctorFormModal from "./DoctorFormModal";
import { Button } from "@material-ui/core";
import DoctorTable from "./DoctorTable";
import { findAllDepartment } from "../Department/action";
import { findAllDoctor } from "./action";
const Doctor = ({
  findAllDepartment: _findAllDepartment,
  findAllDoctor: _findAllDoctor,
}) => {
  useEffect(() => {
    _findAllDepartment();
    _findAllDoctor();
  }, []);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <DoctorTable openModal={() => setModalShow(true)} />
      <DoctorFormModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

Doctor.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { findAllDepartment, findAllDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
