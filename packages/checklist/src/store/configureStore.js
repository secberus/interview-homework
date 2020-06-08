import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import TaskReducer from './reducers/tasks';

const rootReducer = combineReducers({
  tasks: TaskReducer
});

const middlewares = [thunk, logger];

const createRootStore = () => createStore(rootReducer, applyMiddleware(...middlewares))

export default createRootStore;