import React, { createContext, useReducer, useContext } from "react";

import { cartReducer, initialState } from "../reducers/cartReducer";

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    updatePrice();
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    updatePrice();
  };

  const updatePrice = () => {
    dispatch({ type: "UPDATE_PRICE" });
  };

  const value = {
    totalPrice: state.totalPrice,
    products: state.products,
    addToCart,
    removeFromCart,
    updatePrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("use cart must be used in CartContext");
  }
  return context;
};
