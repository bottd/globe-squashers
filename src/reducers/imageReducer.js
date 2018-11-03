export function imageReducer(state = null, action) {
  switch (action.type) {
    case 'SET_IMAGE':
      return action.image || state;
    default:
      return state;
  }
}
