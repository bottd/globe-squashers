import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../../thunks/fetchImages';
import './App.css';

export function App({images}) {
  const [state, setState] = useState('hi');
  useEffect(() => {
    if(!images.length){
      console.log('o SHIT!');
      fetchImages();
    }
  });
  const toggle = () => {
    setState('hello');
  };
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={toggle}>Button</button>
    </div>
  );
}

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(fetchImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
