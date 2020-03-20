export const statsInfoOne = (state=[], action) => {
  switch(action.type) {
    case 'GET_STATS_ONE':
      return [ ...action.statsOne ]
    default:
      return state
  }
} 