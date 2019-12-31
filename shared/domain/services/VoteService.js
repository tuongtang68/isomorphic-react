// @flow
import { firestore } from "../../core/firebase";
import AuthenticationService from "./AuthenticationService";

class VoteService {
  static fetchByUID = uid => {
    console.log("fetching " + uid);
    const voteRef = firestore.collection("votes");
    return voteRef
      .where("uid", "==", uid)
      .orderBy('votedAt', 'desc')
      .limit(100)
      .get()
      .then(querySnapshot => {
        const votes = [];
        querySnapshot.forEach(doc => {
          votes.push(doc.data());
        });

        return votes;
      });
  };

  static submitVote = score => {
    const voteRef = firestore.collection("votes");
    return voteRef
      .add({
        uid: AuthenticationService.getCurrentUser().uid,
        score,
        votedAt: new Date()
      })
      .then(() => true)
      .catch(e => false);
  };
}

export default VoteService;
