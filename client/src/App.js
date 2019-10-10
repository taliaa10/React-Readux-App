import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import './css/App.css';
import './css/main.css';
import Products from './components/Products';
import Filter from './components/Filter';
import { store } from './store';
import base from './base';

// function App() {
class App extends Component {
  componentDidMount() {
    this.ref = base.syncState(`test/products`, {
      context: this,
      state: 'products'
    });
    console.log(this.ref);
  }
  render() {
    return (
      <Provider store={store}>
        <div className="shopping-container">
          <div className="gallery">
            <figure className="gallery__item">
              <img
                src="img/hotel-1.jpg"
                alt="hotel 1"
                className="gallery__photo"
              />
            </figure>
            <figure className="gallery__item">
              <img
                src="img/hotel-2.jpg"
                alt="hotel 2"
                className="gallery__photo"
              />
            </figure>
            <figure className="gallery__item">
              <img
                src="img/hotel-3.jpg"
                alt="hotel 3"
                className="gallery__photo"
              />
            </figure>
          </div>
          <Filter />
          <hr />
          <Products />
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.products.filteredProducts,
    cartItems: state.cart.items
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
