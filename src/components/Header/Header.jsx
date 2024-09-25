import React from "react";
import styles from "./Header.module.css";
import icons from "/icons.svg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.headerNav}>
            <a href="#" className={styles.headerLogo}>
              sticker ua
            </a>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavLi}>
                <a href="#" className={styles.headerNavItem}>
                  Головна
                </a>
              </li>
              <li>
                <a href="#" className={styles.headerNavItem}>
                  Про нас
                </a>
              </li>
              <li>
                <a href="#" className={styles.headerNavItem}>
                  Каталог
                </a>
              </li>
              <li>
                <a href="#" className={styles.headerNavItem}>
                  Акції
                </a>
              </li>
              <li>
                <a href="#" className={styles.headerNavItem}>
                  Відгуки
                </a>
              </li>
              <li>
                <a href="#" className={styles.headerNavItem}>
                  Замовити
                </a>
              </li>
            </ul>

            <div className={styles.headerContacts}>
              <a className={styles.headerContactsLink} href="#">
                <svg width={20} height={20} className={styles.contactIcons}>
                  <use href={`${icons}#icon-facebook`} />
                </svg>
              </a>
              <a
                className={styles.headerContactsLink}
                href="https://www.instagram.com/_sticker.ua_?igsh=dmtyY20xbXp1YTFo"
              >
                <svg width={20} height={20} className={styles.contactIcons}>
                  <use href={`${icons}#icon-instagram`} />
                </svg>
              </a>
              <a className={styles.headerContactsLink} href="">
                <svg width={16} height={16} className={styles.contactIcons}>
                  <use href={`${icons}#icon-telegram`} />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
