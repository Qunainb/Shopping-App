import { useReducer } from "react";
import { CartContext } from "./store/cart-context";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const existingItems = state.find((item) => item.id === action.product.id);

    if (existingItems) {
      return state.map((item) =>
        item.id === action.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...state, { ...action.product, quantity: 1 }];
    }
  } else if (action.type === "INCREASE_QUANTITY") {
    return state.map((item) =>
      item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else if (action.type === "DECREASE_QUANTITY") {
    return state
      .map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.length > 0);
  } else if (action.type === "REMOVE") {
    return state.filter((item) => item.id !== action.id);
  } else {
    return state;
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
      <Cart />
    </CartContext.Provider>
  );
}

export default App;
