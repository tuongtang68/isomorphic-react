// @flow

import { REHYDRATE } from "redux-persist";
import {
  ON_EMAIL_TEXT_CHANGE,
  ON_PASSWORD_TEXT_CHANGE,
  POST_SIGN_IN,
  POST_SIGN_IN_FAILURE,
  POST_SIGN_IN_SUCCESS
} from "./actionTypes";
import { SIGN_OUT } from "../Welcome/actionTypes";

const initialState = {
  signing: false,
  email: "",
  password: "",
  credential: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_EMAIL_TEXT_CHANGE:
      return {
        ...state,
        email: action.payload.email
      };
    case ON_PASSWORD_TEXT_CHANGE:
      return {
        ...state,
        password: action.payload.password
      };
    case POST_SIGN_IN:
      return {
        ...state,
        signing: true
      };
    case POST_SIGN_IN_SUCCESS:
      return {
        ...state,
        signing: false,
        credential: action.payload.credential
      };
    case REHYDRATE:
      if (
        action.payload &&
        action.payload.signin &&
        action.payload.signin.credential
      ) {
        return {
          ...state,
          credential: action.payload.signin.credential
        };
      }
      return { ...state };
    case POST_SIGN_IN_FAILURE:
      return { ...state, signing: false };
    case SIGN_OUT:
      return {
        ...state,
        credential: null
      };
    default:
      return { ...state };
  }
};
