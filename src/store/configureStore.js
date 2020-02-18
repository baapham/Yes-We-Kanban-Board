import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projects';

export default () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
