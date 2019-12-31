// @flow

import React, { Fragment } from "react";
import { Route } from "react-router";
import Welcome from "../../../Welcome";
import SignIn from "../../../SignIn";
import Vote from "../../../Vote";

export default () => (
  <Fragment>
    <Route exact path="/" component={Welcome} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/vote" component={Vote} />
  </Fragment>
);
