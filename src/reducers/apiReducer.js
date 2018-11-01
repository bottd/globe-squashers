const defaultState = {
  page: 1,
  endpoint: 'images',
};

export function apiReducer(state, action) {
  switch (action.type) {
    case 'PAGE_FORWARD':
      return {...state, page: state.page + 1};
    case 'PAGE_BACK':
      return {...state, page: state.page - 1};
    case 'CHANGE_ENDPOINT':
      return {...state, endpoint: action.endpoint}
    default:
      return defaultState;
  }
}
