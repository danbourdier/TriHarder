import { combineReducers } from 'redux';

import usersReducer from './user_reducer';
import routesReducer from './routes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  routes: routesReducer,
});


export default entitiesReducer; 