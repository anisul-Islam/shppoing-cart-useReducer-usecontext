export const initialState = {
  totalPrice: 0,
  products: [],
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      const filteredProducts = state.products.filter(
        (product) => product.id !== payload.id
      );
      return {
        ...state,
        products: filteredProducts,
      };
    case "UPDATE_PRICE":
      let sum = 0;
      state.products.map((product) => (sum += product.price));
      console.log("UPDATE_PRICE", sum);
      return {
        ...state,
        totalPrice: sum,
      };

    default:
      throw new Error(`No case for type ${type}`);
  }
};
