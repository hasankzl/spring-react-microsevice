import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DepartmentFormModal } from "./DepartmentFormModal";
import { Button } from "@material-ui/core";

export const Department = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setModalShow(true)}>Yeni Department</Button>
      <DepartmentFormModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

Department.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Department);
