export const getTeamsInfo = (teamOne, teamTwo) => ({
  type: 'GET_TEAMS',
  teamOne,
  teamTwo
});

export const getPlayerInfo = (playerInfo) => ({
  type: 'GET_PLAYERS',
  playerInfo
});

export const getStatsInfo = (stats) => ({
  type: 'GET_STATS',
  stats
});

export const isLoggedIn = (isLoggedIn) => ({
  type: 'GET_LOGIN',
  isLoggedIn: isLoggedIn
})

export const selectPlayer = (player, team, index) => ({
  type: 'SELECT_PLAYER',
  player,
  team,
  index
})