import axios from "axios";
import { FIND_DEPARTMENT, EDIT_DEPARTMENT } from "utils/actionTypes";
import {
  DEPARTMENT_SAVE_URL,
  DEPARTMENT_FIND_ALL_URL,
  DEPARTMENT_DELETE_URL,
} from "utils/constants";
import notification from "utils/notification";
import { t } from "i18next";
export const setEditDepartment = (department) => async (dispatch) => {
  dispatch({
    type: EDIT_DEPARTMENT,
    payload: {
      data: department,
    },
  });
};

export const deleteDepartment = (id) => async (dispatch) => {
  await axios.delete(DEPARTMENT_DELETE_URL + id).then((res) => {
    if (res.status == 200) {
      notification.success({
        message: t("general.deleteSuccess"),
      });
      dispatch(findAllDepartment());
    }
  });
};

export const saveDepartment = (department) => async (dispatch) => {
  const status = await axios
    .post(DEPARTMENT_SAVE_URL, department)
    .then((res) => {
      if (res.status == 200) {
        notification.success({
          message: t("general.saveSuccess"),
        });
      } else {
        notification.warning({ message: t("general.saveFailed") });
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
