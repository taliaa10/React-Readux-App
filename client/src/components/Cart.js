import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../util';
import { removeFromCart } from '../actions/cartActions';

// class Cart extends Component {
function Cart(props) {
  console.log(props);
  // render() {
  const { cartItems } = props;
  return (
    <div>
      {cartItems.length === 0 ? (
        'Basket is empty'
      ) : (
        <div> You have {cartItems.length} products in your cart. </div>
      )}
      {cartItems.length > 0 && (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <b>{item.title}</b> x {item.count} ={' '}
                {formatPrice(item.price * item.count)}
                <button
                  onClick={e => props.removeFromCart(props.cartItems, item)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          Total:{' '}
          {formatPrice(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
          <br />
          <button
            className="checkout"
            onClick={() => alert('Implementing Checkout')}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
// }

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (items, product) => dispatch(removeFromCart(items, product))
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    cartItems: state.cart.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
