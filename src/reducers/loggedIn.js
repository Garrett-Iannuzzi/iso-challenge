export const isLoggedIn = (state = null, action) => {
  switch(action.type) {
    case 'GET_LOGIN':
      return action.isLoggedIn
    default:
      return state
  }
}