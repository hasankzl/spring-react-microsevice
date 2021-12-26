import axios from "axios";
import { API_BASE_URL } from "./constants";
import notification from "./notification";
import { t } from "i18next";

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.message) {
      notification.success({
        message: response.data.message,
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          notification.warning({
            message: error.response.data.message,
          });

          break;

        case 503:
          notification.warning({
            message: t("general.serviceNotActive"),
          });

          break;
        default:
          break;
      }
    }
    return error.response;
  }
);
