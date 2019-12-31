// @flow

import {
  ON_EMAIL_TEXT_CHANGE,
  ON_PASSWORD_TEXT_CHANGE,
  POST_SIGN_IN,
  POST_SIGN_IN_FAILURE,
  POST_SIGN_IN_SUCCESS
} from "./actionTypes";

export const postSignIn = (email, password) => ({
  type: POST_SIGN_IN,
  payload: { email, password }
});

export const postSignInFailure = error => ({
  type: POST_SIGN_IN_FAILURE,
  error
});

export const postSignInSuccess = credential => ({
  type: POST_SIGN_IN_SUCCESS,
  payload: { credential }
});

export const onEmailTextChange = email => ({
  type: ON_EMAIL_TEXT_CHANGE,
  payload: { email }
});

export const onPasswordTextChange = password => ({
  type: ON_PASSWORD_TEXT_CHANGE,
  payload: { password }
});
