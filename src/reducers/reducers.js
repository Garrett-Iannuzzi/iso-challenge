import { combineReducers } from 'redux';
import { teamsInfo } from './teamsInfo';


const rootReducer = combineReducers({
  teamInfo: teamsInfo
});

export default rootReducer;
