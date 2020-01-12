import { combineReducers } from 'redux';
import { teamsInfo } from './teamsInfo';
import { playerInfo } from './playerInfo';
import { statsInfo } from './statsInfo';
import { isLoggedIn } from './loggedIn';

const rootReducer = combineReducers({
  teamInfo: teamsInfo,
  playerInfo,
  statsInfo,
  isLoggedIn
});

export default rootReducer;
