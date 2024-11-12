import React, { useState } from "react";
import styles from "./ModaleCart.module.css";
import ModaleCartElement from "./ModaleCartElement";
import { Stickers } from "../../data/stickers";
import Form from "../Form/Form";

function ModaleCart({ close, isOpen }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function stickersInCart(object) {
    return object.filter((sticker) => sticker.isInCart);
  }

  function handleClose() {
    close();
  }

  return (
    <div className={`${isOpen ? styles.modaleOverlay : styles.hidden}`}>
      <div className={styles.modaleCart}>
        <div>
          <div className={styles.modaleCart_Head}>
            <p className={styles.modaleCart_Head_Title}>Торба покупок</p>
            <button
              type="button"
              onClick={handleClose}
              className={styles.modaleCart_Head_Button}
            >
              &#x2716;
            </button>
          </div>
          <div className={styles.modaleCart_Items}>
            {stickersInCart(Stickers).map((sticker) => {
              return (
                <ModaleCartElement key={sticker.index} sticker={sticker} />
              );
            })}
          </div>
        </div>
        <div>
          <div className={styles.modaleCart_summary}>
            <p className={styles.modaleCart_summary_text}>
              Проміжний підсумок:{" "}
            </p>
            <p className={styles.modaleCart_summary_price}>
              {stickersInCart(Stickers).reduce((allSum, sticker) => {
                return (allSum += sticker.price);
              }, 0)}{" "}
              UAH
            </p>
          </div>
          <div className={styles.modaleCart_buttons}>
            <button type="button" className={styles.modaleCart_buttons_toCart}>
              Перейти до кошика
            </button>
            <button
              onClick={() => setIsFormVisible(true)}
              type="button"
              className={styles.modaleCart_buttons_toOffer}
            >
              Перейти до оформлення замовлення
            </button>
          </div>
        </div>
      </div>
      <Form
        visibility={isFormVisible}
        onClose={() => {
          setIsFormVisible(false);
        }}
      />
    </div>
  );
}

export default ModaleCart;
