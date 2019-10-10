import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

// class Header extends Component {

function useHover() {
  const navCartRef = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    const ncr = navCartRef.current;
    ncr.addEventListener('mouseenter', enter);
    ncr.addEventListener('mouseleave', leave);
    return () => {
      ncr.removeEventListener('mouseenter', enter);
      ncr.removeEventListener('mouseleave', leave);
    };
  }, [navCartRef]);

  return [navCartRef, hovered];
}

function Header(props) {
  const [navCartRef, hovered] = useHover();

  const cartCount = props.cartItems
    .map(item => {
      return item.count;
    })
    .reduce((a, b) => a + b, 0);

  const handleSearch = e => {
    e.preventDefault();
    e.currentTarget.blur();
  };

  // render() {
  return (
    <header className="header">
      <NavLink to="/" className="side-nav__link">
        {/* <img src="img/logo.png" alt="travelista logo" className="logo" /> */}
        <h1 className="co-name">Re-Commerce</h1>
      </NavLink>

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          className="search__input"
          placeholder="Search products"
        />
        <button className="search__button" type="submit">
          <svg className="search__icon">
            <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div ref={navCartRef} className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-bookmark"></use>
          </svg>
          <span className="user-nav__notification">{cartCount}</span>
          {hovered && (
            <div className="nav-cart">
              {' '}
              <Cart />
            </div>
          )}
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-chat"></use>
          </svg>
          <span className="user-nav__notification">13</span>
          {/* <div className="nav-cart">
            <Cart />
          </div> */}
        </div>
        <div className="user-nav__user">
          <img src="img/user.jpg" alt="" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Taliaa</span>
        </div>
      </nav>
    </header>
  );
}
// }

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps)(Header);
