import { useReducer } from "react";
import { CartContext } from "./store/cart-context";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.product];
  }
}

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  const value = {
    cartState,
    cartDispatch,
  };

  console.log(cartState);

  return (
    <CartContext.Provider value={value}>
      <Header />
      <ProductList />
    </CartContext.Provider>
  );
}

export default App;
