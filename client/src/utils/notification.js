import { NotificationManager } from "react-notifications";
import { t } from "i18next";

const info = (data) => {
  const title = data.title ? data.title : t("general.info");
  const message = data.message ? data.message : t("general.infoMessage");
  NotificationManager.info(message, title);
};

const success = (data) => {
  const title = data.title ? data.title : t("general.success");
  const message = data.message ? data.message : t("general.successMessage");
  NotificationManager.success(message, title);
};

const warning = (data) => {
  const title = data.title ? data.title : t("general.warning");
  const message = data.message ? data.message : t("general.warningMessage");
  NotificationManager.warning(message, title);
};

const error = (data) => {
  const title = data.title ? data.title : t("general.error");
  const message = data.message ? data.message : t("general.errorMessage");
  NotificationManager.error(message, title);
};

export default { info, success, warning, error };
