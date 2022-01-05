import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import { Input } from "@mui/material";
import { Typography } from "@material-ui/core";
import { addImageToDepartment } from "./action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const ImageUploadModal = ({ editingDepartment, modalShow, setModalShow }) => {
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    setImage(null);
    setImageSrc(null);
  }, [modalShow]);

  const uploadImage = (e) => {
    const file = e.target.files[0];

    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImageSrc([reader.result]);
    };
    setImage(file);
  };

  const save = () => {
    addImageToDepartment(image, editingDepartment.id);
  };
  return (
    <Modal
      open={modalShow}
      onClose={() => setModalShow(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box
        sx={{
          ...style,
          width: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography>Lütfen bir resim seçiniz</Typography>
        <img src={imageSrc} width={170} height={170} />
        <Button fullWidth component="label">
          <Input type="file" hidden onChange={uploadImage} />
        </Button>

        <Button fullWidth variant="contained" onClick={save}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const mapStateToProps = ({ departmentReducer }) => ({
  editingDepartment: departmentReducer.editingDepartment,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadModal);
