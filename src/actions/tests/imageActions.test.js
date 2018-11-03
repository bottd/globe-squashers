import {setImage} from '../imageActions';

describe('imageActions', () => {
  describe('setImage', () => {
    it('Should have a type of SET_IMAGE', () => {
      const image = 'url.com';
      const expected = {
        type: 'SET_IMAGE',
        image
      }
      const result = setImage(image);
      expect(result).toEqual(expected);
    });
  });
});
