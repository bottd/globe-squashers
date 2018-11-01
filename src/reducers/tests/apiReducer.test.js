import {apiReducer} from '../apiReducer';

describe('apiRecuer', () => {
  const mockState = {
    page: 1,
    endpoint: 'images',
  };

  it('Should have a default state', () => {
    const expected = {
      page: 1,
      endpoint: 'images',
    };
    const result = apiReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should increment page on PAGE_FORWARD', () => {
    const expected = {
      page: 2,
      endpoint: 'images',
    };
    const mockAction = {
      type: 'PAGE_FORWARD',
    };
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should decrement page on PAGE_BACK', () => {
    const expected = {
      page: 0,
      endpoint: 'images',
    };
    const mockAction = {
      type: 'PAGE_BACK',
    };
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should change endpoint on CHANGE_ENDPOINT', () => {
    const expected = {
      page: 1,
      endpoint: 'videos',
    };
    const mockAction = {
      type: 'CHANGE_ENDPOINT',
      endpoint: 'videos',
    };
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
