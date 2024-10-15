import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Discount from "./components/Discount/Discount";
import Response from "./components/Response/Response";
import Catalog from "./pages/Catalogue";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/stickers-react">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <AboutUs />
              <Discount />
              <Response />
            </>
          }
        />
        <Route path="/Catalogue" element={<Catalog />} /> {/* Новий маршрут */}
      </Routes>
    </Router>
  );
}

export default App;
