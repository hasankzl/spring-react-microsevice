import { combineReducers } from "redux";
import loginReducer from "views/LoginPage/reducer";
import departmentReducer from "views/dashboard/Department/reducer";
import doctorReducer from "views/dashboard/Doctor/reducer";
export default combineReducers({
  loginReducer,
  departmentReducer,
  doctorReducer,
});
