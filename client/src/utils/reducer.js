import { GENERAL_FIND_DEPARTMENT } from "./actionTypes";

const initialState = {
  departmentList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_FIND_DEPARTMENT:
      return {
        ...state,
        departmentList: action.payload.data,
      };

    default:
      return state;
  }
};
