import { combineReducers } from "redux";
import loginReducer from "views/LoginPage/reducer";
import departmentReducer from "views/dashboard/Department/reducer";
import doctorReducer from "views/dashboard/Doctor/reducer";
import generalReducer from "utils/reducer";
import appointmentReducer from "views/AppointmentPage/reducer";
import profileReducer from "views/ProfilePage/reducer";
import doctorProfileReducer from "views/DoctorProfile/reducer";
export default combineReducers({
  loginReducer,
  departmentReducer,
  doctorReducer,
  generalReducer,
  appointmentReducer,
  profileReducer,
  doctorProfileReducer,
});
