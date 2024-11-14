import React, { useState } from "react";
import Header from "../components/Header/Header";
import MainCart from "../components/Cart/MainCart";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

function Cart() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function visForm() {
    setIsFormVisible(true);
  }

  return (
    <>
      <Form
        visibility={isFormVisible}
        onClose={() => {
          setIsFormVisible(false);
        }}
      />
      <Header />
      <MainCart visForm={visForm} />
      <Footer />
    </>
  );
}

export default Cart;
