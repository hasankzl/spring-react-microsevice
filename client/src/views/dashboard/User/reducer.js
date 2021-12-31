import {
  ADMIN_EDIT_USER,
  ADMIN_FIND_ALL_USER,
  ADMIN_SAVE_EDIT_USER,
} from "utils/actionTypes";

const initialState = {
  editingUser: {},
  doctorList: [],
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FIND_ALL_USER:
      return {
        ...state,
        userList: action.payload.data,
      };
    case ADMIN_EDIT_USER:
      return {
        ...state,
        editingUser: { ...action.payload.data },
      };
    case ADMIN_SAVE_EDIT_USER:
      return {
        ...state,
        editingUser: {},
      };
    default:
      return state;
  }
};
