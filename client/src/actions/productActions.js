import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE
} from './actionTypes';
import products from '../products';

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS, payload: products });
  };
};

export const filterProductsBySize = (size, products) => {
  return dispatch => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          // products
          size === ''
            ? products
            : products.filter(a => a.availableSizes.indexOf(size.toUpperCase()))
      }
    });
  };
};

export const sortProductsByPrice = (sort, items) => {
  const products = items.slice();
  if (sort !== '') {
    products.sort((a, b) =>
      sort === 'lowest'
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id < b.id ? 1 : -1));
  }

  return dispatch => {
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products
      }
    });
  };
};
