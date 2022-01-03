import axios from "axios";
import {
  EDIT_DOCTOR,
  GET_ALL_USER_DOCTOR,
  FIND_DOCTOR,
} from "utils/actionTypes";
import { DOCTOR_FIND_ALL_URL } from "utils/constants";
import {
  DOCTOR_DELETE_URL,
  FIND_ALL_PERSON_URL,
  DOCTOR_SAVE_URL,
} from "utils/constants";
import notification from "utils/notification";
import { t } from "i18next";
import { DOCTOR_IMAGE_SAVE_URL } from "utils/constants";
export const setEditDoctor = (doctor) => async (dispatch) => {
  dispatch({
    type: EDIT_DOCTOR,
    payload: {
      data: doctor,
    },
  });
};

export const deleteDoctor = (id) => async (dispatch) => {
  await axios.delete(DOCTOR_DELETE_URL + id).then((res) => {
    if (res.status == 200) {
      notification.success({
        message: t("general.deleteSuccess"),
      });
      dispatch(findAllDoctor());
    }
  });
};

export const saveDoctor = (doctor) => async (dispatch) => {
  const status = await axios.post(DOCTOR_SAVE_URL, doctor).then((res) => {
    if (res.status == 200) {
      notification.success({
        message: t("general.saveSuccess"),
      });
      dispatch(findAllDoctor());
    } else {
      notification.warning({ message: t("general.saveFailed") });
    }

    return res.status;
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
        type: GET_ALL_USER_DOCTOR,
        payload: {
          data: res.data,
        },
      });
    }
  });
};

export const addImageToDoctor = async (file, id) => {
  const formData = new FormData();
  formData.append("file", file);
  await axios
    .post(DOCTOR_IMAGE_SAVE_URL + id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status == 200) {
        notification.success({ message: "resim başarıyla eklenmiştir" });
      }
    });
};
