import React, { useState, useEffect } from "react";
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
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { saveDepartment, findAllDepartment } from "./action";

import { useTranslation } from "react-i18next";

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
const DepartmentFormModal = ({
  editingDepartment,
  modalShow,
  setModalShow,
  saveDepartment: _saveDepartment,
  findAllDepartment: _findAllDepartment,
}) => {
  const { t } = useTranslation();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [department, setDepartment] = useState({
    name: "",
    description: "",
  });

  // if this is an update take editing department from reducer
  useEffect(() => {
    if (editingDepartment.id != null) {
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(editingDepartment.description)
          )
        )
      );
      setDepartment({ ...editingDepartment });
    } else {
      setDepartment({
        name: "",
        description: "",
      });
      setEditorState(EditorState.createEmpty());
    }
  }, [editingDepartment]);

  const onEditorChange = (e) => {
    setEditorState(e);
    const newDepartment = { ...department };
    newDepartment.description = draftToHtml(
      convertToRaw(e.getCurrentContent())
    );
    setDepartment(newDepartment);
  };

  const handleInput = (e) => {
    const newDepartment = { ...department };
    const inputName = e.target.name;
    newDepartment[inputName] = e.target.value;
    setDepartment(newDepartment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    _saveDepartment(department).then((status) => {
      if (status == 200) {
        setModalShow(false);
        _findAllDepartment();
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
        <Typography>{t("dashboard.department.modal.department")}</Typography>
        <form onSubmit={handleSubmit}>
          <CustomInput
            labelText={t("dashboard.department.modal.name")}
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
          <Typography>
            {t("dashboard.department.modal.enterDescription")}
          </Typography>
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorChange}
          />
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

DepartmentFormModal.propTypes = {
  props: PropTypes,
};

const mapStateToProps = ({ departmentReducer }) => ({
  editingDepartment: departmentReducer.editingDepartment,
});

const mapDispatchToProps = { saveDepartment, findAllDepartment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentFormModal);
