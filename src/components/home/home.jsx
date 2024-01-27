import "./home.css"

import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/API";
import Product from "../product/Product";
export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [sortOption, setsortOption] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterOption, setFilterOption] = useState('')
  const [search, setSearch] = useState('')

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
      <Navbar token={localStorage.getItem('loggedIn')} />
      <h1>HOME PAGE</h1>
      <>
        <label htmlFor="">sort</label>
        <select value={sortOption} onChange={(e) => { setsortOption(e.target.value) }}>
          <option value="">None</option>
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
      <><label htmlFor="">filter</label>
        <select value={filterOption} onChange={(e) => { setFilterOption(e.target.value) }}>
          <option value="">None</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
        </select>
      </>
      <>
        <label htmlFor="">Search</label>
        <input type="text" name="" id="" onChange={(e) => { setSearch(e.target.value) }} />
      </>
      <div className="productsContainer">

        {products ? <>
          {products.map((product) => {
            if (!product.title.toLowerCase().includes(search.toLowerCase()))
              return (<></>);
            console.log(product)
            if (filterOption != '') {
              if (product.category == filterOption)
                return (<Product key={product.id} product={product} />);
            }
            else {
              return (<Product key={product.id} product={product} />);
            }
          })}</> : <></>}
      </div>
    </>
  );
}
