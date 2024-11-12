import React, { useState } from "react";
import styles from "./Form.module.css";

function Form({ visibility, onClose }) {
  return (
    <div className={visibility ? styles.formOverlay : styles.hidden}>
      <div className={styles.form}>
        <button
          onClick={onClose}
          className={styles.form_exitButton}
          type="button"
        >
          &#x2716;
        </button>
        <h2 className={styles.form_title}>Лишіть свої дані для оформлення</h2>

        <form id="form" className={styles.form_inputs}>
          <label className={styles.form_inputs_label} htmlFor="firstName">
            Прізвище та ім'я
            <input
              className={styles.form_inputs_input}
              type="text"
              name="firstName"
            />
          </label>

          <label className={styles.form_inputs_label} htmlFor="telNumber">
            Номер телефону
            <input
              className={styles.form_inputs_input}
              type="tel"
              name="telNumber"
            />
          </label>

          <label className={styles.form_inputs_label} htmlFor="email">
            Населений пункт
            <input
              className={styles.form_inputs_input}
              type="text"
              name="city"
            />
          </label>
          <label className={styles.form_inputs_label} htmlFor="wayShip">
            Спосіб доставки
            <select
              className={styles.form_inputs_select}
              name="wayShip"
              id="shiping"
            >
              <option
                className={styles.form_inputs_select_options}
                value="novaposhta"
              >
                Нова пошта
              </option>
              <option
                className={styles.form_inputs_select_options}
                value="novaposhta"
              >
                Укрпошта
              </option>
            </select>
          </label>

          <label className={styles.form_inputs_label} htmlFor="punkt">
            Відділення/індекс
            <input
              className={styles.form_inputs_input}
              type="text"
              name="punkt"
            />
          </label>
          <button className={styles.form_inputs_button}>Оформити</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
