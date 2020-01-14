export const statsInfoTwo = (state=[], action) => {
  switch(action.type) {
    case 'GET_STATS_TWO':
      return [ ...action.statsTwo ]
    default:
      return state
  }
} 