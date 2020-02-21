import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Help from '../components/Help';
import CreateBoard from '../components/CreateBoard';
import EditBoard from '../components/EditBoard';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help" component={Help} />
          <Route path="/create" component={CreateBoard} />
          <Route path="/edit/:id" component={EditBoard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
