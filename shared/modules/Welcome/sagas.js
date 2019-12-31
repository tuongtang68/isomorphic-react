// @flow

import { type Saga } from "redux-saga";
import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as actionTypes from "./actionTypes";
import * as actionCreator from "./actions";
import VoteService from "../../domain/services/VoteService";

function* fetchVotes(action) {
  const { uid } = action.payload;
  const votes = yield call(VoteService.fetchByUID, uid);
  yield put(actionCreator.fetchVotesSuccess(votes));
}

export function* fetchVotesSaga(): Saga {
  yield takeLatest(actionTypes.FETCH_VOTES, fetchVotes);
}

function* goToVote() {
  yield put(push("/vote"));
}

export function* goToVoteSaga(): Saga {
  yield takeLatest(actionTypes.GO_TO_VOTE, goToVote);
}

function* navigateToSignIn() {
  yield put(push("/sign-in"));
}

export function* signOutSaga(): Saga {
  yield takeLatest(actionTypes.SIGN_OUT, navigateToSignIn);
}
