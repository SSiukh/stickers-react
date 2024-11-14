export function setLocaleCart({ id, qty }) {
  const existData = JSON.parse(localStorage.getItem("cart")) || [];
  const currentElem = existData.find((item) => {
    return item.id === id;
  });

  if (currentElem) {
    alert("У кошику вже присутній даний елемент");
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
    alert("У кошику відсутній даний елемент");
    return;
  }

  const currentData = existData.filter((item) => index !== item.id);

  localStorage.setItem("cart", JSON.stringify(currentData));
}
