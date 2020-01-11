export const statsInfo = (state=[], action) => {
  switch(action.type) {
    case 'GET_STATS':
      return [ ...action.stats ]
    default:
      return state
  }
}