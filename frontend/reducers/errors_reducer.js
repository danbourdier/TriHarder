import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import routesErrorsReducer from './routes_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  routes: routesErrorsReducer,
  comments: commentErrorsReducer,
});

export default errorsReducer; 