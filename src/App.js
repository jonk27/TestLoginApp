import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './auth/login';
import './style/App.scss';

function App() {
  return (
    <Router basename={'/'} >
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
