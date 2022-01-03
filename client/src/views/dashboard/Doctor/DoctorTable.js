import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import MaterialTable from "material-table";
import { setEditDoctor, deleteDoctor } from "./action";
const columns = [
  { title: "ID", field: "id" },
  { title: "İsim", field: "name" },
  { title: "Soyad", field: "surname" },
  { title: "Bölüm", field: "department.name" },
  { title: "Uzmanlık", field: "specialty" },
  { title: "email", field: "email" },
];

const DoctorTable = ({
  doctorList,
  setEditDoctor: _setEditDoctor,
  openModal,
  openImageModal,
  deleteDoctor: _deleteDoctor,
}) => {
  return (
    <div style={{ maxWidth: "100%", margin: 20 }}>
      <MaterialTable
        columns={columns}
        data={doctorList}
        title="Doktorlar"
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: "image",
            tooltip: "Resim ekle/güncelle",
            onClick: (event, rowData) => {
              _setEditDoctor(rowData);
              openImageModal();
            },
          },
          {
            icon: "add",
            tooltip: "Yeni Kayıt Ekle",
            isFreeAction: true,
            onClick: (event, rowData) => {
              _setEditDoctor({});
              openModal();
            },
          },
          {
            icon: "edit",
            tooltip: "Kayıt güncelle",
            onClick: (event, rowData) => {
              _setEditDoctor(rowData);
              openModal();
            },
          },

          {
            icon: "delete",
            tooltip: "Kayıt Sil",
            onClick: (event, rowData) => {
              _deleteDoctor(rowData.id);
            },
          },
        ]}
      />
    </div>
  );
};

const mapStateToProps = ({ doctorReducer }) => ({
  doctorList: doctorReducer.doctorList,
});

const mapDispatchToProps = { setEditDoctor, deleteDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(DoctorTable);
