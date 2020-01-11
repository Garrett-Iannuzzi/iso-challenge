import { playerInfo } from '../reducers/playerInfo';

describe('playerInfo Reducer', () => {

  it('Should return the initial state', () => {
    const expected = [];

    const result = playerInfo(undefined, []);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_TEAMS', () => {
    const initialState = [];
    const players = [
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

    const action = { 
        type: 'GET_PLAYERS',
        playerInfo: players
      }

    const result = playerInfo(initialState, action);
    const expected =  players;

    expect(result).toEqual(expected)
  });
});