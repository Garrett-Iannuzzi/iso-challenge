import { teamsInfo } from '../reducers/teamsInfo';

describe('teamsInfo Reducer', () => {

  it('Should return the initial state', () => {
    const expected = [];

    const result = teamsInfo(undefined, []);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_TEAMS', () => {
    const initialState = [];

    const action = { 
        type: 'GET_TEAMS',
        teamOne: { teamOneName: 'G-Swish', skillLevelOne: 'NBA' },
        teamTwo: { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }
      }

    const result = teamsInfo(initialState, action);
    const expected = [
      { id: 1, teamOneName: 'G-Swish', skillLevelOne: 'NBA' },
      { id: 2, teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }
    ];

    expect(result).toEqual(expected)
  });

  it('Should return the correct state if the correct action is SELECT_PLAYER', () => {
    const initialState = [{ id:1, teamOneName: 'G-Swish', skillLevelOne: 'NBA', players: [ 'Me' ] }, { id: 2, teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA', players: [] }];
    
    const action = { 
        type: 'SELECT_PLAYER',
        player: 'Me',
        team: 'G-Swish',
        index: 0
      }

    const result = teamsInfo(initialState, action);
    const expected = [
      { id: 1, teamOneName: 'G-Swish', skillLevelOne: 'NBA', players: [ 'Me'] },
      { id: 2, teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA', players: [ 'Me' ] }
    ];

    expect(result).toEqual(expected)
  });
});
