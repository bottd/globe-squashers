import React, {useState, useEffect} from 'react';
import {fetchImages} from '../../thunks/fetchImages';
import {connect} from 'react-redux';
import './Create.css';

export function Create({fetchImages, images, page}) {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded) {
      fetchImages(page);
      setLoaded(true);
    }
  });

  return <div className="Create">Create Page</div>;
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
