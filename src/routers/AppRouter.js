import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Help from '../components/Help';
import CreateBoard from '../components/CreateBoard';
import ProjectBoard from '../components/ProjectBoard';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/help" component={Help} />
          <PrivateRoute path="/create" component={CreateBoard} />
          <PrivateRoute
            path="/project/:id"
            component={ProjectBoard}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
