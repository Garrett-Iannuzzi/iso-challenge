import * as actions from './actions';

describe('Actions', () => {

  it('Should have a type of GET_TEAMS', () => {
    const teamOne = { teamOneName: 'G-Swish', skillLevelOne: 'NBA' }
    const teamTwo = { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }

    const result = actions.getTeamsInfo(teamOne, teamTwo);
    const mockExpectedAction = {
      type: 'GET_TEAMS',
      teamOne: { teamOneName: 'G-Swish', skillLevelOne: 'NBA' },
      teamTwo: { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }
    } 

    expect(result).toEqual(mockExpectedAction);
  });

  it('Should have a type of GET_PLAYERS', () => {
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

    const result = actions.getPlayerInfo(players);
    const mockExpectedAction = {
      type: 'GET_PLAYERS',
      playerInfo: players
    } 

    expect(result).toEqual(mockExpectedAction);
  });

  it('Should have a type of GET_LOGIN', () => {
    const status = false;

    const result = actions.isLoggedIn(status);
    const mockExpectedAction = {
      type: 'GET_LOGIN',
      isLoggedIn: false
    } 

    expect(result).toEqual(mockExpectedAction);
  });

});