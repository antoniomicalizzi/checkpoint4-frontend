import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from '../views/Account';
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import MapPage from '../views/MapPage';

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
