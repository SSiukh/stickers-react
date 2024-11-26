import React from "react";
import styles from "./Hero.module.css";
import logo from "../../assets/hero-logo.png";

function Hero({ visForm }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContainer}>
          <div className={styles.mainContent}>
            <h1 className={styles.heroTitle}>
              STICKER UA - магазин якісних наклейок
            </h1>
            <p className={styles.heroText}>
              Перетвори свій байк на витвір мистецтва
            </p>
            <button onClick={visForm} className={styles.heroButton}>
              Зробити замовлення
            </button>
          </div>
          <img src={logo} alt="logotype" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
