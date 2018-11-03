import {isLoading, hasErrored} from '../actions/apiActions';
import {setImage} from '../actions/imageActions';

export const fetchImage = id => {
  return async dispatch => {
    dispatch(isLoading(true));
    try {
      const response = await fetch(`http://hubblesite.org/api/v3/image/${id}`);
      const image = await response.json();
      const findUrl = image.image_files.find(file => file.file_url.includes('.png'));
      dispatch(setImage(findUrl.file_url));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
    dispatch(isLoading(false));
  };
};
