import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import MaterialTable from "material-table";
import { setEditUser, deleteUser } from "./action";
const columns = [
  { title: "ID", field: "person.id" },
  { title: "İsim", field: "person.name" },
  { title: "Soyad", field: "person.surname" },
  { title: "email", field: "person.email" },
  { title: "role", field: "person.role" },
  {
    title: "doctor",
    render: (rowData) => {
      if (rowData.doctor) {
        return (
          <span>
            {rowData.doctor.name} {rowData.doctor.surname}{" "}
            {rowData.doctor.department.name}
          </span>
        );
      } else {
        return <span></span>;
      }
    },
  },
];

const UserTable = ({
  userList,
  setEditUser: _setEditUser,
  openModal,
  deleteUser: _deleteUser,
}) => {
  return (
    <div style={{ maxWidth: "100%", margin: 20 }}>
      <MaterialTable
        columns={columns}
        data={userList}
        title="Kullanıcılar"
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Kayıt güncelle",
            onClick: (event, rowData) => {
              _setEditUser({
                userId: rowData.person.id,
                doctorId: rowData.doctor ? rowData.doctor.id : null,
              });
              openModal();
            },
          },
          {
            icon: "delete",
            tooltip: "Kayıt Sil",
            onClick: (event, rowData) => {
              _deleteUser(rowData.person.id);
            },
          },
        ]}
      />
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  userList: userReducer.userList,
});

const mapDispatchToProps = { setEditUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
