import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router';
import {fetchImages} from '../../thunks/fetchImages';
import Home from '../Home';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route to="/" component={Home} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
