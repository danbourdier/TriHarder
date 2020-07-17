import { combineReducers } from 'redux';

import usersReducer from './user_reducer';
import routesReducer from './routes_reducer';
import commentReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  routes: routesReducer,
  comments: commentReducer,
});


export default entitiesReducer; 