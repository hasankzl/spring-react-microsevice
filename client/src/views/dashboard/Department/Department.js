import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DepartmentFormModal from "./DepartmentFormModal";
import { Button } from "@material-ui/core";
import DepartmentTable from "./DepartmentTable";
import { findAllDepartment } from "./action";

export const Department = ({ findAllDepartment: _findAllDepartment }) => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    _findAllDepartment();
  }, []);
  return (
    <div>
      <DepartmentTable openModal={() => setModalShow(true)} />
      <DepartmentFormModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

Department.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { findAllDepartment };

export default connect(mapStateToProps, mapDispatchToProps)(Department);
