const defaultState = {
  id: null,
  loggedIn: false
}

export function userReducer(state = {}, action) {
  switch(action.type) {
    case 'LOG_IN':
      return {id: action.id, loggedIn: true}
    case 'LOG_OUT':
      return defaultState;
    default:
      return defaultState;
  }
}
