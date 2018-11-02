import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router';
import {fetchImages} from '../../thunks/fetchImages';
import Home from '../Home';
import './App.css';

export function App({fetchImages, images, page}) {
  const [initialLoad, setInitialLoad] = useState(false);
  useEffect(() => {
    if (!initialLoad) {
      fetchImages(page);
      setInitialLoad(true);
    }
  });
  return (
    <div className="App">
      <Switch>
        <Route to='/' component={Home}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  page: state.API.page,
  images: state.images,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: page => dispatch(fetchImages(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
