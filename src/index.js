import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Register from './Register';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={Login} />
   <Route path="/Register" component={Register} />
 </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
