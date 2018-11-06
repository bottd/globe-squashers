import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Browse from '../Browse';
import Create from '../Create';
import Draw from '../Draw';
import Home from '../Home';
import Nav from '../Nav';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/draw" component={Draw} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
