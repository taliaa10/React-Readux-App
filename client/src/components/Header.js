import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  handleSearch = e => {
    e.preventDefault();
    e.currentTarget.blur();
  };

  render() {
    return (
      <header className="header">
        <NavLink to="/" className="side-nav__link">
          <img src="img/logo.png" alt="travelista logo" className="logo" />
        </NavLink>

        <form className="search" onSubmit={this.handleSearch}>
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />
          <button className="search__button" type="submit">
            <svg className="search__icon">
              <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-bookmark"></use>
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-chat"></use>
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img src="img/user.jpg" alt="" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Taliaa</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
