import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserFormModal from "./UserFormModal";
import { Button } from "@material-ui/core";
import UserTable from "./UserTable";
import { findAllUser } from "./action";
const User = ({ findAllUser: _findAllUser }) => {
  useEffect(() => {
    _findAllUser();
  }, []);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <UserTable openModal={() => setModalShow(true)} />
      <UserFormModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { findAllUser };

export default connect(mapStateToProps, mapDispatchToProps)(User);
