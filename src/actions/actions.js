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