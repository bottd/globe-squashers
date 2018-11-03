import {fetchImage} from '../fetchImage';
import {isLoading, hasErrored} from '../../actions/apiActions';
import {setImage} from '../../actions/imageActions';

describe('fetchImage', () => {
  let thunk, dispatch, json;
  beforeEach(() => {
    dispatch = jest.fn();
    thunk = fetchImage(1);
    json = jest.fn().mockImplementation(() =>
      Promise.resolve({
        name: 'image',
        description: 'exciting image',
        image_files: [
          {file_url: '.jpg'},
          {file_url: '.png'},
          {file_url: '.gif'},
        ],
      }),
    );
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json,
      }),
    );
  });

  it('Should return a function', () => {
    expect(typeof thunk).toBe('function');
  });

  it('Should dispatch isLoading', () => {
    thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('Should call fetch with the correct address', () => {
    const url = 'http://hubblesite.org/api/v3/image/1';
    thunk(dispatch);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should call json on the response from fetch', async () => {
    await thunk(dispatch);
    expect(json).toHaveBeenCalled();
  });

  it('Should call setImage with 1 image ending with a .png extension', async () => {
    const expected = {
      name: 'image',
      description: 'exciting image',
      url: '.png',
    };
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setImage(expected));
  });

  it('Should call dispatch with isLoading false when done', async () => {
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(isLoading(false));
  });
});
