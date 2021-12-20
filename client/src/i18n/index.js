import i18n from "i18next";
import en from "./langs/en";
import tr from "./langs/tr";
import { initReactI18next } from "react-i18next";
import { LANG_EN } from "utils/constants";
import { CURRENT_LANG } from "utils/constants";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem(CURRENT_LANG) || navigator.language,
  fallbackLng: LANG_EN,
  resources: {
    en,
    tr,
  },
});

export default i18n;
