import React, {useState, useEffect} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {fetchImages} from '../../thunks/fetchImages';
import {connect} from 'react-redux';
import './Create.css';

export function Create(props) {
  const [isLoaded, setLoaded] = useState(false);
  const [imageID, setImageID] = useState(0);
  const {fetchImages, images, page} = props;
  useEffect(() => {
    if (!isLoaded) {
      fetchImages(page);
      setLoaded(true);
    }
    if (!imageID && images.length) {
      const rand = Math.floor(Math.random() * images.length) + 1;
      setImageID(images[rand].id);
    }
  });

  return (
    <div className="Create">
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/share'>VIEW OTHERS</NavLink>
    </div>
  );
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
)(Create);
