import { combineReducers } from "redux";
import loginReducer from "views/LoginPage/reducer";
import departmentReducer from "views/dashboard/Department/reducer";
export default combineReducers({
  loginReducer,
  departmentReducer,
});
