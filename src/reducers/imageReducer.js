const defaultState = {
  url: null,
  name: null,
  description: null,
}

export function imageReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_IMAGE':
      return {...action.image};
    default:
      return state;
  }
}
