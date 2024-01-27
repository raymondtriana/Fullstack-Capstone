import React, { useState } from "react";
import "../style/index.css";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./home/home";
import Login from "./login/Login";
import Register from "./register/Register";
import Account from "./account/Account";
import ProductDetails from "./product_details/ProductDetails";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import Thankyou from "./checkout/Thankyou";
const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home token={token} setToken={setToken}/>} />
          <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/account" element={<Account token={token} setToken={setToken}/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
