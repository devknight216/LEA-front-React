import { store } from "react-notifications-component";

export const Toast = (title, message, type) => {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    // animationIn: ["animate__animated", "animate__fadeIn"],
    // animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 4000,
      onScreen: true,
    },
  });
};
