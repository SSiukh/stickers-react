import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Discount from "./components/Discount/Discount";
import Response from "./components/Response/Response";
import Catalog from "./pages/Catalogue";
import ModaleCart from "./components/Cart/ModaleCart";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import Form from "./components/Form/Form";

function App() {
  const [isOpenModuleCart, setIsOpenModuleCart] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function visForm() {
    setIsFormVisible(true);
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

  function cartHidden() {}

  return (
    <Router basename="/stickers-react">
      <Form
        visibility={isFormVisible}
        onClose={() => {
          setIsFormVisible(false);
        }}
      />
      <ModaleCart
        cartHidden={cartHidden}
        cartQty={cartQty}
        close={() => setIsOpenModuleCart(false)}
        isOpen={isOpenModuleCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                headCartNum={cartNum}
                toggle={() => setIsOpenModuleCart(true)}
              />
              <Hero visForm={visForm} />
              <AboutUs cartQty={cartQty} />
              <Discount cartQty={cartQty} />
              <Response />
              <Footer />
            </>
          }
        />
        <Route
          path="/Catalogue"
          element={
            <Catalog
              modalHeadCartNum={cartNum}
              toggle={() => setIsOpenModuleCart(true)}
            />
          }
        />{" "}
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
