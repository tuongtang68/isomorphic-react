// @flow

import { connect } from "react-redux";
import Welcome from "./components/Welcome";
import {fetchVotes, goToVote, signOut} from "./actions";

const mapStateToProps = state => ({
  credential: state.signin.credential,
  votes: state.welcome.votes
});

const mapDispatchToProps = { fetchVotes, goToVote, signOut };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
