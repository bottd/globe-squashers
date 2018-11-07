const defaultState = {
  page: 1,
  loading: false,
  error: null,
};

export function apiReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {...state, page: action.page};
    case 'IS_LOADING':
      return {...state, loading: action.loading};
    case 'HAS_ERRORED':
      return {...state, error: action.message};
    default:
      return state;
  }
}
