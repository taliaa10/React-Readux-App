import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../util';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import base from '../base';

// function Products(props) {
class Products extends React.Component {
  // const [products, setProducts] = useState({});
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.ref = base.syncState(`test/products`, {
      context: this,
      state: 'products'
    });
    console.log(this.ref);
  }

  // useEffect(() => {
  //   props.fetchProducts();
  // }, []);

  render() {
    const productItems = this.props.products.map(product => (
      <div className="product" key={product.id}>
        <img
          className="product-image"
          src={`/products/${product.sku}_2.jpg`}
          alt={product.title}
        />
        <p>{product.title}</p>
        <b>{formatPrice(product.price)}</b>
        <button
          onClick={() => this.props.addToCart(this.props.cartItems, product)}
        >
          Add To Cart
        </button>
      </div>
    ));
    return (
      <div className="product-component">
        <div className="products-container">{productItems}</div>
      </div>
    );
  }
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
