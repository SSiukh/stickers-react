import React, { useState } from "react";
import styles from "./Response.module.css";
import Data from "./responseData";
import icons from "/icons.svg";

function Response() {
  const [pickedImg, setPickedImg] = useState(2);

  function classPick(object) {
    if (object.id === pickedImg) {
      return styles.responsePriorityImg;
    }
    if (object.id === pickedImg - 1 || object.id === pickedImg + 1) {
      return styles.responseImg;
    }
    if (object.id === pickedImg - 2 || object.id === pickedImg + 2) {
      return styles.responseLowImg;
    }
    if (object.id <= pickedImg - 3 || object.id >= pickedImg + 3) {
      return styles.unshowedImg;
    }
  }

  function leftButton() {
    setPickedImg((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  }

  function rightButton() {
    setPickedImg((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className={styles.responseSection}>
      <div className="container">
        <div className={styles.responseContainer}>
          <h2 className={styles.responseTitle}>
            <span className={styles.responseColorTitle}>Що</span> говорять
            клієнти про
            <span className={styles.responseColorTitle}> наші наклейки:</span>
          </h2>
          <div className={styles.responseDiv}>
            <button
              onClick={leftButton}
              className={styles.responseSwitchButton}
            >
              {"<"}
            </button>
            <div className={styles.responseImgContainer}>
              {Data.map((img) => (
                <img
                  key={img.id}
                  src={img.path}
                  alt={img.name}
                  className={classPick(img)}
                ></img>
              ))}
            </div>

            <button
              onClick={rightButton}
              className={styles.responseSwitchButton}
            >
              {/* <svg
                width={30}
                height={30}
                className={`${styles.responseSwitchIcon} ${styles.rotateIcon}`}
              >
                <use href={`${icons}#icon-arrow`}></use>
              </svg> */}
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Response;
