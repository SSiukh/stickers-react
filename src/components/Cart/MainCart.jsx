import React, { useState } from "react";
import styles from "./MainCart.module.css";
import MainCartElement from "./MainCartElement";
import { Stickers } from "../../data/stickers";

function MainCart({ visForm }) {
  function createList(obj) {
    const currentData = JSON.parse(localStorage.getItem("cart")) || [];
    const idArray = currentData.map((item) => item.id);
    const qtyArray = currentData.map((item) => item.qty);

    const elements = obj.filter((item) => {
      return idArray.includes(item.index);
    });

    console.log(elements);

    const markUpArray = elements.map((item, id) => {
      return (
        <MainCartElement
          key={id}
          path={item.path}
          name={item.name}
          price={item.price}
          qty={qtyArray[id]}
          id={item.index}
        />
      );
    });

    return markUpArray;
  }

  function totalSum() {
    const data = JSON.parse(localStorage.getItem("cart"));

    return data.reduce((sum, item) => {
      sum += Stickers[item.id].price * item.qty;
      return sum;
    }, 0);
  }

  return (
    <>
      <section className={styles.cart}>
        <div className="container">
          <div className={styles.cart_div}>
            <h2 className={styles.cart_div_title}>Кошик</h2>
            <div className={styles.cart_div_table}>
              <div className={styles.cart_div_table_head}>
                <p className={styles.cart_div_table_head_item}>Продукт</p>
                <p className={styles.cart_div_table_head_item}>Ціна</p>
                <p className={styles.cart_div_table_head_item}>Кількість</p>
                <p className={styles.cart_div_table_head_item}>Підсумок</p>
              </div>
              <ul className={styles.cart_div_table_list}>
                {createList(Stickers)}
              </ul>
              <div className={styles.cart_div_table_foot}>
                <p className={styles.cart_div_table_foot_text}>
                  Загальна сума замовлення: {totalSum()} грн
                </p>
                <button
                  onClick={visForm}
                  className={styles.cart_div_table_foot_button}
                >
                  Перейти до оформлення замовлення
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainCart;
