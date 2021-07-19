import React, { Component } from "react";

export default React.createContext({
  name: "",
  cart: [],
  addProdToCart: (product) => {},
});
