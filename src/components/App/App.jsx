import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from '../Search';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Search} />
    </Switch>
  </BrowserRouter>
);


export default App;