import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projects';

export default () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
    }),
  );
  return store;
};
