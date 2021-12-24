import axios from "axios";
import { FIND_DEPARTMENT, EDIT_DEPARTMENT } from "utils/actionTypes";
import { DEPARTMENT_SAVE_URL, DEPARTMENT_FIND_ALL_URL } from "utils/constants";
import notification from "utils/notification";

export const setEditDepartment = (department) => async (dispatch) => {
  dispatch({
    type: EDIT_DEPARTMENT,
    payload: {
      data: department,
    },
  });
};

export const saveEditDepartment = (department) => async (dispatch) => {
  axios.post(DEPARTMENT_SAVE_URL, department).then((res) => {
    if (res.status == 200) {
      notification.success({
        title: "Başarılı",
        message: "Kayıt başarıyla güncellendi",
      });
    }
  });
};
export const saveDepartment = (department) => async (dispatch) => {
  const status = await axios
    .post(DEPARTMENT_SAVE_URL, department)
    .then((res) => {
      if (res.status == 200) {
        notification.success({
          title: "başarılı",
          message: "İşlem  başarılı",
        });
      } else {
        notification.warning({ title: "hata", message: "bir hata oluştu" });
      }

      return res.status;
    });

  return status;
};

export const findAllDepartment = () => async (dispatch) => {
  await axios.get(DEPARTMENT_FIND_ALL_URL).then((res) => {
    if (res.status == 200) {
      dispatch({
        type: FIND_DEPARTMENT,
        payload: {
          data: res.data,
        },
      });
    }
  });
};
