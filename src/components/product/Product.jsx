import { useNavigate } from "react-router";
import { addToCart } from "../api/API";
import './Product.css'
export default function Product(props) {
  const navigate = useNavigate();

  function handleDetailsButton(e) {
    navigate("/product/" + props.product.id);
  }

  async function handleCheckOutButton(e) {
    if(localStorage.getItem('loggedIn') == "true")
      await addToCart(props.product.id,"01/27/2024",props.product)
  }

  return (
    <div className="productContainer">
      <h3 className="productTitle">{props.product.title}</h3>
      <h4 className="productCategory">{props.product.category}</h4>
      <img
        src={props.product.image}
        alt={props.product.title}
        className="productImage"
      />
      <div className="detailsDiv">
      <em className="productDescription">{props.product.description}</em>
      <p className="productRating">Rating: {props.product.rating.rate}</p>
      <p className="productReviewCount">Review Count: {props.product.rating.count}</p>

      <p className="productPrice">${props.product.price}</p>
      <button
        onClick={(e) => {
          handleDetailsButton(e);
        }}
      >
        Details
      </button>
      <button
        onClick={(e) => {
          handleCheckOutButton(e);
        }}
      >
        Add to cart
      </button>
      </div>
    </div>
  );
}
