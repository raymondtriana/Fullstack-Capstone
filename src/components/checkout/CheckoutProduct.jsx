import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../api/API";
import { removeFromCart, updateQuantityInCart } from "../local_storage/LocalStorage";
export default function CheckoutProduct(props) {
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState(null);
    const [inputQuantity, setInputQuantity] = useState(0);
    useEffect(() => {
        getProduct(props.productId, setProductInfo)
        setInputQuantity(props.quantity)
    }, [])


    function handleRemoveItem(e) {
        removeFromCart(props.productId, props.setCartInfo)
    }

    function handleUpdateQuantity(e) {
        updateQuantityInCart(props.productId, inputQuantity, props.setCartInfo)
    }

    function handleQuantityInput(e) {
        setInputQuantity(e.target.value)
    }

    return (
        <>
            {productInfo ? <>
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
                    <p>Quantity:{props.quantity}</p>
                    <>
                    </>
                </div>
            </> : <></>}
        </>
    );
}
