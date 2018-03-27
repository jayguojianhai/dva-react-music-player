import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import MainLayout from './layout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
