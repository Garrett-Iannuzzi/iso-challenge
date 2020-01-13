import { getPlayers } from './apiCalls';

describe('apiCalls', () => {

  describe('getPlayers', () => {
    let mockResponse = {
      "data": [
        {        
          id:14,
          first_name:"Ike",
          height_feet:null,
          height_inches:null,
          last_name:"Anigbogu",
          position:"C",
          team: {
            id:12,
            abbreviation:"IND",
            city:"Indiana",
            conference:"East",
            division:"Central",
            full_name:"Indiana Pacers",
            name:"Pacers"
          },
          weight_pounds:null
        },
        {
          id:25,
          first_name:"Ron",
          height_feet:null,
          height_inches:null,
          last_name:"Baker",
          position:"G",
          team: {
            id:20,
            abbreviation:"NYK",
            city:"New York",
            conference:"East",
            division:"Atlantic",
            full_name:"New York Knicks",
            name:"Knicks"
          },
          weight_pounds:null
        }
      ]
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    });

    it('should call fetch with the correct URL', () => {
      const mockPageNumber = 1
      getPlayers(mockPageNumber)

      expect(window.fetch).toHaveBeenCalledWith(`https://www.balldontlie.io/api/v1/players?page=${mockPageNumber}&per_page=100`)
    });

    it('should return an array of players', () => {
      expect(getPlayers()).resolves.toEqual(mockResponse)
    });
    
    // it('should throw an error if fetch fails', () => {
    //   window.fetch = jest.fn().mockImplementation(()=> {
    //     return Promise.resolve({
    //       ok: false
    //     })
    //   })

    //   expect(fetchMovies()).rejects.toEqual(Error('Error fetching movies'))
    // }) 

    // it('should return an error if promise rejects', () => {
    //   window.fetch = jest.fn().mockImplementation(() => {
    //     return Promise.reject(Error('fetch failed'))
    //   })

    //   expect(fetchMovies()).rejects.toEqual(Error('fetch failed'))
    // })
  })

});