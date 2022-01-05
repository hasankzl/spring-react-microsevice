import axios from "axios";
import {
  FIND_USER_WITH_APPOINTMENT,
  APPOINTMENT_FOR_DOCTOR,
} from "utils/actionTypes";
import { GET_WEEKLY_APPOINTMENT_FOR_DOCTOR_URL } from "utils/constants";
import { DELETE_APPOINTMENT_URL } from "utils/constants";
import { FIND_USER_WITH_APPOINTMENT_URL } from "utils/constants";

export const getUser = () => async (dispatch) => {
  await axios.get(FIND_USER_WITH_APPOINTMENT_URL).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: FIND_USER_WITH_APPOINTMENT,
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
      dispatch(getUser());
    }
  });
};

export const getWeeklyAppoinmentForDoctor = (id) => async (dispatch) => {
  await axios.get(GET_WEEKLY_APPOINTMENT_FOR_DOCTOR_URL + id).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: APPOINTMENT_FOR_DOCTOR,
        payload: {
          data: res.data,
        },
      });
    }
  });
};
