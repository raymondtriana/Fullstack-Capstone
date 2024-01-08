import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../api/API";
export default function ProductCart(props) {
  const navigate = useNavigate();
    const [productInfo,setProductInfo] = useState(null);
  useEffect(()=>{
    getProduct(props.productId,setProductInfo)
  },[])
  return (
    <>
    {productInfo?<>
        <div>
            <h3>{productInfo.title}</h3>
            <h4>{productInfo.category}</h4>
            <em>{productInfo.description}</em>
            <img
              src={productInfo.image}
              alt={productInfo.title}
              style={{ width: "100px" }}
            />
            <p>${productInfo.price}</p>
            <button onClick={(e)=>{history.back()}}>Go Back</button>
          </div>
    </>:<></>}
    </>
  );
}
