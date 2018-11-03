import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Nav from '../Nav';
import Home from '../Home';
import Create from '../Create';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
