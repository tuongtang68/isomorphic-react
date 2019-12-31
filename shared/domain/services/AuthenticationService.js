// @flow

import { auth } from "../../core/firebase";

class AuthenticationService {
  static signInWithEmailAndPassword = (email: string, password: string) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() => true)
      .catch(e => false);
  };

  static getCurrentUser = () => {
    return auth.currentUser;
  }
}

export default AuthenticationService;
