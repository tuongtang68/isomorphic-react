// @flow
import { type Saga } from "redux-saga";
import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import * as actionTypes from "./actionTypes";
import VoteService from "../../domain/services/VoteService";

export function* submitVote(action) {
  const { score } = action.payload;
  const response = yield call(VoteService.submitVote, score);

  if (response === true) {
    yield put(push("/"));
  } else {
    alert("Cannot submit a vote");
  }
}

export function* submitVoteSaga(): Saga {
  yield takeLatest(actionTypes.SUBMIT_VOTE, submitVote);
}
