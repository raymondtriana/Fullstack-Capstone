import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../api/API";
import Navbar from "../navbar/Navbar";

export default function ProductDetails(props) {
  const params = useParams();
  let [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    getProduct(params.id, setProductDetails);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1>Product Details</h1>
      {productDetails ? (
        <>
          <div>
            <h3>{productDetails.title}</h3>
            <h4>{productDetails.category}</h4>
            <em>{productDetails.description}</em>
            <img
              src={productDetails.image}
              alt={productDetails.title}
              style={{ width: "100px" }}
            />
            <p>${productDetails.price}</p>
            <button onClick={(e)=>{history.back()}}>Go Back</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
