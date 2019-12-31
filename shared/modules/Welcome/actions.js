// @flow

import {FETCH_VOTES, FETCH_VOTES_SUCCESS, GO_TO_VOTE, SIGN_OUT} from "./actionTypes";

export const fetchVotes = uid => ({
  type: FETCH_VOTES,
  payload: { uid }
});

export const fetchVotesSuccess = votes => ({
  type: FETCH_VOTES_SUCCESS,
  payload: { votes }
});

export const goToVote = () => ({
  type: GO_TO_VOTE
});

export const signOut = () => ({
  type: SIGN_OUT
});
