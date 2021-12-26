import axios from "axios";
import { FIND_DEPARTMENT_BY_URL } from "utils/constants";

export const getDepartmentById = async (id) => {
  const data = await axios
    .get(FIND_DEPARTMENT_BY_URL + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
