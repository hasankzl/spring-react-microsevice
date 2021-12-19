import axios from "axios";
import { LOGOUT_ACTION } from "utils/actionTypes";
import { LOGIN_ACTION } from "utils/actionTypes";
import { LOGIN_URL } from "utils/constants";
import notification from "utils/notification";

export const loginAction = (data) => async (dispatch) => {
  const d = await axios.post(LOGIN_URL, data).then((res) => {
    if (res.status === 200) {
      localStorage.setItem("token", res.data.jwttoken);
      localStorage.setItem("email", res.data.email);
      dispatch({
        type: LOGIN_ACTION,
        payload: {
          email: res.data.email,
        },
      });
      notification.success({
        title: "başarılı",
        message: "başarıyla giriş yapıldı",
      });
      return 1;
    } else if (res.status === 403) {
      notification.warning({
        title: "hata",
        message: "email adresi ve ya şifre yanlış",
      });
    } else {
      notification.error({
        title: "hata",
        message: "bir hata oldu daha sonra tekrar deneyiniz",
      });
    }
  });

  return d;
};

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  dispatch({
    type: LOGOUT_ACTION,
  });
  notification.success({
    title: "başarılı",
    message: "başarıyla çıkış yapıldı",
  });
};
