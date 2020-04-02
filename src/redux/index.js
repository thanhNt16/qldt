import * as reduxModule from "redux";
import { applyMiddleware, compose, createStore } from "redux";
import createReducer from "./reducer";
import createSagaMiddleware from "redux-saga";

function* helloSaga() {
  console.log("Hello Sagas!");
}
/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// const store = createStore(createReducer(), enhancer);
// sagaMiddleware.run(helloSaga);

const initializeStore = initialState => {
  const store = createStore(createReducer(), initialState, enhancer);
  sagaMiddleware.run(helloSaga);
  return store;
};

export default initializeStore;
