import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from '../Search';
import Description from '../Description';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path='/:mediaType/:id'>
        {({ match, location }) => (
          <Description
            media={location.query && location.query.media}
            id={match.params.id}
            mediaType={match.params.mediaType} />
        )}
      </Route>
    </Switch>
  </BrowserRouter>
);


export default App;