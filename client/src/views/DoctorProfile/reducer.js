import { FIND_DOCTOR_WITH_APPOINTMENT } from "utils/actionTypes";

const initialState = {
  doctorWithAppointment: {
    doctor: {
      name: "",
      surname: "",
    },
    appointmentList: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_DOCTOR_WITH_APPOINTMENT:
      return {
        ...state,
        doctorWithAppointment: { ...action.payload.data },
      };
    default:
      return state;
  }
};
