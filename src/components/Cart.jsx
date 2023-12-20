import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icons';
import './Cart.css';
import { useCart } from '../hooks/useCart';

function CartItem({ thumbnail, price, title, quantity, addCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addCart}>+</button>
      </footer>
    </li>
  );
}

export const Cart = () => {
  const cardCheckboxId = useId();
  const { cart, clearCart, addCart } = useCart();
  return (
    <>
      <label
        className="cart-button"
        htmlFor={cardCheckboxId}>
        <CartIcon />
        {cart.length}
      </label>
      <input
        id={cardCheckboxId}
        type="checkbox"
        hidden
      />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addCart={() => addCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
