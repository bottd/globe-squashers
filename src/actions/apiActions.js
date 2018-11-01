export const setPage = page => ({
  type: 'SET_PAGE',
  page,
});

export const changeEndpoint = endpoint => ({
  type: 'CHANGE_ENDPOINT',
  endpoint,
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  loading: bool,
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message,
});
