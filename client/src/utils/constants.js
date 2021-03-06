export const API_BASE_URL = "http://localhost:9191/";
export const ACCESS_TOKEN = "token";
export const ROLE = "role";
export const REGISTER_URL = "auth/register";
export const LOGIN_URL = "auth/login";
export const ADMIN = "[admin]";
export const DOCTOR_ROLE = "[doctor]";
export const LANG_TR = "tr";
export const LANG_EN = "en";
export const CURRENT_LANG = "CURRENT_LANG";

export const DEPARTMENT_SAVE_URL = "/hospital/department/save";
export const DEPARTMENT_DELETE_URL = "/hospital/department/delete/";
export const DEPARTMENT_FIND_ALL_URL = "/hospital/department/findAll";
export const DEPARTMENT_FIND_ALL_FOR_LIST_URL =
  "/hospital/department/findAllForList";
export const DOCTOR_SAVE_URL = "/hospital/doctor/save";
export const DOCTOR_DELETE_URL = "/hospital/doctor/delete/";
export const DOCTOR_FIND_ALL_URL = "/hospital/doctor/findAll";

export const FIND_DEPARTMENT_BY_URL = "/hospital/department/findById/";

export const FIND_DOCTOR_BY_DEPARTMENT_URL =
  "/hospital/doctor/findAllByDepartment/";

export const FIND_APPOINTMENT_BY_DOCTOR_URL =
  "/appointment/getAppointmentByDoctor/";

export const SAVE_APPOINTMENT_URL = "/appointment/save";

export const FIND_USER_WITH_APPOINTMENT_URL = "/auth/getUserWithAppointment";

export const FIND_DOCTOR_WITH_APPOINTMENT_URL =
  "/hospital/doctor/getDoctorWithAppointment/";
export const DELETE_APPOINTMENT_URL = "/appointment/delete/";

export const FIND_ALL_PERSON_URL = "auth/findAllPerson";

export const SET_AS_DOCTOR_URL = "auth/setAsDoctor/";

export const PERSON_DELETE_URL = "auth/deleteById/";

export const DOCTOR_IMAGE_SAVE_URL = "hospital/uploadDoctorImage/";

export const DEPARTMENT_IMAGE_SAVE_URL = "hospital/uploadDepartmentImage/";

export const GET_WEEKLY_APPOINTMENT_FOR_DOCTOR_URL =
  "/appointment/getWeekAppointmentWithUserByDoctor/";

export const GET_ANALYSIS_FOR_PERSON_URL = "/analysis/getAnalysisForPerson/";

export const appoinmentTimes = [
  { name: "ZERO", value: "00" },
  { name: "TEN", value: "10" },
  { name: "TWENTY", value: "20" },
  { name: "THIRTY", value: "30" },
  { name: "FOURTY", value: "40" },
  { name: "FIVETY", value: "50" },
];
export const appoinmentHours = [
  { name: "NINE", value: "09" },
  { name: "TEN", value: "10" },
  { name: "ELEVEN", value: "11" },
  { name: "TWELVE", value: "12" },
  { name: "FOURTEEN", value: "13" },
  { name: "FIFTEEN", value: "14" },
  { name: "SIXTEEN", value: "15" },
  { name: "SEVENTEEN", value: "16" },
  { name: "EIGHTEEN", value: "17" },
];

export const getNextFiveDayWithoutWeekend = () => {
  var dateObj = new Date();
  const nextFiveDayWithoutWeekend = [];
  for (let i = 0; nextFiveDayWithoutWeekend.length <= 4; i++) {
    var weekday = dateObj.toLocaleString("default", { weekday: "long" });
    if (weekday != "Saturday" && weekday != "Sunday") {
      nextFiveDayWithoutWeekend.push({
        date: dateObj.toISOString().split("T")[0],
        weekday,
      });
    }
    dateObj.setDate(dateObj.getDate() + 1);
  }

  return nextFiveDayWithoutWeekend;
};
