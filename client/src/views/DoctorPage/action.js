import axios from "axios";
import { DOCTOR_FIND_ALL_URL } from "utils/constants";

export const findAllDoctor = async () => {
  const doctorList = await axios.get(DOCTOR_FIND_ALL_URL).then((res) => {
    if (res.status == 200) {
      return res.data;
    } else return [];
  });

  return doctorList;
};
