// @flow

import React from "react";
import styled from "styled-components";

import styles from "./styles";
import type {VoteProps} from "../../types";

const moment = require('moment');

const Wrapper = styled.View`
  ${styles.wrapper}
`;

const TimeText = styled.Text`
  ${styles.timeText}
`;

const ScoreText = styled.Text`
  ${styles.scoreText}
`;

export default (props: VoteProps) => {
  return (
    <Wrapper style={props.style}>
      <TimeText>{moment.unix(props.vote.votedAt.seconds).format('DD-MM-YYYY HH:mm')}</TimeText>
      <ScoreText>{props.vote.score}</ScoreText>
    </Wrapper>
  );
};
