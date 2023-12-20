import { createContext, useReducer } from 'react';
import {
  CART_ACTION_TYPES,
  cartInitialState,
  cartReducer,
} from '../reducers/cart';

// Crear el contexto
export const CartContext = createContext();

const useCartReducers = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
    });
  };
  return { state, addCart, removeFromCart, clearCart };
};

export function CartProvider({ children }) {
  const { state, addCart, removeFromCart, clearCart } = useCartReducers();

  return (
    <CartContext.Provider
      value={{ cart: state, addCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
