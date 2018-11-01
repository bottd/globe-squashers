const defaultState = [];
export function imagesReducer(state = [], action) {
  switch (action.type) {
    case 'INSERT_IMAGES':
      return [...action.images, ...state];
    case 'RESET_IMAGES':
      return defaultState;
    default:
      return defaultState;
  }
}
