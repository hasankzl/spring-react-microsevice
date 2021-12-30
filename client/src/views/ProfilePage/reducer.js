import { FIND_USER_WITH_APPOINTMENT } from "utils/actionTypes";

const initialState = {
  userWithAppointment: {
    person: {
      name: "",
      surname: "",
    },
    appointmentList: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_USER_WITH_APPOINTMENT:
      return {
        ...state,
        userWithAppointment: { ...action.payload.data },
      };
    default:
      return state;
  }
};
