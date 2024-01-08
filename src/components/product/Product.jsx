import { useNavigate } from "react-router";
export default function Product(props) {
  const navigate = useNavigate();

  function handleDetailsButton(e) {
    navigate("/product/" + props.product.id);
  }

  function handleCheckOutButton(e) {}
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
        Check out
      </button>
    </>
  );
}
