import React from "react";
import styles from "./CatalogueHeader.module.css";

function CatalogueHeader({ path }) {
  return (
    <>
      <div className={styles.headerContainer}></div>
      <section className={styles.pathSection}>
        <div className="container">
          <p className={styles.pathText}>
            Головна {">>"} {path}{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default CatalogueHeader;
