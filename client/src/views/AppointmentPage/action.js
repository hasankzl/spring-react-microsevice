import axios from "axios";

import {
  APPOINTMENT_SELECT_DEPARTMENT,
  APPOINTMENT_SET_DOCTORLIST,
  PREV_APPOINTMENT_CAROUSEL,
  NEXT_APPOINTMENT_CAROUSEL,
  APPOINTMENT_CLEAR_REDUCER,
  APPOINTMENT_SELECT_DOCTOR,
  APPOINTMENT_SET_APPOINTMENTLIST,
  SET_APPOINTMENT_CAROUSEL,
} from "utils/actionTypes";
import {
  DOCTOR_FIND_ALL_URL,
  FIND_DOCTOR_BY_DEPARTMENT_URL,
  FIND_APPOINTMENT_BY_DOCTOR_URL,
} from "utils/constants";

export const findAllDoctor = async () => {
  const doctorList = await axios.get(DOCTOR_FIND_ALL_URL).then((res) => {
    if (res.status == 200) {
      return res.data;
    } else return [];
  });

  return doctorList;
};

export const setSelectedDepartment = (department) => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_SELECT_DEPARTMENT,
    payload: {
      data: department,
    },
  });
};

export const setSelectedDoctor = (doctor) => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_SELECT_DOCTOR,
    payload: {
      data: doctor,
    },
  });
};

export const findDoctorByDepartment = (id) => async (dispatch) => {
  await axios
    .get(FIND_DOCTOR_BY_DEPARTMENT_URL + id)
    .then((res) => {
      if (res.status == 200) {
        dispatch({
          type: APPOINTMENT_SET_DOCTORLIST,
          payload: {
            data: res.data,
          },
        });
      }
    })
    .catch((err) => console.log(err));
};

export const findAppointmentByDoctor = (id) => async (dispatch) => {
  await axios
    .get(FIND_APPOINTMENT_BY_DOCTOR_URL + id)
    .then((res) => {
      if (res.status == 200) {
        dispatch({
          type: APPOINTMENT_SET_APPOINTMENTLIST,
          payload: {
            data: res.data,
          },
        });
      }
    })
    .catch((err) => console.log(err));
};

export const nextPage = () => async (dispatch) => {
  dispatch({
    type: NEXT_APPOINTMENT_CAROUSEL,
  });
};

export const prevPage = () => async (dispatch) => {
  dispatch({
    type: PREV_APPOINTMENT_CAROUSEL,
  });
};

export const setPage = (page) => (dispatch) => {
  dispatch({
    type: SET_APPOINTMENT_CAROUSEL,
    payload: {
      data: page,
    },
  });
};

export const clearReducer = () => (dispatch) => {
  dispatch({
    type: APPOINTMENT_CLEAR_REDUCER,
  });
};
