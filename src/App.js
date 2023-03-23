import React from "react";
import { CartProvider } from "./context/CartContext";

import Index from "./routes";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Index />
      </div>
    </CartProvider>
  );
};

export default App;
