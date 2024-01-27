import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (!props.token) {
      setLoggedIn(false);
      return;
    }
    setLoggedIn(true);
  }, [props.token]);

  return (
    <div className="nav-div">
      <div className="nav-inner-div">
        <p className="nav-title">Navigations</p>
        {/* <Link to={"/"}>
          <button className="nav-button">Home</button>
        </Link> */}
        <button
          className="nav-button"
          onClick={(e) => {
            navigate("/");
          }}
        >
          Home
        </button>

        {loggedIn ? (
          <>
            <Link to={"/account"}>
              <button className="nav-button">{"account"}</button>
            </Link>
            <Link to={"/"}>
              <button
                className="nav-button"
                onClick={(e) => {
                  props.setToken(null);
                  localStorage.setItem('loggedIn',false)
                  setLoggedIn(false)
                }}
              >
                {"Log Out"}
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="nav-button">{"Log In"}</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
