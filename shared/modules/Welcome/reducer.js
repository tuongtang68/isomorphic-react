// @flow

import { FETCH_VOTES_SUCCESS } from "./actionTypes";

const initialState = {
  votes: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOTES_SUCCESS:
      return { ...state, votes: action.payload.votes };
    default:
      return { ...state };
  }
};
