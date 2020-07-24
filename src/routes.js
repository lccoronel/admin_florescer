import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import User from './pages/User';
import Community from './pages/Community';
import Search from './pages/Search';
import Partner from './pages/Partner';
import Recovery from './pages/Recovery';
import NewPassword from './pages/NewPassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/community" component={Community} />
        <Route path="/search" component={Search} />
        <Route path="/partner" component={Partner} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/password/:email" component={NewPassword} />
      </Switch>
    </BrowserRouter>
  );
}
