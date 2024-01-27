import { useState } from "react";
import { useEffect } from "react";
import { getCart } from "../api/API";
import ProductCart from "../productCart/productCart";
import CheckoutProduct from "./CheckoutProduct";
import { getProduct } from "../api/API";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
export default function Checkout(props) {
    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        getCart(1, setCart);
    }, []);


    useEffect(() => {
        if (cart == null)
            return
        addToTotal()
    }, [cart])


    function handleFormSubmit(e) {
        e.preventDefault()
    }

    async function addToTotal() {
        let sum = 0
        setTotal(0)
        for (let index in cart.products) {
            let product = cart.products[index]
            let item = await getProduct(product.productId, () => { })
            sum += item.price * product.quantity
        }
        setTotal(sum)
    }


    return (<>
        <Navbar token={localStorage.getItem('loggedIn')}></Navbar>
        <h1>CHECKOUT</h1>
        <form action="" onSubmit={(e) => { handleFormSubmit(e) }}>
            <label htmlFor="">Billing Information</label>
            <br />
            <label htmlFor="">Full Name</label>
            <input type="text" name="" id="" value={"Mark Antony"} onChange={(e) => { }} />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" value={"RomanRebel0332@gmail.com"} onChange={(e) => { }} />
            <br />
            <label htmlFor="">Billing Address</label>
            <input type="text" name="" id="" value={"Al Azaritah WA Ash Shatebi, Bab Sharqi, Alexandria Governorate 21526, Egypt"} onChange={(e) => { }} />
            <br />
            <label htmlFor="">Shipping Address</label>
            <input type="text" name="" id="" value={"Al Azaritah WA Ash Shatebi, Bab Sharqi, Alexandria Governorate 21526, Egypt"} onChange={(e) => { }} />
            <br />
            <label htmlFor="">Credit Card Number</label>
            <input type="number" name="" id="" value={1234123412341234} onChange={(e) => { }} />
            <br />
            <label htmlFor="">Expiration Date</label>
            <input type="date" name="" id="" value={"2030-08-01"} onChange={(e) => { }} />
            <br />
            <label htmlFor="">Sec Code</label>
            <input type="number" name="" id="" value={"206"} onChange={(e) => { }} />
            <br />
            <label htmlFor="">TOTAL: ${total}</label>
            <br />
            <Link to={"/thankyou"}>
                <button className="nav-button" onClick={(e)=>{localStorage.removeItem('cart');localStorage.setItem('loggedIn',false)}}>{"Checkout"}</button>
            </Link>
        </form>
        <h2>ITEMS IN CART</h2>
        {cart ? (
            <>
                {cart.products.map((value, index) => {
                    return (
                        <CheckoutProduct
                            key={value.productId}
                            productId={value.productId}
                            quantity={value.quantity}
                            addToTotal={addToTotal}
                        />
                    );
                })}
            </>
        ) : (
            <></>
        )}
    </>);
}