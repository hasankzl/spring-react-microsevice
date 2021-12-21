import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DoctorFormModal } from "./DoctorFormModal";
import { Button } from "@material-ui/core";

export const Doctor = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setModalShow(true)}>Yeni Doktor</Button>
      <DoctorFormModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

Doctor.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
