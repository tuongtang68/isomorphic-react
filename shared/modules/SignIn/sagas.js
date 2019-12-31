// @flow

import { type Saga } from "redux-saga";
import { put, call, takeLatest, delay } from "redux-saga/effects";
import { push } from "connected-react-router";
import * as actionTypes from "./actionTypes";
import * as actionCreators from "./actions";
import AuthenticationService from "../../domain/services/AuthenticationService";

function* postSignIn(action) {
  const { email, password } = action.payload;
  const response = yield call(
    AuthenticationService.signInWithEmailAndPassword,
    email,
    password
  );
  if (response === true) {
    yield put(
      actionCreators.postSignInSuccess(AuthenticationService.getCurrentUser())
    );
    yield put(push("/"));
  } else {
    yield put(actionCreators.postSignInFailure("Incorrect email/password"));
  }
}

export function* postSignInSaga(): Saga {
  yield takeLatest(actionTypes.POST_SIGN_IN, postSignIn);
}
