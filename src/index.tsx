import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AdminLayout from './components/layout/AdminLayout';
const hist = createBrowserHistory();

// import App from './App';


ReactDOM.render(<Router history={hist}>
    <Switch>
      <Route render={props => {return <AdminLayout {...props} />}} />
      <Redirect to="/" />
    </Switch>
  </Router> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
