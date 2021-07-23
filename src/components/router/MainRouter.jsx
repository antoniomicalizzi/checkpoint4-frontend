import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
import Homepage from '../views/Homepage';
import Account from '../views/Account';
import Login from '../views/Login';
import MapPage from '../views/MapPage';

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/map" component={MapPage} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}
