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
  if(res.meta.next_page < 10) {
    const getNextRes = await getPlayers(res.meta.next_page)
    addMorePlayers(getNextRes.data)
    getNextPlayerPage(getNextRes, addMorePlayers)
  }
}

export const getStats = (playerIds) => {
  //make a fetch call for each player id, async await 
  // URL: https://www.balldontlie.io/api/v1/stats/?seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true
  return fetch('https://www.balldontlie.io/api/v1/stats')
  .then(res => {
    if(!res.ok) {
      throw Error('Error fetching stats')
    }
    return res.json()
  })
} 