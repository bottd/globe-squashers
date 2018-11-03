import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Nav from '../Nav';
import Home from '../Home';
import Browse from '../Browse';
import Create from '../Create';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
