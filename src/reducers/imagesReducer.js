const defaultState = [];
export function imagesReducer(state = [], action) {
  switch (action.type) {
    case 'SET_IMAGES':
      return action.images;
    case 'RESET_IMAGES':
      return defaultState;
    default:
      return defaultState;
  }
}
