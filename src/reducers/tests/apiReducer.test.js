import {apiReducer} from '../apiReducer';

describe('apiRecuer', () => {
  const mockState = {
    page: 1,
    endpoint: 'images',
    loading: false,
    error: null,
  };

  it('Should have a default state', () => {
    const expected = {
      page: 1,
      endpoint: 'images',
      loading: false,
      error: null,
    };
    const result = apiReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should increment page on PAGE_FORWARD', () => {
    const expected = {
      page: 2,
      endpoint: 'images',
      loading: false,
      error: null,
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
      loading: false,
      error: null,
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
      loading: false,
      error: null,
    };
    const mockAction = {
      type: 'CHANGE_ENDPOINT',
      endpoint: 'videos',
    };
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should set loading true on IS_LOADING', () => {
    const expected = {
      page: 1,
      endpoint: 'images',
      loading: true,
      error: null,
    };
    const mockAction = {
      type: 'IS_LOADING',
      loading: true,
    };
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should set loading false on IS_LOADING', () => {
    const expected = {
      page: 1,
      endpoint: 'images',
      loading: false,
      error: null,
    };
    const mockState = {
      page: 1,
      endpoint: 'images',
      loading: true,
      error: null,
    };
    const mockAction = {
      type: 'IS_LOADING',
      loading: false,
    };
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should set error message on HAS_ERRORED', () => {
    const expected = {
      page: 1,
      endpoint: 'images',
      loading: false,
      error: 'Error message',
    }
    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'Error message',
    }
    const result = apiReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
