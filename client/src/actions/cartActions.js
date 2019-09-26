import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (items, product) => {
  return dispatch => {
    const cartItems = [...items];

    let productAlreadyInCArt = false;

    cartItems.forEach(item => {
      if (item.id === product.id) {
        productAlreadyInCArt = true;
        item.count++;
      }
    });
    if (!productAlreadyInCArt) {
      cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    dispatch({
      type: ADD_TO_CART,
      payload: {
        cartItems: cartItems
      }
    });
  };
};

export const removeFromCart = (items, product) => {
  return dispatch => {
    const cartItems = items.filter(el => el.id !== product.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  };
};
