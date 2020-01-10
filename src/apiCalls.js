export const getPlayers = (pageNumber) => {
  return fetch(`https://www.balldontlie.io/api/v1/players?page=${pageNumber}&per_page=100`)
  .then(res => {
    if(!res.ok) {
      throw Error('Error fetching players')
    }
    return res.json()
  })
} 

export const getStats = () => {
  return fetch('https://www.balldontlie.io/api/v1/stats')
  .then(res => {
    if(!res.ok) {
      throw Error('Error fetching stats')
    }
    return res.json()
  })
} 