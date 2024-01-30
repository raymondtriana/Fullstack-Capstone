import { json } from "react-router";
import { hasItem, getObject, storeObject } from "../local_storage/LocalStorage";
const BASE_URL = "https://fakestoreapi.com/";

/*
PRODUCTS
*/
export const getAllProducts = async function (setter) {
  try {
    const response = await fetch(BASE_URL + "products");
    const result = await response.json();
    setter(result);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getProduct = async function (id, setter) {
  try {
    const response = await fetch(BASE_URL + "products/" + id);
    const result = await response.json();
    setter(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/*
CART
 */

export const getCart = async function (id, setter) {
  try {
    if ((await hasItem("cart")) == true) {
      let cart = await getObject("cart");
      setter(cart);
      return cart;
    }
    const response = await fetch(BASE_URL + "carts/" + id);
    const result = await response.json();
    setter(result);
    await storeObject("cart", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addToCart = async function (id, date, product) {
  let cart = await getObject("cart");
  for (let i in cart.products) {
    if (cart.products[i].productId == id) {
      cart.products[i].quantity += 1;
      await storeObject("cart", cart);
      return;
    }
  }
  cart.products.push({ productId: product.id, quantity: 1 });
  await storeObject("cart", cart);
};

/*
ACCOUNT
 */

export const login = async function (data) {
  try {
    const response = await fetch(BASE_URL + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
    });
    const result = await response.json();
    console.log(result);
    localStorage.setItem("loggedIn", true);
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const logout = async function () {
  try {
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const signup = async function (credentials, setToken) {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: credentials.firstname,
          lastname: credentials.lastname,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getUser = async function (setAccountInfo) {
  const response = await fetch("https://fakestoreapi.com/users/1");
  const result = await response.json();
  console.log(result);
  setAccountInfo(result);
};
