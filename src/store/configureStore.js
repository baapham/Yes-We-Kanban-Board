import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import projectsReducer from '../reducers/projects';
import authReducer from '../reducers/auth';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
