import axios from "axios";

import {
  APPOINTMENT_SELECT_DEPARTMENT,
  APPOINTMENT_SET_DOCTORLIST,
  PREV_APPOINTMENT_CAROUSEL,
  NEXT_APPOINTMENT_CAROUSEL,
} from "utils/actionTypes";
import {
  DOCTOR_FIND_ALL_URL,
  FIND_DOCTOR_BY_DEPARTMENT_URL,
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
