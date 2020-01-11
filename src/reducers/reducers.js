import { combineReducers } from 'redux';
import { teamsInfo } from './teamsInfo';
import { playerInfo } from './playerInfo';


const rootReducer = combineReducers({
  teamInfo: teamsInfo,
  playerInfo
});

export default rootReducer;
