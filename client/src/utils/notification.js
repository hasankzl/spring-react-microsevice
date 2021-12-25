import { NotificationManager } from "react-notifications";

const info = (data) => {
  const title = data.title ? data.title : "bilgi";
  const message = data.message ? data.message : "Buraya dikkat edin";
  NotificationManager.info(message, title);
};

const success = (data) => {
  const title = data.title ? data.title : "Başarılı";
  const message = data.message
    ? data.message
    : "İşlem başarıyla tamamlanmıştır";
  NotificationManager.success(data.message, data.title);
};

const warning = (data) => {
  const title = data.title ? data.title : "Uyarı";
  const message = data.message ? data.message : "Uyarı verilmiştir";
  NotificationManager.warning(data.message, data.title);
};

const error = (data) => {
  const title = data.title ? data.title : "Hata";
  const message = data.message ? data.message : "hatalı bir işlem yapıldı";
  NotificationManager.error(data.message, data.title);
};

export default { info, success, warning, error };
