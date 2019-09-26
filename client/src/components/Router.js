import React from 'react';
import App from '../App';
import BaseLayout from './BaseLayout';
import Flight from './Flight';
import CarRental from './CarRental';
import Products from './Products';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
  // <Provider>
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/flight" component={Flight} />
        <Route path="/car-rental" component={CarRental} />
        <Route path="/products" component={Products} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  // </Provider>
);

export default Router;
