import {
  APPOINTMENT_SELECT_DEPARTMENT,
  APPOINTMENT_SET_DOCTORLIST,
  PREV_APPOINTMENT_CAROUSEL,
  NEXT_APPOINTMENT_CAROUSEL,
} from "utils/actionTypes";

const initialState = {
  selectedDepartment: {},
  doctorList: [],
  appointmentList: [],
  appointment: {},
  carouselPage: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENT_SELECT_DEPARTMENT:
      return {
        ...state,
        selectedDepartment: { ...action.payload.data },
        carouselPage: state.carouselPage + 1,
      };
    case APPOINTMENT_SET_DOCTORLIST:
      return {
        ...state,
        doctorList: action.payload.data,
      };
    case PREV_APPOINTMENT_CAROUSEL:
      return {
        ...state,
        carouselPage: state.carouselPage - 1,
      };
    case NEXT_APPOINTMENT_CAROUSEL:
      return {
        ...state,
        carouselPage: state.carouselPage + 1,
      };
    default:
      return state;
  }
};
