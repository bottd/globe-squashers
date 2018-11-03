import {setImage} from '../imageActions';

describe('imageActions', () => {
  describe('setImage', () => {
    it('Should have a type of SET_IMAGE', () => {
      const mockImage = {
        url: 'image.com',
        name: 'image',
        description: 'exciting image',
      }

      const expected = {
        type: 'SET_IMAGE',
        image: mockImage
      }
      const result = setImage(mockImage);
      expect(result).toEqual(expected);
    });
  });
});
