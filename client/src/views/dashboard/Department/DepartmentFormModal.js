import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CustomInput from "components/CustomInput/CustomInput";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const DepartmentFormModal = ({ modalShow, setModalShow }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [department, setDepartment] = useState({
    name: "",
    desc: "",
  });
  const onEditorChange = (e) => {
    setEditorState(e);
    const newDepartment = { ...department };
    newDepartment.desc = draftToHtml(convertToRaw(e.getCurrentContent()));
    setDepartment(newDepartment);
  };

  const handleInput = (e) => {
    const newDepartment = { ...department };
    const inputName = e.target.name;
    newDepartment[inputName] = e.target.value;
    setDepartment(newDepartment);
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
        <Typography>Başlık giriniz</Typography>
        <CustomInput
          labelText="Adı"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            type: "text",
            name: "name",
            value: department.name,
            onChange: handleInput,
          }}
        />
        <Typography>Açıklama Giriniz</Typography>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorChange}
        />
        <Button simple color="primary" variant="outline" size="lg">
          Kaydet
        </Button>
      </Box>
    </Modal>
  );
};

DepartmentFormModal.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentFormModal);
