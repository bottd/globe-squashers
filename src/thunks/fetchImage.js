import {isLoading, hasErrored} from '../actions/apiActions';
import {setImage} from '../actions/imagesActions';

export const fetchImage = id => {
  return async dispatch => {
    dispatch(isLoading(true));
    try {
      const response = await fetch(`http://hubblesite.org/api/v3/image/${id}`);
      const image = await response.json();
      const selectImage = image.map(file => file.file_url.includes('.jpg'));
      dispatch(setImage(selectImage[0]));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
    dispatch(isLoading(false));
  };
};
