import axios from "axios";
import {
  ADMIN_EDIT_USER,
  ADMIN_FIND_ALL_USER,
  FIND_DOCTOR,
} from "utils/actionTypes";
import { DOCTOR_FIND_ALL_URL } from "utils/constants";
import {
  DOCTOR_DELETE_URL,
  FIND_ALL_PERSON_URL,
  SET_AS_DOCTOR_URL,
} from "utils/constants";
import notification from "utils/notification";
import { t } from "i18next";
export const setEditUser = (user) => async (dispatch) => {
  dispatch({
    type: ADMIN_EDIT_USER,
    payload: {
      data: user,
    },
  });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(DOCTOR_DELETE_URL + id).then((res) => {
    if (res.status == 200) {
      notification.success({
        message: t("general.deleteSuccess"),
      });
      dispatch(findAllUser());
    }
  });
};

export const findAllDoctor = () => async (dispatch) => {
  await axios.get(DOCTOR_FIND_ALL_URL).then((res) => {
    if (res.status == 200) {
      dispatch({
        type: FIND_DOCTOR,
        payload: {
          data: res.data,
        },
      });
    }
  });
};

export const findAllUser = () => async (dispatch) => {
  await axios.get(FIND_ALL_PERSON_URL).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: ADMIN_FIND_ALL_USER,
        payload: {
          data: res.data,
        },
      });
    }
  });
};

export const setUserAsDoctor = (payload) => async (dispatch) => {
  await axios
    .post(SET_AS_DOCTOR_URL + "/" + payload.userId + "/" + payload.doctorId)
    .then((res) => {
      if (res.status === 200) {
        notification.success({ message: "kullanıcı doktor olarak atanmıştır" });
        dispatch(findAllUser());
      }
    });
};
