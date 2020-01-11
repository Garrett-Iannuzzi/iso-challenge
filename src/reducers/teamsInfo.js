export const teamsInfo = (state = [], action) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return [ {id: 1, ...action.teamOne}, {id:2, ...action.teamTwo} ]
    default:
      return state
  }
}
