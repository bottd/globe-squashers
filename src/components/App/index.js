import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router';
import {fetchImages} from '../../thunks/fetchImages';
import Home from '../Home';
import Create from '../Create';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchImages(); }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/create" component={Create} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  page: state.API.page,
  images: state.images,
});

export const mapDispatchToProps = dispatch => ({
  fetchImages: page => dispatch(fetchImages(page)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
