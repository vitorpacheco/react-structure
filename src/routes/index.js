import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
