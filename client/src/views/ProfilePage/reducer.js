import {
  FIND_USER_WITH_APPOINTMENT,
  APPOINTMENT_FOR_DOCTOR,
} from "utils/actionTypes";

const initialState = {
  userWithAppointment: {
    person: {
      name: "",
      surname: "",
    },
    appointmentList: [],
  },
  appointmentForDoctor: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_USER_WITH_APPOINTMENT:
      return {
        ...state,
        userWithAppointment: { ...action.payload.data },
      };
    case APPOINTMENT_FOR_DOCTOR:
      return {
        ...state,
        appointmentForDoctor: action.payload.data,
      };
    default:
      return state;
  }
};
