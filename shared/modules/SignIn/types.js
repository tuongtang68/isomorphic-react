// @flow

export type TextFieldValidationProps = {
  label: string,
  placeholder: string,
  onTextChange: void,
  onBlur: void,
  style: {},
  value: string,
  secureTextEntry: boolean
};

export type SignInProps = {
  postSignIn: void,
  email: string,
  password: string,
  onEmailTextChange: void,
  onPasswordTextChange: void
}
