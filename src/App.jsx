import { useState } from "react";
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
import Form from "./components/Form/Form";

function App() {
  const [isOpenModuleCart, setIsOpenModuleCart] = useState(false);

  return (
    <Router basename="/stickers-react">
      <ModaleCart
        close={() => setIsOpenModuleCart(false)}
        isOpen={isOpenModuleCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header toggle={() => setIsOpenModuleCart(true)} />
              <Hero />
              <AboutUs />
              <Discount />
              <Response />
              <Footer />
            </>
          }
        />
        <Route
          path="/Catalogue"
          element={<Catalog toggle={() => setIsOpenModuleCart(true)} />}
        />{" "}
        {/* Новий маршрут */}
      </Routes>
    </Router>
  );
}

export default App;
