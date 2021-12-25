import axios from "axios";
import { FIND_DOCTOR } from "utils/actionTypes";
import { EDIT_DOCTOR } from "utils/actionTypes";
import { DOCTOR_FIND_ALL_URL } from "utils/constants";
import { DOCTOR_SAVE_URL } from "utils/constants";
import { DOCTOR_DELETE_URL } from "utils/constants";
import notification from "utils/notification";

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
        message: "Kayıt silme başarılı",
      });
      dispatch(findAllDoctor());
    }
  });
};

export const saveDoctor = (doctor) => async (dispatch) => {
  const status = await axios.post(DOCTOR_SAVE_URL, doctor).then((res) => {
    if (res.status == 200) {
      notification.success({
        title: "başarılı",
        message: "İşlem  başarılı",
      });
      dispatch(findAllDoctor());
    } else {
      notification.warning({ title: "hata", message: "bir hata oluştu" });
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
