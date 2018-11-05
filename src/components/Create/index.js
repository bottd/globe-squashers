import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid/v1';
import {addProof} from '../../actions/proofsActions';
import {setPage} from '../../actions/apiActions';
import {resetImages} from '../../actions/imagesActions';
import {fetchImages} from '../../thunks/fetchImages';
import {fetchImage} from '../../thunks/fetchImage';
import {connect} from 'react-redux';
import './Create.css';

export function Create(props) {
  const [isLoaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [note, setNote] = useState('');
  const {
    addProof,
    fetchImages,
    fetchImage,
    setPage,
    resetImages,
    images,
    image,
    page,
  } = props;

  useEffect(() => {
    if (!isLoaded) {
      fetchImages(page);
      setLoaded(true);
    }
    if (!image.url && images.length) {
      fetchImage(images[currentImage].id);
    }
  });

  function cycleImage(num) {
    const newIndex = currentImage + num;
    if (images[newIndex]) {
      setCurrentImage(currentImage + num);
      fetchImage(images[currentImage + num].id);
    }
    if (!images[newIndex + 1]) {
      setPage(page + 1);
      resetImages();
      setLoaded(false);
      setCurrentImage(0);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProof = {
      note,
      title: image.name,
      url: image.url,
      id: v1(),
    };
    addProof(newProof);
    setNote('');
  }

  function handleNote(e) {
    setNote(e.target.value);
  }

  return (
    <div className="Create">
      <form onSubmit={handleSubmit}>
        <textarea
          className="note-input"
          value={note}
          onChange={handleNote}
          rows="5"
          placeholder="Write your note here"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div
        className="hubble-img"
        style={{backgroundImage: `url(${image.url})`}}>
        <button className="backward-btn" onClick={() => cycleImage(-1)}>
          <i className="fas fa-chevron-left" />
        </button>
        <button className="forward-btn" onClick={() => cycleImage(1)}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  page: state.API.page,
  images: state.images,
  image: state.image,
});

export const mapDispatchToProps = dispatch => ({
  addProof: proof => dispatch(addProof(proof)),
  fetchImages: page => dispatch(fetchImages(page)),
  fetchImage: id => dispatch(fetchImage(id)),
  resetImages: () => dispatch(resetImages()),
  setPage: page => dispatch(setPage(page)),
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
