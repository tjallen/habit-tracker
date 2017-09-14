import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

// returns a configured store instance
const configureStore = () => {
  const preloadedState = loadState();

  const middleware = applyMiddleware(logger);
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleware),
  );

  // on store change, save tasks to localStorage
  store.subscribe(throttle(() => {
    saveState({
      tasks: store.getState().tasks
    });
  }, 1000));
  return store;
}

export default configureStore;