import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          {/* <img src="img/user.jpg" alt="" className="user-sidenav__user-photo" /> */}
          <li className="side-nav__item side-nav__item--active">
            <NavLink to="/" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="img/sprite.svg#icon-home"></use>
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to="/flight" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="img/sprite.svg#icon-aircraft-take-off"></use>
              </svg>
              <span>Flight</span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to="/car-rental" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="img/sprite.svg#icon-key"></use>
              </svg>
              <span>Car Rental</span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to="products" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="img/sprite.svg#icon-map"></use>
              </svg>
              <span>Tours</span>
            </NavLink>
          </li>
        </ul>
        <div className="legal">
          &copy; 2019 Travelista. All rights reserved.
        </div>
      </nav>
    );
  }
}

export default Nav;
