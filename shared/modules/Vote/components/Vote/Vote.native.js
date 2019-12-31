// @flow

import React from "react";
import styled from "styled-components";

import type { SubmitVoteProps } from "../../types";
import Scores from "../Scores";
import styles from "./styles";

const Wrapper = styled.SafeAreaView`
  ${styles.wrapper}
`;
const Container = styled.View`
  ${styles.container}
`;
const ScoreSection = styled(Scores)`
  ${styles.scoreSection}
`;

const Header = styled.View`
  ${styles.header}
`;

const Title = styled.Text`
  ${styles.title}
`;

export default (props: SubmitVoteProps) => (
  <Wrapper>
    <Container>
      <Header>
        <Title>Submit a Vote</Title>
      </Header>
      <ScoreSection submitVote={props.submitVote} scores={props.scores} />
    </Container>
  </Wrapper>
);
