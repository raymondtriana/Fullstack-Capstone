import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/API";
import Product from "../product/Product";
export default function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts(setProducts);
    console.log(products);
  }, []);
  return (
    <>
      <Navbar token={props.token} setToken={props.setToken}/>
      <h1>HOME PAGE</h1>
      {products ? <>
      {products.map((product)=>{
        return( <Product key={product.id} product={product}/> );
      })}</> : <></>}
    </>
  );
}
