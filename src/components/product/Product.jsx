import { useNavigate } from "react-router";
import { addToCart } from "../api/API";
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
    <>
      <h3>{props.product.title}</h3>
      <h4>{props.product.category}</h4>
      <em>{props.product.description}</em>
      <img
        src={props.product.image}
        alt={props.product.title}
        style={{ width: "100px" }}
      />
      <p>Rating: {props.product.rating.rate}</p>
      <p>Review Count: {props.product.rating.count}</p>

      <p>${props.product.price}</p>
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
    </>
  );
}
