const defaultState = {
  page: 1,
  endpoint: 'images',
  loading: false,
  error: null,
};

export function apiReducer(state, action) {
  switch (action.type) {
    case 'PAGE_FORWARD':
      return {...state, page: state.page + 1};
    case 'PAGE_BACK':
      return {...state, page: state.page - 1};
    case 'CHANGE_ENDPOINT':
      return {...state, endpoint: action.endpoint};
    case 'IS_LOADING':
      return {...state, loading: action.loading};
    case 'HAS_ERRORED':
      return {...state, error: action.message};
    default:
      return defaultState;
  }
}
