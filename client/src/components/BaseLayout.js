import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Nav />
          <main className="main-view">{this.props.children}</main>
        </div>
      </div>
    );
  }
}
