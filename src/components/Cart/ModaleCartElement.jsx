import React, { useState } from "react";
import styles from "./ModuleCartElement.module.css";
import { Stickers } from "../../data/stickers";
import { removeLocaleCart } from "../../data/localStorage";

function ModaleCartElement({ cartQty, sticker }) {
  const [cartStickers, setCartStickers] = useState(
    Stickers.filter((sticker) => sticker.isInCart)
  );
  function handleRemoveFromCart(index) {
    Stickers[index].isInCart = false;
    setCartStickers(Stickers.filter((sticker) => sticker.isInCart));
  }

  return (
    <div className={styles.element}>
      <div className={styles.element_info}>
        <img
          width={50}
          height={50}
          className={styles.element_info_img}
          src={sticker.path}
          alt={sticker.name}
        />
        <div className={styles.element_info_textDiv}>
          <p className={styles.element_info_textDiv_name}>{sticker.name}</p>
          <p className={styles.element_info_textDiv_price}>{sticker.price}</p>
        </div>
      </div>
      <button
        onClick={() => {
          removeLocaleCart(sticker.index);
          cartQty();
        }}
        type="button"
        className={styles.element_button}
      >
        &#x2716;
      </button>
    </div>
  );
}

export default ModaleCartElement;
