import {logIn, logOut} from '../userActions';

describe('userActions', () => {
  describe('logIn', () => {
    it('Should have type of LOG_IN and id of passed id', () => {
      const id = 1;
      const expected = {
        type: 'LOG_IN',
        id,
      };
      const result = logIn(id);
      expect(result).toEqual(expected);
    });
  });
  describe('logOut', () => {
    it('Should have a type of LOG_OUT', () => {
      const expected = {
        type: 'LOG_OUT',
      };
      const result = logOut();
      expect(result).toEqual(expected);
    });
  });
});
