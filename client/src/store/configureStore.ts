

import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { thermoStatReducer } from "../reducers/thermostatReducer";
import rootSaga from "./rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
export const rootReducer = combineReducers({
    thermostat: thermoStatReducer
  });
  export type AppState = ReturnType<typeof rootReducer>;
 const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;

