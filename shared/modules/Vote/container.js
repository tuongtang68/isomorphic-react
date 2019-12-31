// @flow

import { connect } from "react-redux";
import Vote from "./components/Vote";
import { submitVote } from "./actions";

const mapStateToProps = state => ({
  scores: state.vote.scores
});
const mapDispatchToProps = { submitVote };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote);
