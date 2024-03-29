import "./Login.css"
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router";
import { login } from "../api/API";
export default function Login(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('loggedIn') == "true") navigate("/account");
  }, [props.token]);

  function handleSubmit(e) {
    const form = e.target;
    const data = new FormData(form);
    try {
      //log into account
      console.log(data);
      const token = login(data);
      props.setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="body">
        <h1 className="loginHeader">LOGIN</h1>
        <div className="loginFormDiv">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <label htmlFor="username">
              User:
              <input
                type="text"
                name="username"
                id=""
                required={true}
                value={"johnd"}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                id=""
                required={true}
                value={"m38rmF$"}
              />
            </label>
            <input type="submit" value="Log In" onClick={(e) => { localStorage.setItem('loggedIn', true) }} />
            <button
              onClick={(e) => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </form>

        </div>

      </div>
    </>
  );
}
