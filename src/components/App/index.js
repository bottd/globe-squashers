import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Home from '../Home';
import Create from '../Create';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
