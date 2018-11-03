import {imageReducer} from '../imageReducer';

describe('imageReducer', () => {
  it('Should default to returning state', () => {
    const mockState = 'imageurl.com';
    const result = imageReducer(mockState, {});
    expect(result).toEqual(mockState);
  });

  it('Should have a default state', () => {
    const expected = null;
    const result = imageReducer(undefined, {})
    expect(result).toBe(expected);
  });

  it('Should set given image path on SET_IMAGE', () => {
    const expected = 'imageurl.com';
    const mockAction = {
      type: 'SET_IMAGE',
      image: 'imageurl.com'
    }
    const result = imageReducer(null, mockAction);
    expect(result).toBe(expected);
  });
});
