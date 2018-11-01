import {setPage, changeEndpoint, isLoading, hasErrored} from '../apiActions';

describe('apiActions', () => {
  describe('setPage', () => {
    it('Should have a type of SET_PAGE', () => {
      const expected = {
        type: 'SET_PAGE',
        page: 1,
      };
      const result = setPage(1);
      expect(result).toEqual(expected);
    });
  });

  describe('changeEndpoint', () => {
    it('Should have a type of changeEndpoint', () => {
      const expected = {
        type: 'CHANGE_ENDPOINT',
        endpoint: 'videos',
      };
      const result = changeEndpoint('videos');
      expect(result).toEqual(expected);
    });
  });

  describe('isLoading', () => {
    it('Should have a type of isLoading', () => {
      const expected = {
        type: 'IS_LOADING',
        loading: true,
      };
      const result = isLoading(true);
      expect(result).toEqual(expected);
    });
  });

  describe('hasErrored', () => {
    it('Should have a type of hasErrored', () => {
      const expected = {
        type: 'HAS_ERRORED',
        message: 'Error message',
      };
      const result = hasErrored('Error message');
      expect(result).toEqual(expected);
    });
  });
});
