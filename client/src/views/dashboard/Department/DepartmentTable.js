import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import MaterialTable from "material-table";
import { setEditDepartment, deleteDepartment } from "./action";

import { useTranslation } from "react-i18next";

const DepartmentTable = ({
  departmentList,
  setEditDepartment: _setEditDepartment,
  openModal,
  deleteDepartment: _deleteDepartment,
}) => {
  const { t } = useTranslation();

  const columns = [
    { title: "ID", field: "id" },
    { title: t("dashboard.department.table.name"), field: "name" },
  ];

  return (
    <div style={{ maxWidth: "100%", margin: 20 }}>
      <MaterialTable
        columns={columns}
        data={departmentList}
        title={t("dashboard.department.table.title")}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: "add",
            tooltip: t("general.addNewRecord"),
            isFreeAction: true,
            onClick: (event, rowData, row, rows) => {
              _setEditDepartment({});
              openModal();
            },
          },
          {
            icon: "edit",
            tooltip: t("general.updateRecord"),
            onClick: (event, rowData, row, rows) => {
              _setEditDepartment(rowData);
              openModal();
            },
          },
          {
            icon: "delete",
            tooltip: t("general.deleteRecord"),
            onClick: (event, rowData) => {
              _deleteDepartment(rowData.id);
            },
          },
        ]}
      />
    </div>
  );
};

const mapStateToProps = ({ departmentReducer }) => ({
  departmentList: departmentReducer.departmentList,
});

const mapDispatchToProps = { setEditDepartment, deleteDepartment };

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentTable);
