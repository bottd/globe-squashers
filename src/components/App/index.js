import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../../thunks/fetchImages';
import './App.css';

export function App({fetchImages, images, page}) {
  const [initialLoad, setInitialLoad] = useState(false);
  useEffect(() => {
    if(!initialLoad) {
      fetchImages(page);
      setInitialLoad(true);
    }
  });
  return (
    <div className="App">
      <h1>Hey</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  page: state.API.page,
  images: state.images
});

const mapDispatchToProps = dispatch => ({
  fetchImages: (page) => dispatch(fetchImages(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
