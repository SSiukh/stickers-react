import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CatalogueHeader from "../components/Catalogue/CatalogueHeader";
import CatalogueMain from "../components/Catalogue/CatalogueMain";
import Footer from "../components/Footer/Footer";

const Catalogue = ({ modalHeadCartNum, toggle }) => {
  const [position, setPosition] = useState("Каталог");
  const [isOpenModuleCart, setIsOpenModuleCart] = useState(false);
  function handleToggle() {
    toggle();
  }

  const [cartNum, setCartNum] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0
  );

  function cartQty() {
    setCartNum(
      JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).length
        : 0
    );
  }

  const dataFromChild = (childData) => {
    setPosition(childData);
  };

  return (
    <>
      <Header
        modalHeadCartNum={modalHeadCartNum}
        headCartNum={cartNum}
        toggle={handleToggle}
      />
      <CatalogueHeader path={position} />
      <CatalogueMain cartQty={cartQty} getInfo={dataFromChild} />
      <Footer />
    </>
  );
};

export default Catalogue;
