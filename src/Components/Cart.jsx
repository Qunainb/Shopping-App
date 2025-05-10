import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);

  function increaseQuantity(id) {
    cartDispatch({ type: "INCREASE_QUANTITY", id });
  }
  function decreaseQuantity(id) {
    cartDispatch({ type: "DECREASE_QUANTITY", id });
  }
  function removeFromCart(id) {
    cartDispatch({ type: "REMOVE", id });
  }

  return (
    <div>
      <h2>My Cart</h2>
      {cartState.length === 0 ? (
        <p>Cart Is Empty</p>
      ) : (
        <ul>
          {cartState.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
