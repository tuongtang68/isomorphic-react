// @flow

import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { all } from "redux-saga/effects";

import store from "../core/store";
import { history } from "../core/history";
import App from "./App";
import { postSignInSaga } from "./SignIn/sagas";
import sagaMiddleware from "../core/sagaMiddleware";
import {fetchVotesSaga, goToVoteSaga, signOutSaga} from "./Welcome/sagas";
import { submitVoteSaga } from "./Vote/sagas";

function* combineSagas() {
  const sagas = [
    postSignInSaga(),
    fetchVotesSaga(),
    goToVoteSaga(),
    submitVoteSaga(),
    signOutSaga()
  ];
  yield all(sagas);
}

sagaMiddleware.run(combineSagas);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
