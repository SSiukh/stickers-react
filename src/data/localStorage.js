import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function setLocaleCart({ id, qty }) {
  const existData = JSON.parse(localStorage.getItem("cart")) || [];
  const currentElem = existData.find((item) => {
    return item.id === id;
  });

  if (currentElem) {
    iziToast.show({
      theme: "dark",
      title: "Помилка!",
      message: "У кошику вже присутній цей товар",
      position: "topRight",
      color: "#eb6424",
      timeout: 2000,
    });
    return;
  }

  const currentData = [...existData, { id, qty }];

  localStorage.setItem("cart", JSON.stringify(currentData));
}

export function removeLocaleCart(index) {
  const existData = JSON.parse(localStorage.getItem("cart")) || [];
  const currentElem = existData.find((item) => {
    return item.id === index;
  });

  if (!currentElem) {
    iziToast.show({
      theme: "dark",
      title: "Помилка!",
      message: "У кошику відсутній цей товар",
      position: "topRight",
      color: "#eb6424",
      timeout: 2000,
    });
    return;
  }

  const currentData = existData.filter((item) => index !== item.id);

  localStorage.setItem("cart", JSON.stringify(currentData));
}
