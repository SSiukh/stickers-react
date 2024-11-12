import React from "react";
import styles from "./Footer.module.css";
import icons from "/icons.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.footer_container_top}>
            <div className={styles.footer_container_top_contacts}>
              <a href="#" className={styles.footer_container_top_contacts_logo}>
                sticker ua
              </a>
              <div className={styles.footer_container_top_contacts_icons}>
                <a
                  className={styles.footer_container_top_contacts_icons_link}
                  href="#"
                >
                  <svg
                    width={20}
                    height={20}
                    className={
                      styles.footer_container_top_contacts_icons_link_icon
                    }
                  >
                    <use href={`${icons}#icon-facebook`} />
                  </svg>
                </a>
                <a
                  className={styles.footer_container_top_contacts_icons_link}
                  href="#"
                >
                  <svg
                    width={20}
                    height={20}
                    className={
                      styles.footer_container_top_contacts_icons_link_icon
                    }
                  >
                    <use href={`${icons}#icon-instagram`} />
                  </svg>
                </a>
                <a
                  className={styles.footer_container_top_contacts_icons_link}
                  href="#"
                >
                  <svg
                    width={20}
                    height={20}
                    className={
                      styles.footer_container_top_contacts_icons_link_icon
                    }
                  >
                    <use href={`${icons}#icon-telegram`} />
                  </svg>
                </a>
              </div>
            </div>
            <h2 className={styles.footer_container_top_title}>
              Насолоджуйся кожною миттю з нашими стікерами: тут стиль і якість
              поєднуються в кожному дизайні!
            </h2>
            <a
              className={styles.footer_container_top_tel}
              href="tel:+380662230636"
            >
              +380 (66) 223-06-36
            </a>
          </div>
          <div className={styles.footer_container_middle}>
            <ul className={styles.footer_container_middle_list}>
              <li className={styles.footer_container_middle_list_item}>
                <Link
                  to="/."
                  className={styles.footer_container_middle_list_item_link}
                >
                  Головна
                </Link>
              </li>
              <li className={styles.footer_container_middle_list_item}>
                <ScrollLink
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  className={styles.footer_container_middle_list_item_link}
                >
                  Про нас
                </ScrollLink>
              </li>
              <li className={styles.footer_container_middle_list_item}>
                <Link
                  to="/Catalogue"
                  className={styles.footer_container_middle_list_item_link}
                >
                  Каталог
                </Link>
              </li>
              <li className={styles.footer_container_middle_list_item}>
                <ScrollLink
                  to="discount"
                  smooth="true"
                  duration={500}
                  className={styles.footer_container_middle_list_item_link}
                >
                  Акції
                </ScrollLink>
              </li>
              <li className={styles.footer_container_middle_list_item}>
                <ScrollLink
                  to="response"
                  smooth="true"
                  duration={500}
                  className={styles.footer_container_middle_list_item_link}
                >
                  Відгуки
                </ScrollLink>
              </li>
              <li className={styles.footer_container_middle_list_item}>
                <a
                  href="#"
                  className={styles.footer_container_middle_list_item_link}
                >
                  Замовити
                </a>
              </li>
            </ul>
            <p className={styles.footer_container_middle_address}>
              Україна, Луцьк, просп. Відродження, 43003
            </p>
          </div>
          <div className={styles.footer_container_bottom}>
            <p className={styles.footer_container_bottom_copyright}>
              &copy;2024 sticker ua.
            </p>
            <a
              href="https://github.com/SSiukh"
              className={styles.footer_container_bottom_dev}
            >
              Dev: github/Ssiukh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
