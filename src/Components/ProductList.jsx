import { useContext } from "react";
import { CartContext } from "../store/cart-context";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 499 },
  { id: 3, name: "Camera", price: 799 },
  { id: 4, name: "Watch", price: 299 },
];

export default function ProductList() {
  const { cartDispatch } = useContext(CartContext);

  function handleAddToCart(product) {
    cartDispatch({ type: "ADD_TO_CART", product });
  }

  return (
    <div>
      <h2>My Products</h2>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </li>
      ))}
    </div>
  );
}
