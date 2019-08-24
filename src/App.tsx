import React from 'react';
import AdminLayout from './components/layout/AdminLayout';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

const App: React.SFC = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" render={props => {return <AdminLayout {...props} />}} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
