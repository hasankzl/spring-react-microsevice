import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import MaterialTable from "material-table";
import { setEditDepartment } from "./action";
const columns = [
  { title: "ID", field: "id" },
  { title: "Başlık", field: "name" },
];

const DepartmentTable = ({
  departmentList,
  setEditDepartment: _setEditDepartment,
  openModal,
}) => {
  return (
    <div style={{ maxWidth: "100%", margin: 20 }}>
      <MaterialTable
        columns={columns}
        data={departmentList}
        title="Hastane Bölümleri"
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: "add",
            tooltip: "Yeni Kayıt Ekle",
            isFreeAction: true,
            onClick: (event, rowData, row, rows) => {
              openModal();
            },
          },
          {
            icon: "edit",
            tooltip: "Kayıt güncelle",
            onClick: (event, rowData, row, rows) => {
              _setEditDepartment(rowData);
              openModal();
            },
          },
          {
            icon: "delete",
            tooltip: "Kayıt Sil",
            onClick: (event, rowData) => {
              // Do save operation
            },
          },
        ]}
      />
    </div>
  );
};

DepartmentTable.propTypes = {
  props: PropTypes,
};

const mapStateToProps = ({ departmentReducer }) => ({
  departmentList: departmentReducer.departmentList,
});

const mapDispatchToProps = { setEditDepartment };

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentTable);
