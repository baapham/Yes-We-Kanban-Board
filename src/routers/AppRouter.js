import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Help from '../components/Help';
import CreateBoard from '../components/CreateBoard';
import EditBoard from '../components/EditBoard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/help" component={Help} />
          <Route path="/create" component={CreateBoard} />
          <Route path="/edit/:id" component={EditBoard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
