import { combineReducers } from "redux";
import loginReducer from "views/LoginPage/reducer";
import departmentReducer from "views/dashboard/Department/reducer";
import doctorReducer from "views/dashboard/Doctor/reducer";
import generalReducer from "utils/reducer";
import appointmentReducer from "views/AppointmentPage/reducer";
export default combineReducers({
  loginReducer,
  departmentReducer,
  doctorReducer,
  generalReducer,
  appointmentReducer,
});
