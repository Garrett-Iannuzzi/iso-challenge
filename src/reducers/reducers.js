import { combineReducers } from 'redux';
import { teamsInfo } from './teamsInfo';
import { playerInfo } from './playerInfo';
import { statsInfo } from './statsInfo';

const rootReducer = combineReducers({
  teamInfo: teamsInfo,
  playerInfo,
  statsInfo
});

export default rootReducer;
