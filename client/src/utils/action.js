import axios from "axios";
import { GENERAL_FIND_DEPARTMENT } from "./actionTypes";
import { DEPARTMENT_FIND_ALL_URL } from "./constants";

export const generalFindAllDepartment = () => async (dispatch) => {
  await axios
    .get(DEPARTMENT_FIND_ALL_URL)
    .then((res) => {
      dispatch({
        type: GENERAL_FIND_DEPARTMENT,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
