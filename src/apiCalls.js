export const getPlayers = () => {
  let allPromises = [];
  for( let i = 1; i < 5; i++ ) {
    console.log('i: ', i)
    allPromises.push(fetch(`https://www.balldontlie.io/api/v1/players?page=${i}&per_page=100`))
  }
    return Promise.all(allPromises)
      .then(responses => {
        let finishedResponses = [];
        responses.map(r => {
          finishedResponses.push(r)
        })
        return finishedResponses
      })
}