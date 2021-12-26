import axios from "axios";
import { DOCTOR_FIND_ALL_URL } from "utils/constants";

export const findAllDoctor = async () => {
  const doctorList = await axios.get(DOCTOR_FIND_ALL_URL).then((res) => {
    return res.data;
  });

  return doctorList;
};
