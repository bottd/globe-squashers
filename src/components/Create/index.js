import React, {useState, useEffect} from 'react';
import {fetchImages} from '../../thunks/fetchImages';
import {fetchImage} from '../../thunks/fetchImage';
import {connect} from 'react-redux';
import './Create.css';

export function Create(props) {
  const [isLoaded, setLoaded] = useState(false);
  const [imageID, setImageID] = useState(0);
  const {fetchImages, fetchImage, images, image, page} = props;
  useEffect(() => {
    if (!isLoaded) {
      fetchImages(page);
      setLoaded(true);
    }
    if (!imageID && images.length) {
      const rand = Math.floor(Math.random() * images.length) + 1;
      setImageID(images[rand].id);
      fetchImage(images[rand].id);
    }
  });

  return (
    <div className="Create">
      {image ? <img src={image}/> : <div>Loading</div>}
    </div>
  );
}

export const mapStateToProps = state => ({
  page: state.API.page,
  images: state.images,
  image: state.image,
});

export const mapDispatchToProps = dispatch => ({
  fetchImages: page => dispatch(fetchImages(page)),
  fetchImage: id => dispatch(fetchImage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
