// @flow

import React from 'react';
import styled from "styled-components";
import styles from "./styles";
import Scores from "../Scores";
import type {SubmitVoteProps} from "../../types";

const Wrapper = styled.div`
  ${styles.wrapper}
`;
const Container = styled.div`
  ${styles.container}
`;
const ScoreSection = styled(Scores)`
  ${styles.scoreSection}
`;

const Header = styled.div`
  ${styles.header}
`;

const Title = styled.h2`
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
