import React from 'react';
import {Switch, Route, withRouter} from 'react-router';
import Browse from '../../containers/Browse';
import Create from '../../containers/Create';
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
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
