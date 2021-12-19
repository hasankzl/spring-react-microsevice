import { NotificationManager } from "react-notifications";

const info = (data) => {
  NotificationManager.info(data.message, data.title);
};

const success = (data) => {
  NotificationManager.success(data.message, data.title);
};

const warning = (data) => {
  NotificationManager.warning(data.message, data.title);
};

const error = (data) => {
  NotificationManager.error(data.message, data.title);
};

export default { info, success, warning, error };
