import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DoctorFormModal from "./DoctorFormModal";
import { Button } from "@material-ui/core";
import DoctorTable from "./DoctorTable";
import { findAllDepartment } from "../Department/action";
import { findAllDoctor, findAllUser } from "./action";
import ImageUploadModal from "./ImageUploadModal";
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
  const [imageModalShow, setImageModalShow] = useState(false);
  return (
    <div>
      <DoctorTable
        openModal={() => setModalShow(true)}
        openImageModal={() => setImageModalShow(true)}
      />
      <DoctorFormModal modalShow={modalShow} setModalShow={setModalShow} />
      <ImageUploadModal
        modalShow={imageModalShow}
        setModalShow={setImageModalShow}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { findAllDepartment, findAllDoctor, findAllUser };

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
