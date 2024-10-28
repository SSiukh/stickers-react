import React, { useState } from "react";
import styles from "./Header.module.css";
import icons from "/icons.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { Stickers } from "../../data/stickers";

function Header({ toggle }) {
  function handleToggle() {
    toggle();
  }

  const numbStickerInCart = Stickers.filter(
    (sticker) => sticker.isInCart
  ).length;

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.headerNav}>
            <Link to="/." className={styles.headerLogo}>
              sticker ua
            </Link>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavLi}>
                <Link to="/." className={styles.headerNavItem}>
                  Головна
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  className={styles.headerNavItem}
                >
                  Про нас
                </ScrollLink>
              </li>
              <li>
                <Link to="/Catalogue" className={styles.headerNavItem}>
                  Каталог
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="discount"
                  smooth="true"
                  duration={500}
                  className={styles.headerNavItem}
                >
                  Акції
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="response"
                  smooth="true"
                  duration={500}
                  className={styles.headerNavItem}
                >
                  Відгуки
                </ScrollLink>
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
              <button
                type="button"
                onClick={handleToggle}
                className={styles.headerCartLink}
                href=""
              >
                <svg width={25} height={25} className={styles.headerCartIcon}>
                  <use href={`${icons}#icon-cart`} />
                </svg>
                <span className={styles.headerCartNum}>
                  {numbStickerInCart}
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
