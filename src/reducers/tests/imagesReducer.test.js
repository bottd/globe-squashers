import {imagesReducer} from '../imagesReducer';

describe('imagesReducer', () => {
  it('Should return a default state', () => {
    const expected = [];
    const result = imagesReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('Should set images when type SET_IMAGES', () => {
    const images = [1, 2, 3, 4, 5];
    const mockAction = {
      type: 'SET_IMAGES',
      images,
    };
    const result = imagesReducer(undefined, mockAction);
    expect(result).toEqual(images);
  });

  it('Should reset state when type RESET_IMAGES', () => {
    const images = [1, 2, 3, 4, 5];
    const mockAction = {
      type: 'RESET_IMAGES',
    };
    const result = imagesReducer(images, mockAction);
    expect(result).toEqual([]);
  });
});
