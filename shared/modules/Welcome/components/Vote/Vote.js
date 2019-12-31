// @flow
import React from "react";
import styled from "styled-components";

import styles from "./styles";
import type { VoteProps } from "../../types";

const moment = require("moment");

const Wrapper = styled.div`
  ${styles.wrapper}
`;

const TimeText = styled.div`
  ${styles.timeText}
`;

const ScoreText = styled.div`
  ${styles.scoreText}
`;

export default (props: VoteProps) => (
  <Wrapper style={props.style}>
    <TimeText>
      {moment.unix(props.vote.votedAt.seconds).format("DD-MM-YYYY HH:mm")}
    </TimeText>
    <ScoreText>{props.vote.score}</ScoreText>
  </Wrapper>
);
