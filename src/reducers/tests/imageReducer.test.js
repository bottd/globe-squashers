import {imageReducer} from '../imageReducer';

describe('imageReducer', () => {
  const defaultState = {
    url: null,
    name: null,
    description: null,
  }

  it('Should default to returning state', () => {
   const result = imageReducer(defaultState, {});
    expect(result).toEqual(defaultState);
  });

  it('Should have a default state', () => {
    const result = imageReducer(undefined, {});
    expect(result).toEqual(defaultState);
  });

  it('Should set given image data on SET_IMAGE', () => {
    const mockImage = {
      url: 'imageurl.com',
      name: 'image',
      description: 'exciting image'
    }

    const mockAction = {
      type: 'SET_IMAGE',
      image: mockImage,
    };
    const result = imageReducer(null, mockAction);
    expect(result).toEqual(mockImage);
  });
});
