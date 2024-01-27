import "./Account.css"
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../api/API";
import Cart from "../cart/Cart";
import Navbar from "../navbar/Navbar";
export default function Account(props) {
  const [accountInfo, setAccountInfo] = useState(null);
  useEffect(() => {
    getUser(setAccountInfo);
  }, []);

  return (
    <>
      <Navbar token={localStorage.getItem('loggedIn')} setToken={props.setToken} />
      <h1 className="accountHeader">ACCOUNT</h1>
      <hr />
      {accountInfo ? (
        <div >
          <div className="accountInfo">
            <p id="accountInfo">account info:</p>
            <p>{accountInfo.email}</p>
            <p>{accountInfo.phone}</p>
            <p>{accountInfo.username}</p>
            <p>{accountInfo.name.firstname}</p>
            <p>{accountInfo.name.lastname}</p>
          </div>
          <hr />
        </div>
      ) : (
        <></>
      )}
      <Cart></Cart>
    </>
  );
}
