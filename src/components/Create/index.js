import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fetchImages} from '../../thunks/fetchImages';
import {fetchImage} from '../../thunks/fetchImage';
import {connect} from 'react-redux';
import './Create.css';

export function Create(props) {
  const [isLoaded, setLoaded] = useState(false);
  const [imageID, setImageID] = useState(0);
  const [note, setNote] = useState('');
  const {fetchImages, fetchImage, images, image, page} = props;
  useEffect(() => {
    if (!isLoaded) {
      fetchImages(page);
      setLoaded(true);
    }
    if (!imageID && images.length) {
      const rand = Math.floor(Math.random() * images.length - 1) + 1;
      setImageID(images[rand].id);
      fetchImage(images[rand].id);
    }
  });

  function handleNote(e) {
    setNote(e.target.value);
  }

  return (
    <div className="Create">
      <form>
        <textarea
          className="note-input"
          value={note}
          onChange={handleNote}
          rows="5"
          placeholder="Write your note here"
        />
      </form>
      <img className="hubble-img" src={image.url} alt={image.name} />
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

Create.propTypes = {
  page: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
  fetchImages: PropTypes.func.isRequired,
  fetchImage: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
