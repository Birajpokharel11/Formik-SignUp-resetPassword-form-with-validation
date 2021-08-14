import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
const Routes = () => {
  return (
    <Switch>
      <Route component={Signup} exact path="/" />
      <Route component={Login} exact path="/login" />
    </Switch>
  );
};

export default Routes;
