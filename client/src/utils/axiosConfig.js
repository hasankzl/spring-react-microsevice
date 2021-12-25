import axios from "axios";
import { API_BASE_URL } from "./constants";
import notification from "./notification";

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
        title: "başarılı",
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          notification.warning({
            title: "hata",
            message: "Kullanıcı adı şifre hatalı",
          });
          //  window.location = "/"
          break;
        case 400:
          notification.warning({
            title: "hata",
            message: error.response.data.message,
          });

          break;

        case 503:
          notification.warning({
            title: "hata",
            message: "servis aktif değil",
          });

          break;
        default:
          break;
      }
    }
    return error.response;
  }
);
