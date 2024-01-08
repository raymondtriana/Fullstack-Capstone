import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { getCart } from "../api/API";
import { getProduct } from "../api/API";
import ProductDetails from "../product_details/ProductDetails";
import ProductCart from "../productCart/productCart";
export default function Cart(props) {
  const [cartInfo, setCartInfo] = useState(null);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getCart(1, setCartInfo);
  }, []);
  return (
    <>
      <Navbar />
      <h1>CART</h1>
      {cartInfo ? (
        <>
          {cartInfo.products.map((value, index) => {
            return (
              <>
                <ProductCart
                  key={value.productId}
                  productId={value.productId}
                />
                <p>Quantity: {value.quantity}</p>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
