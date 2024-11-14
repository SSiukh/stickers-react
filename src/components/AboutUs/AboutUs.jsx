import React, { useState } from "react";
import styles from "./AboutUs.module.css";
import icons from "/icons.svg";
import { setLocaleCart } from "../../data/localStorage";

import { Stickers } from "../../data/stickers";

function AboutUs({ cartQty }) {
  const [sliceIndex, setSliceIndex] = useState(1);
  const [activeSticker, setActiveSticker] = useState(0);
  const [indexActive, setIndexActive] = useState(0);

  function ResolveSticker(index) {
    setIndexActive(index);
    setActiveSticker(1);

    for (const sticker of Stickers) {
      if (sticker.index === index) {
        sticker.priority = 1;
      } else {
        sticker.priority = 0;
      }
    }

    for (const sticker of Stickers) {
      if (sticker.priority === 1) {
        setSliceIndex(sticker.index);
      }
    }
  }

  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <div className="container">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutBlock}>
            <h2 className={styles.aboutTitle}>
              Створюємо стиль для тих, хто на двох колесах
            </h2>
            <p className={styles.aboutText}>
              Ми — команда ентузіастів двоколісної техніки, які перетворили свою
              пристрасть на справу життя.
            </p>
            <p className={styles.aboutText}>
              Наша мета — допомогти вам зробити ваш транспорт унікальним та
              стильним, адже кожна наклейка створена з турботою про деталі та
              якість. Ми розуміємо, наскільки важливо мати надійний продукт,
              тому використовуємо лише перевірені матеріали, що витримують
              будь-які погодні умови.
            </p>
            <p className={styles.aboutText}>
              Кожен з нас не просто продає наклейки — ми самі живемо на двох
              колесах і знаємо, що вам потрібно.
            </p>

            <div
              className={styles.infoStickerBlock}
              style={{
                transform:
                  activeSticker === 1
                    ? "translateY(-550px)"
                    : "translateY(0px)",
              }}
            >
              <h2 className={styles.infoStickerTitle}>
                {Stickers[indexActive].name.toUpperCase()}
              </h2>
              <p className={styles.infoStickerText}>
                {Stickers[indexActive].info}
              </p>
              <div className={styles.infoStickerInteractive}>
                <a href="" className={styles.infoStickerCatalogue}>
                  Каталог
                </a>
                <button
                  onClick={() => {
                    setLocaleCart({ id: indexActive, qty: 1 });
                    cartQty();
                  }}
                  className={
                    Stickers[indexActive].isInCart
                      ? `${styles.infoStickerButton} ${styles.isInCard}`
                      : styles.infoStickerButton
                  }
                >
                  <svg
                    width={20}
                    height={20}
                    className={
                      Stickers[indexActive].isInCart
                        ? `${styles.infoStickerIcon} ${styles.iconIsInCard}`
                        : styles.infoStickerIcon
                    }
                  >
                    <use href={`${icons}#icon-cart`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.stickersBlock}>
            {Stickers.slice(sliceIndex - 1, sliceIndex + 2).map((sticker) => (
              <img
                style={sticker.index === 0 ? { visibility: "hidden" } : {}}
                className={
                  sticker.priority === 1 && activeSticker === 1
                    ? `${styles.aboutStickerCeil} ${styles.clickedSticker}`
                    : sticker.priority === 1
                    ? styles.aboutStickerCeil
                    : styles.aboutStickerFloor
                }
                onClick={() => ResolveSticker(sticker.index)}
                key={sticker.index}
                src={sticker.path}
                alt={sticker.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
