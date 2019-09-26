import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './css/App.css';
import './css/main.css';
import Products from './components/Products';
import products from './products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import { store } from './store';

// function App() {
class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('cartItems')) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems'))
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="shopping-container">
          <Filter />
          <hr />
          <Products />
          <Cart />
        </div>
      </Provider>
    );
  }
}

export default App;
