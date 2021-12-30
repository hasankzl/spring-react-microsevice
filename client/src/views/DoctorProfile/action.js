import axios from "axios";
import { FIND_DOCTOR_WITH_APPOINTMENT } from "utils/actionTypes";
import { DELETE_APPOINTMENT_URL } from "utils/constants";
import { FIND_DOCTOR_WITH_APPOINTMENT_URL } from "utils/constants";

export const getDoctor = (id) => async (dispatch) => {
  await axios.get(FIND_DOCTOR_WITH_APPOINTMENT_URL + id).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: FIND_DOCTOR_WITH_APPOINTMENT,
        payload: {
          data: res.data,
        },
      });
    }
  });
};

export const deleteAppointment = (id) => async (dispatch) => {
  await axios.delete(DELETE_APPOINTMENT_URL + id).then((res) => {
    if (res.status === 200) {
      dispatch(getDoctor());
    }
  });
};
