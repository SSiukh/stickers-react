import React, { useState } from "react";
import styles from "./CatalogueCard.module.css";
import icons from "/icons.svg";
import { Stickers } from "../../data/stickers";
import { setLocaleCart } from "../../data/localStorage";

function CatalogueCard({ path, name, price, discount, index, cartQty }) {
  return (
    <div className={styles.catalogueCard}>
      <img
        width={125}
        height={113}
        className={styles.catalogueCardImg}
        src={path}
        alt={name}
      />
      <div className={styles.catalogueCardFirstDiv}>
        <h3 className={styles.catalogueCardTitle}>{name}</h3>
        <button className={styles.catalogueCardHeartButton}>
          <svg width={17} height={15} className={styles.catalogueCardHeart}>
            <use href={`${icons}#icon-heart`}></use>
          </svg>
        </button>
      </div>
      <div className={styles.catalogueCardSecondDiv}>
        <div className={styles.catalogueCardPriceDiv}>
          <span
            className={
              !discount
                ? styles.catalogueCardNewPrice
                : styles.catalogueCardLastPrice
            }
          >
            {price}
          </span>
          {discount ? (
            <span className={styles.priceEmphasis}>{discount} </span>
          ) : (
            ""
          )}

          <span
            className={
              discount ? styles.priceEmphasis : styles.catalogueCardNewPrice
            }
          >
            {" "}
            грн/шт
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setLocaleCart({ id: index, qty: 1 });
            cartQty();
          }}
          className={
            Stickers[index].isInCart
              ? `${styles.catalogueCardCartButton} ${styles.isInCart}`
              : styles.catalogueCardCartButton
          }
        >
          <svg
            width={20}
            height={20}
            className={
              Stickers[index].isInCart
                ? `${styles.catalogueCardCart} ${styles.iconIsInCart}`
                : styles.catalogueCardCart
            }
          >
            <use href={`${icons}#icon-cart`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CatalogueCard;
