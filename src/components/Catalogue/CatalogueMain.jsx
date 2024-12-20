import React, { useState, useEffect } from "react";
import styles from "./CatalogueMain.module.css";
import Card from "./СatalogueCard";
import { Stickers } from "../../data/stickers";
import Fuse from "fuse.js";

function CatalogueMain({ cartQty, getInfo }) {
  const [title, setTitle] = useState("Всі продукти");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStickers, setFilteredStickers] = useState(Stickers);

  useEffect(() => {
    getInfo(`Каталог >> ${title}`);
  }, [title, getInfo]);

  useEffect(() => {
    const fuse = new Fuse(Stickers, {
      keys: ["name"],
      includeScore: true,
    });

    if (searchQuery) {
      const results = fuse.search(searchQuery);
      setFilteredStickers(results.map((result) => result.item));
    } else {
      setFilteredStickers(Stickers);
    }
  }, [searchQuery]);

  function setPage(namePage) {
    switch (namePage) {
      case "allProducts":
        setTitle("Всі продукти");
        break;
      case "standart":
        setTitle("Стандартні");
        break;
      case "golographic":
        setTitle("Голографічні");
        break;
      case "chrome":
        setTitle("Хромові");
        break;
      case "matte":
        setTitle("Матові");
        break;
      case "cosmic":
        setTitle("Космічні");
        break;
      case "texture":
        setTitle("Текстурні");
        break;
      case "golographicCosmic":
        setTitle("Голографічні + космічні");
        break;
      case "golographicTexture":
        setTitle("Голографічні + текстурні");
        break;
      case "matteChrome":
        setTitle("Матові + хромові");
        break;
      case "cosmicChrome":
        setTitle("Космічні + хромові");
        break;
      default:
        setTitle("Всі продукти");
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.mainContainer}>
            <div className={styles.mainSideContainer}>
              <h3 className={styles.sideContainerTitle}>Категорії</h3>
              <ul className={styles.sideContainerList}>
                <li
                  onClick={() => setPage("allProducts")}
                  className={styles.sideContainerListItems}
                >
                  Всі продукти
                </li>
                <li
                  onClick={() => setPage("standart")}
                  className={styles.sideContainerListItems}
                >
                  Стандартні
                </li>
                <li
                  onClick={() => setPage("golographic")}
                  className={styles.sideContainerListItems}
                >
                  Голографічні
                </li>
                <li
                  onClick={() => setPage("chrome")}
                  className={styles.sideContainerListItems}
                >
                  Хромові
                </li>
                <li
                  onClick={() => setPage("matte")}
                  className={styles.sideContainerListItems}
                >
                  Матові
                </li>
                <li
                  onClick={() => setPage("cosmic")}
                  className={styles.sideContainerListItems}
                >
                  Космічні
                </li>
                <li
                  onClick={() => setPage("texture")}
                  className={styles.sideContainerListItems}
                >
                  Текстурні
                </li>
                <li className={styles.sideContainerListItem}>Мікс &gt;</li>
                <ul className={styles.sideContainerSecondList}>
                  <li
                    onClick={() => setPage("golographicCosmic")}
                    className={styles.sideContainerSecondListItems}
                  >
                    Голографічні + космічні
                  </li>
                  <li
                    onClick={() => setPage("golographicTexture")}
                    className={styles.sideContainerSecondListItems}
                  >
                    Голографічні + текстурні
                  </li>
                  <li
                    onClick={() => setPage("matteChrome")}
                    className={styles.sideContainerSecondListItems}
                  >
                    Матові + хромові
                  </li>
                  <li
                    onClick={() => setPage("cosmicChrome")}
                    className={styles.sideContainerSecondListItems}
                  >
                    Космічні + хромові
                  </li>
                </ul>
              </ul>
            </div>
            <div className={styles.mainProductsContainer}>
              <div className={styles.mainProductsHeadContainer}>
                <h2 className={styles.mainProductsTitle}>{title}</h2>
                <input
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Шукати..."
                  className={styles.cataloSearch}
                  type="text"
                />
              </div>

              <div className={styles.catalogueProductsContainer}>
                {filteredStickers.map((sticker) => {
                  if (sticker.index !== 0 && title === "Всі продукти") {
                    return (
                      <Card
                        key={sticker.index}
                        path={sticker.path}
                        name={sticker.name}
                        price={sticker.price}
                        discount={sticker.discount}
                        index={sticker.index}
                        cartQty={cartQty}
                      />
                    );
                  } else if (sticker.index !== 0 && sticker.type === title) {
                    return (
                      <Card
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
          </div>
        </div>
      </section>
    </>
  );
}

export default CatalogueMain;
