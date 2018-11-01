import { userReducer } from '../userReducer';

describe('userReducer', () => {
  it('Should have a default state', () => {
    const expected = {
      id: null,
      loggedIn: false
    }
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should set user id and loggedIn on type LOG_IN', () => {
    const mockAction = {
      type: 'LOG_IN',
      id: 1
    }
    const expected = {
      id: 1,
      loggedIn: true
    }
    const result = userReducer({}, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should set id to null and loggedIn to false on type LOG_OUT', () => {
    const mockState = {
      id: 1,
      loggedIn: true
    }
    const mockAction = {
      type: 'LOG_OUT'
    }
    const expected = {
      id: null,
      loggedIn: false
    }
    const result = userReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
