import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  filterProductsBySize,
  sortProductsByPrice
} from '../actions/productActions';

// class Filter extends Component {
function Filter(props) {
  // useEffect(() => {
  //   props.filterProductsBySize();
  // }, []);
  // componentDidMount() {
  //   console.log(this.props);
  // }

  // render() {
  return (
    <div className="filter-row">
      <div>
        {/* {this.props.count > 1
            ? this.props.count`products found.`
            : this.props.count`product found.`} */}
        {props.filteredProducts.length} products found.
        <label htmlFor="">
          Order by
          <select
            name=""
            id=""
            value={props.sort}
            onChange={e =>
              props.sortProductsByPrice(e.target.value, props.filteredProducts)
            }
            // onChange={props.handleChangeSort}
          >
            <option value="">Select</option>
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
          </select>
        </label>
      </div>
      <div className="">
        <label htmlFor="">
          Filter Size
          <select
            name=""
            id=""
            value={props.size}
            onChange={
              e => props.filterProductsBySize(e.target.value, props.products)
              // onChange={e =>
              //   props.filterProductsBySize(props.products, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="x">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </label>
      </div>
    </div>
  );
  // }
}

const mapDispatchToProps = dispatch => {
  return {
    filterProductsBySize: (size, products) =>
      dispatch(filterProductsBySize(size, products)),
    sortProductsByPrice: (sort, items) =>
      dispatch(sortProductsByPrice(sort, items))
  };
};

const mapStateToProps = state => {
  return {
    products: state.products.items,
    filteredProducts: state.products.filteredProducts,
    size: state.products.size,
    sort: state.products.sort
  };
};

// const mapStateToProps = state => {
//   return {
//     products: state.products.filteredProducts,
//     size: state.products.size
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
