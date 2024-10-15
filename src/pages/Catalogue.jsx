import React, { useState } from "react";
import Header from "../components/Header/Header";
import CatalogueHeader from "../components/Catalogue/CatalogueHeader";
import CatalogueMain from "../components/Catalogue/CatalogueMain";

const Catalogue = () => {
  const [position, setPosition] = useState("Каталог");

  const dataFromChild = (childData) => {
    setPosition(childData);
  };

  return (
    <>
      <Header />
      <CatalogueHeader path={position} />
      <CatalogueMain getInfo={dataFromChild} />
    </>
  );
};

export default Catalogue;
