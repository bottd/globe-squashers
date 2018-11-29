import {isLoading, hasErrored} from '../actions/apiActions';
import {insertImages} from '../actions/imagesActions';

export const fetchImages = page => {
  return async dispatch => {
    dispatch(isLoading(true));
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/images?page=${page}`,
      );
      const images = await response.json();
      const cleanImages = images.map(image => ({
        id: image.id,
        name: image.name,
      }));
      dispatch(insertImages(cleanImages));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
    dispatch(isLoading(false));
  };
};
