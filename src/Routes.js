import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Password from './components/ResetPassword';

const Routes = () => {
  return (
    <Switch>
      <Route component={Signup} exact path="/" />
      <Route component={Login} exact path="/login" />
      <Route component={Password} exact path="/Password" />
    </Switch>
  );
};

export default Routes;
