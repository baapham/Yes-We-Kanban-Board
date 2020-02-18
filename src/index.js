import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { addProject, removeProject } from './actions/projects';

const store = configureStore();

store.dispatch(
  addProject({
    title: 'hello',
    description: 'world',
    createdAt: 20,
  }),
);
store.dispatch(
  addProject({
    title: 'caa',
    description: 'baa',
    createdAt: 20,
  }),
);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
