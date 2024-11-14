import React, { useState } from "react";
import styles from "./Discount.module.css";
import icons from "/icons.svg";
import { Stickers } from "../../data/stickers";
import { setLocaleCart } from "../../data/localStorage";

function DiscountCard({ cartQty, path, name, price, discount, index }) {
  return (
    <div className={styles.discountCard}>
      <img
        width={190}
        className={styles.discountCardImg}
        src={path}
        alt={name}
      />
      <div className={styles.discountCardFirstDiv}>
        <h3 className={styles.discountCardTitle}>{name}</h3>
        <button className={styles.discountCardHeartButton}>
          <svg width={17} height={15} className={styles.discountCardHeart}>
            <use href={`${icons}#icon-heart`}></use>
          </svg>
        </button>
      </div>
      <div className={styles.discountCardSecondDiv}>
        <div className={styles.discountCardPriceDiv}>
          <p className={styles.discountCardLastPrice}>{price}</p>
          <p className={styles.discountCardNewPrice}>
            <span className={styles.priceEmphasis}>{discount} </span>
            грн/шт
          </p>
        </div>
        <button
          onClick={() => {
            setLocaleCart({ id: index, qty: 1 });
            cartQty();
          }}
          className={
            Stickers[index].isInCart
              ? `${styles.discountCardCartButton} ${styles.isInCard}`
              : styles.discountCardCartButton
          }
        >
          <svg
            width={20}
            height={20}
            className={
              Stickers[index].isInCart
                ? `${styles.discountCardCart} ${styles.iconIsInCard}`
                : styles.discountCardCart
            }
          >
            <use href={`${icons}#icon-cart`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DiscountCard;
