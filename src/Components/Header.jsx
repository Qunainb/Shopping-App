import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Header() {
  const { cartState } = useContext(CartContext);

  return (
    <header>
      <h2>My Shop</h2>
      <p>Cart {cartState.length} items</p>
    </header>
  );
}
