import Navbar from "../navbar/Navbar";
import { signup } from "../api/API";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Register(props) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    const form = e.target;
    const data = new FormData(form);
    signup(data, props.setToken);
    navigate("/account");
  }

  return (
    <>
      <Navbar />
      <h1>REGISTER</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" id="" required={true} value={"test"} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" id="" required={true} value={"testLast"}/>
        </label>
        <label htmlFor="userName">
          User Name:
          <input type="text" name="userName" id="" required={true} value={"testUser"}/>
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="" required={true} value={"testEmail@email.com"}/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="" required={true} value={"test"}/>
        </label>
        <input type="submit" value="Create Account" />
      </form>
    </>
  );
}
