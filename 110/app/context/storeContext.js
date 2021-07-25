import React, { Component } from "react";
import ShoppingList from "./shoppingList";

export default React.createContext({
  name: "",
  cart: [],
  ShoppingList: [],
  addProdToCart: (product) => {},
  addToShoppingList: (text) => {},
});
