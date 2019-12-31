// @flow

import React from "react";
import styled from "styled-components";
import { RadioGroup, Radio } from "react-radio-group";

import styles from "./styles";
import type { ScoresProps } from "../../types";

const Wrapper = styled.div`
  ${styles.wrapper}
`;
const ScoreText = styled.span`
  margin-left: 5px;
`;

export default (props: ScoresProps) => (
  <Wrapper>
    <RadioGroup onChange={props.submitVote} name="score">
      {props.scores.map(score => (
        <div
          style={{
            float: "left",
            marginRight: 10
          }}
        >
          <Radio key={`score_${score}`} value={score} />
          <ScoreText>{score}</ScoreText>
        </div>
      ))}
    </RadioGroup>
  </Wrapper>
);
