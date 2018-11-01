import {insertImages, resetImages} from '../imagesActions';

describe('imagesActions', () => {
  describe('insertImages', () => {
    it('Should have a type of INSERT_IMAGES and carry an array of images', () => {
      const images = [1, 2, 3, 4, 5];
      const expected = {
        type: 'INSERT_IMAGES',
        images,
      };
      const result = setImages(images);
      expect(result).toEqual(expected);
    });
  });
  describe('resetImages', () => {
    it('Should have a type of RESET_IMAGES', () => {
      const expected = {
        type: 'RESET_IMAGES',
      };
      const result = resetImages();
      expect(result).toEqual(expected);
    });
  });
});
