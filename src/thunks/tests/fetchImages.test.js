import {isLoading, hasErrored} from '../../actions/apiActions';
import {insertImages} from '../../actions/imagesActions';
import {fetchImages} from '../fetchImages';

describe('fetchImages', () => {
  const mockImages = [
    {id: 1, name: 'image', news_name: 'a', collection: 'news'},
    {id: 2, name: 'image2', news_name: 'b', collection: 'news'},
    {id: 3, name: 'image3', news_name: 'c', collection: 'news'},
  ];
  let dispatch, thunk, json;
  beforeEach(() => {
    dispatch = jest.fn();
    thunk = fetchImages(1);
    json = jest.fn().mockImplementation(() => Promise.resolve(mockImages));
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json}));
  });

  it('should return a function', () => {
    expect(typeof thunk).toBe('function');
  });

  it('should dispatch isLoading', () => {
    thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with correct address', async () => {
    await thunk(dispatch);
    const url = `http://hubblesite.org/api/v3/images?page=1`;
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should call json on the respose from fetch', async () => {
    await thunk(dispatch);
    expect(json).toHaveBeenCalled();
  });

  it('Should dispatch cleaned images', async () => {
    const expected = [
      {id: 1, name: 'image'},
      {id: 2, name: 'image2'},
      {id: 3, name: 'image3'},
    ];
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(insertImages(expected));
  });
});
