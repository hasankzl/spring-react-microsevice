import {
  EDIT_DOCTOR,
  FIND_DOCTOR,
  FIND_DEPARTMENT,
  SAVE_EDIT_DOCTOR,
} from "utils/actionTypes";

const initialState = {
  departmentList: [],
  editingDoctor: {},
  doctorList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // same with departmentReducer
    case FIND_DEPARTMENT:
      return {
        ...state,
        departmentList: action.payload.data,
      };
    case FIND_DOCTOR:
      return {
        ...state,
        doctorList: action.payload.data,
      };
    case EDIT_DOCTOR:
      return {
        ...state,
        editingDoctor: { ...action.payload.data },
      };
    case SAVE_EDIT_DOCTOR:
      return {
        ...state,
        editingDoctor: {},
      };
    default:
      return state;
  }
};
