export const getTeamsInfo = (teamOne, teamTwo) => ({
  type: 'GET_TEAMS',
  teamOne,
  teamTwo
});

export const getPlayerInfo = (playerInfo) => ({
  type: 'GET_PLAYERS',
  playerInfo
});

export const getStatsInfoOne = (statsOne) => ({
  type: 'GET_STATS_ONE',
  statsOne
});

export const getStatsInfoTwo = (statsTwo) => ({
  type: 'GET_STATS_TWO',
  statsTwo
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