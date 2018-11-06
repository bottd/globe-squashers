import React, {Component} from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid/v1';
import {addProof} from '../../actions/proofsActions';
import {setPage} from '../../actions/apiActions';
import {resetImages} from '../../actions/imagesActions';
import {fetchImages} from '../../thunks/fetchImages';
import {fetchImage} from '../../thunks/fetchImage';
import {connect} from 'react-redux';
import './Create.css';

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      currentImage: 0,
      note: '',
    };
  }

  componentDidMount() {
    const {fetchImages, page} = this.props;
    fetchImages(page);
    this.setState({isLoaded: true});
  }

  componentDidUpdate() {
    const {isLoaded} = this.state;
    const {fetchImages, fetchImage, page, image, images} = this.props;
    if (!isLoaded) {
      fetchImages(page);
      this.setState({isLoaded: true});
    }
    if (!image.url && images.length) {
      fetchImage(images[this.state.currentImage].id);
    }
  }

  cycleImage(num) {
    const {images, fetchImage} = this.props;
    const newIndex = this.state.currentImage + num;
    if (images[newIndex]) {
      fetchImage(images[newIndex].id);
      this.setState({currentImage: newIndex});
    }
    if (!images[newIndex + 1]) {
      setPage(this.props.page + 1);
      resetImages();
      this.setState({
        loaded: false,
        currentImage: 0,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {note} = this.state;
    const {image, addProof} = this.props;
    const newProof = {
      note,
      title: image.name,
      url: image.url,
      id: v1(),
    };
    addProof(newProof);
    this.setState({note: ''});
  }

  handleNote = (e) => {
    this.setState({
      note: e.target.value,
    });
  }

  render() {
    const {note} = this.state;
    const {image} = this.props;
    return (
      <div className="Create">
        <form onSubmit={this.handleSubmit}>
          <h3>{image.name}</h3>
          <textarea
            className="note-input"
            value={note}
            onChange={this.handleNote}
            rows="5"
            placeholder="Write your note here"
          />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <div
          className="hubble-img"
          style={{backgroundImage: `url(${image.url})`}}>
          <button className="backward-btn" onClick={() => this.cycleImage(-1)}>
            <i className="fas fa-chevron-left" />
          </button>
          <button className="forward-btn" onClick={() => this.cycleImage(1)}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
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
