import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Signup from './components/Signup';
const Routes = () => {
  return (
    <Switch>
      <Route component={Signup} exact path="/" />
    </Switch>
  );
};

export default Routes;
