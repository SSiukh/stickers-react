import React, { useState } from "react";
import styles from "./Discount.module.css";
import DiscountCard from "./DiscountCard";

import { Stickers } from "../../data/stickers";

function Discount({ cartQty }) {
  return (
    <section id="discount" className={styles.discountSection}>
      <div className="container">
        <div className={styles.discountDiv}>
          {Stickers.map((sticker) => {
            if (sticker.discount !== 0) {
              return (
                <DiscountCard
                  key={sticker.index}
                  path={sticker.path}
                  name={sticker.name}
                  price={sticker.price}
                  discount={sticker.discount}
                  index={sticker.index}
                  cartQty={cartQty}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Discount;
