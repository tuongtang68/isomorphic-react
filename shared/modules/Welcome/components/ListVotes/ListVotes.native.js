// @flow
import React from "react";
import styled from "styled-components";
import Vote from "../Vote";
import type { ListVotesProps } from "../../types";
import styles from "./styles";

const ScrollableWrapper = styled.ScrollView`
  ${styles.scrollableWrapper}
`;

const Wrapper = styled.View`
  ${styles.wrapper}
`;

const Header = styled.View`
  ${styles.header}
`;

const Column = styled.View`
  ${styles.column}
`;

const ColumnText = styled.Text`
  ${styles.columnText}
`;

const VoteRow = styled(Vote)`
  ${styles.vote}
`;

const Title = styled.Text`
  ${styles.title}
`;

export default (props: ListVotesProps) => (
  <Wrapper style={props.style}>
    <Title>Your votes are below</Title>
    <Header>
      <Column>
        <ColumnText>Vote At</ColumnText>
      </Column>
      <Column>
        <ColumnText>Score</ColumnText>
      </Column>
    </Header>
    <ScrollableWrapper>
      {props.votes.map((vote, idx) => (
        <VoteRow key={`vote_${idx}`} vote={vote} />
      ))}
    </ScrollableWrapper>
  </Wrapper>
);
