import {
  FIND_DEPARTMENT,
  EDIT_DEPARTMENT,
  SAVE_EDIT_DEPARTMENT,
} from "utils/actionTypes";
const initialState = {
  departmentList: [],
  editingDepartment: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_DEPARTMENT:
      return {
        ...state,
        departmentList: action.payload.data,
      };
    case EDIT_DEPARTMENT:
      return {
        ...state,
        editingDepartment: { ...action.payload.data },
      };
    case SAVE_EDIT_DEPARTMENT:
      return {
        ...state,
        editingDepartment: {},
      };
    default:
      return state;
  }
};
