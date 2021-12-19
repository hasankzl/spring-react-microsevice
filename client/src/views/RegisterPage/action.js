import { breadcrumbsClasses } from "@mui/material";
import axios from "axios";
import { REGISTER_URL } from "utils/constants";
import notification from "utils/notification";
import { Navigate } from "react-router-dom";

export const registerUser = async (user) => {
  const data = await axios
    .post(REGISTER_URL, user)
    .then((res) => {
      switch (res.status) {
        case 200:
          notification.success({
            title: "Kayıt Başarılı",
            message:
              "başarılı bir şekilde kayıt oldunuz giriş sayfasına yönlendiriliyorsunuz",
          });
          // return for redirect to login
          return 1;
        case 500:
          notification.warning({
            title: "Uyarı",
            message: "Aynı email adresine sahip kullanıcı bulunmaktadır",
          });
          return 2;
        default:
          notification.eror({
            message: "Bir hata oluştu lütfen daha sonra tekrar deneyiniz",
            title: "Hata",
          });
          return 3;
      }
    })
    .catch((e) => {
      notification.error({ title: "hatalı işlem", message: e });
    });
  return data;
};
