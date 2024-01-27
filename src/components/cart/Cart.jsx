import "./Cart.css"
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { getCart } from "../api/API";
import { getProduct } from "../api/API";
import ProductDetails from "../product_details/ProductDetails";
import ProductCart from "../productCart/productCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Cart(props) {
  const [cartInfo, setCartInfo] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getCart(1, setCartInfo);
  }, []);

  return (
    <>
      <h2>CART</h2>
      <Link to={"/checkout"}>
        <button className="nav-button">{"Checkout"}</button>
      </Link>
      {cartInfo ? (
        <div className="productsContainer" >
          {cartInfo.products.map((value, index) => {
            return (
              <>
                <ProductCart
                  key={value.productId}
                  productId={value.productId}
                  quantity={value.quantity}
                  setCartInfo={setCartInfo}
                />
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
