import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../util';
import { removeFromCart } from '../actions/cartActions';
import StripeCheckout from 'react-stripe-checkout';

// class Cart extends Component {
function Cart(props) {
  console.log(props);
  // render() {

  useEffect(() => {}, []);

  // componentDidMount(props) {

  // }
  const { cartItems } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);

  const cartCount = props.cartItems
    .map(item => {
      return item.count;
    })
    .reduce((a, b) => a + b, 0);

  const handleToken = (token, address) => {
    console.log(token, address);
  };
  return (
    <div className='cart'>
      {cartItems.length === 0 ? (
        'Your cart is empty'
      ) : (
        <div> You have {cartCount} products in your cart. </div>
      )}
      {cartItems.length > 0 && (
        <div>
          <ul className="nav-cart-list">
            {cartItems.map(item => (
              <li className="nav-cart-item" key={item.id}>
                {/* <div className="item-details"> */}
                <b>{item.title}</b> x {item.count} ={' '}
                {formatPrice(item.price * item.count)}
                {/* </div> */}
                <button
                  className="remove-from-cart"
                  onClick={e => props.removeFromCart(props.cartItems, item)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          Total: {formatPrice(totalPrice)}
          <br />
          <div className="checkout-btn-section">
            <StripeCheckout
              stripeKey="pk_test_kVb5op39MbcSfQry3pvr9Zci00Jy2IAS1j"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={parseInt(totalPrice)}
            />
          </div>
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
