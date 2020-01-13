export const teamsInfo = (state = [], action) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return [{ id: 1, ...action.teamOne }, { id:2, ...action.teamTwo }]
    case 'SELECT_PLAYER':
      const [teamOne, teamTwo] = state;
      if(action.team === 'teamOne') {
        teamOne.players[action.index] = action.player
      } else {
        teamTwo.players[action.index] = action.player
      }
      return [ teamOne, teamTwo ]
    default:
      return state
  }
}