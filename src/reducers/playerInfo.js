export const playerInfo = (state=[], action) => {
  switch(action.type) {
    case 'GET_PLAYERS':
      return [ ...action.playerInfo ]
    default:
      return state
  }
}