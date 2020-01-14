import { combineReducers } from 'redux';
import { teamsInfo } from './teamsInfo';
import { playerInfo } from './playerInfo';
import { statsInfoOne } from './statsInfoOne';
import { statsInfoTwo } from './statsInfoTwo';
import { isLoggedIn } from './loggedIn';

const rootReducer = combineReducers({
  teamInfo: teamsInfo,
  playerInfo,
  statsInfoOne,
  statsInfoTwo,
  isLoggedIn
});

export default rootReducer;
