import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import adminBracketReducer from './reducers/adminBracketPageReducers';

export default combineReducers({ 
  routing: routerReducer,
  display: adminBracketReducer
});
