// @flow

import { applyMiddleware, combineReducers, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistReducer } from "redux-persist";
import app from "../modules/App/reducer";
import signin from "../modules/SignIn/reducer";
import welcome from "../modules/Welcome/reducer";
import vote from "../modules/Vote/reducer";

import storage from "./storage";

import { history } from "./history";
import sagaMiddleware from "./sagaMiddleware";

const rootReducer = combineReducers({
  app,
  signin,
  welcome,
  vote,
  router: connectRouter(history)
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signin"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(...[sagaMiddleware, routerMiddleware(history)])
);

export default store;
