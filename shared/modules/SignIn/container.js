// @flow

import { connect } from "react-redux";

import SignIn from "./components/SignIn";
import { postSignIn, onEmailTextChange, onPasswordTextChange } from "./actions";

const mapStateToProps = state => ({
  ...state.signin
});
const mapDispatchToProps = {
  postSignIn,
  onEmailTextChange,
  onPasswordTextChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
