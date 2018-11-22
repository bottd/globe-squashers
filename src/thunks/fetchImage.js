import {isLoading, hasErrored} from '../actions/apiActions';
import {setImage} from '../actions/imageActions';

export const fetchImage = id => {
  return async dispatch => {
    dispatch(isLoading(true));
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/image/${id}`);
      const image = await response.json();
      const findUrl = image.image_files.find(
        file =>
          file.file_url.includes('.png') || file.file_url.includes('.jpg'),
      );
      const cleanedImage = {
        url: findUrl.file_url,
        name: image.name,
        description: image.description,
      };
      dispatch(setImage(cleanedImage));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
    dispatch(isLoading(false));
  };
};
