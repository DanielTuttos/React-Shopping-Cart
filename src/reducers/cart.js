export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === payload.id
      );
      if (productInCartIndex >= 0) {
        // una forma seria usando structure clone
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        updateLocalStorage(newCart);
        return newCart;
      }
      const newState = [...state, { ...payload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = payload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(cartInitialState);
      return cartInitialState;
    }

    // default:
    //   break;
  }
  return state;
};
