const defaultState = {
  page: 0,
  endpoint: 'images',
  loading: false,
  error: null,
};

export function apiReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {...state, page: action.page};
    case 'CHANGE_ENDPOINT':
      return {...state, endpoint: action.endpoint};
    case 'IS_LOADING':
      return {...state, loading: action.loading};
    case 'HAS_ERRORED':
      return {...state, error: action.message};
    default:
      return state;
  }
}
