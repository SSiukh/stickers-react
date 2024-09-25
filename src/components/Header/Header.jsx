import React from "react";
import styles from "./Header.module.css";
import icon from "../../assets/facebook.svg"

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <a href="#" className={styles.headerLogo}>
            sticker ua
          </a>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>Головна</li>
            <li className={styles.headerNavItem}>Про нас</li>
            <li className={styles.headerNavItem}>Каталог</li>
            <li className={styles.headerNavItem}>Акції</li>
            <li className={styles.headerNavItem}>Відгуки</li>
            <li className={styles.headerNavItem}>Замовити</li>
          </ul>
        </nav>
        <div className={styles.headerContacts}>
          <a href="https://www.instagram.com/_sticker.ua_?igsh=dmtyY20xbXp1YTFo">
            <svg></svg>
          </a>
          <a href="">
            <img src={icon} alt="icon" />
          </a>
          <a href="">
            <svg></svg>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
