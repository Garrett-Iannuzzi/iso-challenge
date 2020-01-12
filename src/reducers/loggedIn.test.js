import { isLoggedIn } from '../reducers/loggedIn';

describe('loggedIn Reducer', () => {

  it('Should return the initial state', () => {
    const expected = null;

    const result = isLoggedIn(undefined, { isLoggedIn: null } );

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_LOGIN', () => {
    const initialState = null;

    const action = { 
        type: 'GET_LOGIN',
        isLoggedIn: false
      }

    const result = isLoggedIn(initialState, action);
    const expected = false

    expect(result).toEqual(expected)
  });
});