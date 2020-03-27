export const getPlayers = (pageNumber) => {
  return fetch(`https://www.balldontlie.io/api/v1/players?page=${pageNumber}&per_page=100`)
  .then(res => {
    if(!res.ok) {
      throw Error('Error fetching players')
    }

    return res.json()
  })
}

export const getNextPlayerPage = async (res, addMorePlayers) => {
  if(res.meta.next_page < 25) {
    const getNextRes = await getPlayers(res.meta.next_page)
    addMorePlayers(getNextRes.data)
    getNextPlayerPage(getNextRes, addMorePlayers)
  }
}

export const getStats = (playerIds) => {
  return playerIds.map(playerId => {
    return fetch(`https://www.balldontlie.io/api/v1/stats/?player_ids[]=${playerId}&player_ids[]=${playerId}&seasons=2017&seasons=2019`)
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching stats')
      }
      return res.json()
    })
  })
} 