import React from "react";
import styles from "./MainCart.module.css";
import { removeLocaleCart } from "../../data/localStorage";

function MainCartElement({ path, name, price, qty, id }) {
  function setQty(event) {
    const data = JSON.parse(localStorage.getItem("cart"));

    const result = data.map((item) => {
      console.log(item.id + "-" + id);
      if (item.id === id) {
        item.qty = event.target.value;
        console.log("some");
      }

      return item;
    });

    localStorage.setItem("cart", JSON.stringify(result));
  }

  return (
    <div className={styles.cartElement}>
      <button
        onClick={() => removeLocaleCart(id)}
        className={styles.cartElement_button}
      >
        &#x2716;
      </button>
      <img className={styles.cartElement_image} src={path} alt={name} />
      <div className={styles.cartElement_div}>
        <p className={styles.cartElement_div_name}>{name}</p>
        <p className={styles.cartElement_div_price}>{price} грн</p>
        <input
          onInput={setQty}
          className={styles.cartElement_div_input}
          type="number"
          name="quantity"
          id={id}
          defaultValue={qty}
        />
        <p className={styles.cartElement_div_totalPrice}>{price * qty} грн</p>
      </div>
    </div>
  );
}

export default MainCartElement;
