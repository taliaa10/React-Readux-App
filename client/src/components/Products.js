import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../util';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

function Products(props) {
  console.log(props);
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const productItems = props.products.map(product => (
    <div className="product" key={product.id}>
      <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
      <p>{product.title}</p>
      <b>{formatPrice(product.price)}</b>
      <button onClick={() => props.addToCart(props.cartItems, product)}>
        Add To Cart
      </button>
    </div>
  ));

  return <div>{productItems}</div>;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: (items, product) => dispatch(addToCart(items, product))
  };
};

const mapStateToProps = state => {
  return {
    products: state.products.filteredProducts,
    cartItems: state.cart.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
