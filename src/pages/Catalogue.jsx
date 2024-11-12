import React, { useState } from "react";
import Header from "../components/Header/Header";
import CatalogueHeader from "../components/Catalogue/CatalogueHeader";
import CatalogueMain from "../components/Catalogue/CatalogueMain";
import Footer from "../components/Footer/Footer";

const Catalogue = ({ toggle }) => {
  const [position, setPosition] = useState("Каталог");
  const [isOpenModuleCart, setIsOpenModuleCart] = useState(false);
  function handleToggle() {
    toggle();
  }

  const dataFromChild = (childData) => {
    setPosition(childData);
  };

  return (
    <>
      <Header toggle={handleToggle} />
      <CatalogueHeader path={position} />
      <CatalogueMain getInfo={dataFromChild} />
      <Footer />
    </>
  );
};

export default Catalogue;
