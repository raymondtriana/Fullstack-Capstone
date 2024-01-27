import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/API";
import Product from "../product/Product";
export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [sortOption, setsortOption] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    getAllProducts(setProducts);
    console.log(products);
  }, []);


  useEffect(() => {
    sortItems()
  }, [sortOption, sortOrder])
  const handleChange = (event) => {
    setsortOption(event.target.value);
  };

  function handleSortOrder(value) {
    setSortOrder(value)
  }


  function sortItems() {
    let sortedPrices = []
    if (sortOrder == 'asc')
      switch (sortOption) {
        case 'name':
            sortedPrices = [...products].sort((a, b) => {
            if (a.title < b.title)
              return -1
            if (a.title > b.title)
              return 1
            return 0
          })
          setProducts(sortedPrices)
          break;
        case 'price':
          sortedPrices = [...products].sort((a, b) => {
            console.log(a.price)
            if (a.price < b.price)
              return -1
            if (a.price > b.price)
              return 1
            return 0
          })
          setProducts(sortedPrices)
          break;
        case 'rating':
          sortedPrices = [...products].sort((a, b) => {
            if (a.rating.rate < b.rating.rate)
              return -1
            if (a.rating.rate > b.rating.rate)
              return 1
            return 0
          })
          setProducts(sortedPrices)
          break;
          break;
        case 'numOfReviews':
          sortedPrices = [...products].sort((a, b) => {
            if (a.rating.count < b.rating.count)
              return -1
            if (a.rating.count > b.rating.count)
              return 1
            return 0
          })
          setProducts(sortedPrices)
          break;
      }

    if (sortOrder == 'desc')
    switch (sortOption) {
      case 'name':
          sortedPrices = [...products].sort((a, b) => {
          if (a.title < b.title)
            return 1
          if (a.title > b.title)
            return -1
          return 0
        })
        setProducts(sortedPrices)
        break;
      case 'price':
        sortedPrices = [...products].sort((a, b) => {
          console.log(a.price)
          if (a.price < b.price)
            return 1
          if (a.price > b.price)
            return -1
          return 0
        })
        setProducts(sortedPrices)
        break;
      case 'rating':
        sortedPrices = [...products].sort((a, b) => {
          if (a.rating.rate < b.rating.rate)
            return 1
          if (a.rating.rate > b.rating.rate)
            return -1
          return 0
        })
        setProducts(sortedPrices)
        break;
        break;
      case 'numOfReviews':
        sortedPrices = [...products].sort((a, b) => {
          if (a.rating.count < b.rating.count)
            return 1
          if (a.rating.count > b.rating.count)
            return -1
          return 0
        })
        setProducts(sortedPrices)
        break;
    }


  }

  return (
    <>
      <Navbar token={props.token} setToken={props.setToken} />
      <h1>HOME PAGE</h1>
      <>
        <label htmlFor="">sort</label>
        <select value={sortOption} onChange={(e) => { setsortOption(e.target.value) }}>
          <option value="">Select an option</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="numOfReviews">Number of reviews</option>
        </select>
        <select value={sortOrder} onChange={(e) => { handleSortOrder(e.target.value) }}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </>
      {products ? <>
        {products.map((product) => {
          return (<Product key={product.id} product={product} />);
        })}</> : <></>}
    </>
  );
}
