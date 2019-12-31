// @flow

import {SUBMIT_VOTE} from "./actionTypes";

export const submitVote = score => ({
  type: SUBMIT_VOTE,
  payload: { score }
});
